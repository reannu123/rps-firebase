import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  onChildAdded,
  push,
  onValue,
  get,
} from "firebase/database";
import {
  useList,
  useObject,
  useListKeys,
  useListVals,
  useObjectVal,
} from "react-firebase-hooks/database";
import MenuScreen from "../pages/MenuScreen";
import Queue from "../pages/Queue";
import PlayMenu from "../pages/PlayMenu";

function GamePage(props: any) {
  const rtdb = getDatabase(props.app);

  // Screen States
  const [screen, setScreen] = useState(0);

  // States
  const [inQueue, setInQueue] = useState(false);
  const [inGame, setInGame] = useState(false);
  const [lobbyID, setLobby] = useState<string | null>("");
  const [opponent, setOpponent] = useState<string | null>("");
  const [canMove, setCanMove] = useState(true);
  const [playerNum, setPlayerNum] = useState(0);
  const [opponentNum, setOpponentNum] = useState(0);
  const [move, setMove] = useState("");
  const [showMove, setShowMove] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [win, setWin] = useState(0);
  const [oppImg, setOppImg] = useState("");
  const [playerReady, setPlayerReady] = useState(true);

  const [queue, loadingqueue, errorqueue] = useObject(
    ref(rtdb, "queue/" + props.user.uid)
  );

  // Interactable functions
  function joinQueue() {
    set(ref(rtdb, "queue/" + props.user.uid), {
      uid: props.user.uid,
      name: props.user.displayName,
      email: props.user.email,
      photourl: props.user.photoURL,
    });
    setInQueue(true);
  }

  function leaveQueue() {
    set(ref(rtdb, "queue/" + props.user.uid), null);
    setInQueue(false);
  }

  function setReady() {
    setPlayerReady(false);
    setShowResult(false);
    setCanMove(true);
    setShowMove(false);
  }

  function leaveGame() {
    set(ref(rtdb, "lobbies/" + lobbyID), null);
    setInGame(false);
    setLobby(null);
    setOpponent(null);
    setCanMove(true);
    setPlayerNum(0);
    setOpponentNum(0);
    setMove("");
    setShowMove(false);
    setShowResult(false);
  }

  function addMove(move: any) {
    const moves = ref(rtdb, "lobbies/" + lobbyID + "/moves/player" + playerNum);
    setMove(move);
    push(moves, move);
    set(ref(rtdb, "lobbies/" + lobbyID + "/ready/player" + playerNum), true);
    setCanMove(false);
    setShowMove(true);
  }

  const [lobbies, loading, error] = useList(ref(rtdb, "lobbies/"));
  const [queues, loadingQueue, errorQueue] = useList(ref(rtdb, "queue/"));
  const [ready1, loadingReady1, errorReady1] = useObject(
    ref(rtdb, "lobbies/" + lobbyID + "/ready/player" + playerNum)
  );
  const [ready2, loadingReady2, errorReady2] = useObject(
    ref(rtdb, "lobbies/" + lobbyID + "/ready/player" + opponentNum)
  );

  // get my latest move
  const [myMoves, loadingMyMoves, errorMyMoves] = useList(
    ref(rtdb, "lobbies/" + lobbyID + "/moves/player" + playerNum)
  );
  // get opponent's latest move
  const [theirMoves, loadingTheirMoves, errorTheirMoves] = useList(
    ref(rtdb, "lobbies/" + lobbyID + "/moves/player" + opponentNum)
  );

  // Check if the user has been placed in a lobby
  useEffect(() => {
    if (lobbies) {
      lobbies.forEach((lobby) => {
        if (lobby.val().player1.uid === props.user.uid) {
          setInQueue(false);
          setInGame(true);
          setOpponent(lobby.val().player2.name);
          setLobby(lobby.key);
          setPlayerNum(1);
          setOpponentNum(2);
          if (lobby.val().player2.photourl) {
            setOppImg(lobby.val().player2.photourl);
          } else {
            // Get url of default profile pic from google
            setOppImg("https://i.stack.imgur.com/34AD2.jpg");
          }
        } else if (lobby.val().player2.uid === props.user.uid) {
          setInQueue(false);
          setInGame(true);
          setOpponent(lobby.val().player1.name);
          setLobby(lobby.key);
          setPlayerNum(2);
          setOpponentNum(1);
          if (lobby.val().player1.photourl) {
            setOppImg(lobby.val().player1.photourl);
          } else {
            // Get url of default profile pic from google
            setOppImg("https://i.stack.imgur.com/34AD2.jpg");
          }
        }
      });
    }
  }, [lobbies]);

  // Check if the user is in the queue
  useEffect(() => {
    if (queue?.val()) {
      if (queue.val().uid === props.user.uid) {
        setInQueue(true);
      } else {
        setInQueue(false);
      }
    } else {
      setInQueue(false);
    }
  }, [queues, queue]);

  // Check if the lobby still exists in the list of lobbies
  useEffect(() => {
    if (lobbyID) {
      get(ref(rtdb, "lobbies/" + lobbyID)).then((snapshot) => {
        if (!snapshot.exists()) {
          setInGame(false);
          setLobby(null);
          setOpponent(null);
          setCanMove(true);
          setPlayerNum(0);
          setOpponentNum(0);
          setMove("");
          setShowMove(false);
          setShowResult(false);
        }
      });
    }
  }, [lobbies]);

  // Game logic
  useEffect(() => {
    if (ready1?.val() && ready2?.val() && myMoves && theirMoves) {
      console.log("Opponent's Moves: ", theirMoves);

      setTimeout(() => {
        let myMove = myMoves[myMoves.length - 1];
        let theirMove = theirMoves[theirMoves.length - 1];

        // Compare the moves
        if (myMove.val() === "rock" && theirMove.val() === "scissors") {
          setWin(1);
        } else if (myMove.val() === "scissors" && theirMove.val() === "paper") {
          setWin(1);
        } else if (myMove.val() === "paper" && theirMove.val() === "rock") {
          setWin(1);
        } else if (myMove.val() === theirMove.val()) {
          setWin(0);
        } else {
          setWin(2);
        }
        setShowResult(true);
      }, 1000);

      // Reset the ready state

      setTimeout(() => {
        set(
          ref(rtdb, "lobbies/" + lobbyID + "/ready/player" + playerNum),
          false
        );
      }, 2000);
      setPlayerReady(true);
    }
  }, [
    ready1,
    ready2,
    loadingMyMoves,
    loadingTheirMoves,
    loadingReady1,
    loadingReady2,
  ]);

  //
  //
  // Interface
  //
  //

  if (inQueue && !inGame) {
    return (
      <div>
        <h1>Waiting for other players...</h1>
        <button
          className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
          onClick={() => leaveQueue()}
        >
          Leave Queue
        </button>
      </div>
    );
  } else if (!inQueue && inGame) {
    // GAME
    return (
      <div className="h-[90vh]">
        <h1 className="text-center text-xl">In Game</h1>
        <div className="p-4 flex flex-col w-screen items-center justify-center">
          {/* Opponent */}
          <section>
            <div className="flex flex-row justify-center">
              <div className="flex flex-col items-center">
                <h1>Opponent</h1>
                <h2>{opponent}</h2>
                <img src={oppImg} alt="Opponent" className="rounded-full" />
              </div>
            </div>
          </section>
          {/* Controls */}
          <section>
            <div className="flex flex-row justify-center">
              <div className="flex flex-col items-center">
                <h1>Controls</h1>
                <div>
                  {canMove ? (
                    <>
                      <button
                        className="m-4 bg-yellow-900 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded transition-all"
                        onClick={() => {
                          addMove("rock");
                        }}
                      >
                        Rock
                      </button>
                      <button
                        className="m-4 bg-gray-100 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded transition-all"
                        onClick={() => {
                          addMove("paper");
                        }}
                      >
                        Paper
                      </button>
                      <button
                        className="m-4 bg-pink-400 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded transition-all"
                        onClick={() => {
                          addMove("scissors");
                        }}
                      >
                        Scissors
                      </button>
                    </>
                  ) : (
                    <h1>Waiting for opponent...</h1>
                  )}
                </div>
                <div>
                  <button
                    className="m-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-all"
                    onClick={() => leaveGame()}
                  >
                    Leave Game
                  </button>
                </div>
                <div>
                  {showMove ? (
                    <h1 className="text-4xl">{move}</h1>
                  ) : (
                    <h1 className="text-4xl">Select a move</h1>
                  )}
                  {showResult ? (
                    <>
                      {win === 1 ? (
                        <>
                          Opponent's Move:{" "}
                          <h1 className="text-4xl text-green-400">
                            {theirMoves
                              ? theirMoves[theirMoves.length - 1].val()
                              : "hello"}
                          </h1>
                          <h1 className="text-4xl text-green-400">You win! </h1>
                        </>
                      ) : win === 2 ? (
                        <>
                          Opponent's Move:{" "}
                          <h1 className="text-4xl text-red-500">
                            {theirMoves
                              ? theirMoves[theirMoves.length - 1].val()
                              : "hello"}
                          </h1>
                          <h1 className="text-4xl text-red-500">You lose!</h1>
                        </>
                      ) : (
                        <>
                          Opponent's Move:{" "}
                          <h1 className="text-4xl text-orange-500">
                            {theirMoves
                              ? theirMoves[theirMoves.length - 1].val()
                              : "hello"}
                          </h1>
                          <h1 className="text-4xl text-orange-500">Draw!</h1>
                        </>
                      )}
                      {playerReady && (
                        <button
                          className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
                          onClick={() => {
                            setReady();
                          }}
                        >
                          Ready
                        </button>
                      )}
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div>
      {screen === 0 ? (
        <MenuScreen setScreen={setScreen} />
      ) : screen === 1 ? (
        <PlayMenu setScreen={setScreen} joinQueue={joinQueue} />
      ) : screen === 2 ? (
        <div>
          <h1 className="text-4xl text-center select-none mb-4 lg:mb-10">
            Friends
          </h1>
          <div
            className="h-[10vh] w-[30vh] lg:h-[15vh] bg-purple-600  hover:bg-purple-500 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg"
            onClick={() => {
              setScreen(0);
            }}
          >
            <h1 className="m-auto">Back</h1>
          </div>
        </div>
      ) : screen === 3 ? (
        <div>
          <h1 className="text-4xl text-center select-none mb-4 lg:mb-10">
            Options
          </h1>
          <div
            className="h-[10vh] w-[30vh] lg:h-[15vh] bg-purple-600  hover:bg-purple-500 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg"
            onClick={() => {
              setScreen(0);
            }}
          >
            <h1 className="m-auto">Back</h1>
          </div>
        </div>
      ) : null}

      {/* <PlayMenu /> */}
    </div>
  );
}

export default GamePage;
