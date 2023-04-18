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

function GamePage(props: any) {
  const rtdb = getDatabase(props.app);

  // States
  const [inQueue, setInQueue] = useState(false);
  const [inGame, setInGame] = useState(false);
  const [lobbyID, setLobby] = useState<string | null>("");
  const [opponent, setOpponent] = useState<string | null>("");
  const [canMove, setCanMove] = useState(true);
  const [playerNum, setPlayerNum] = useState(0);
  const [opponentNum, setOpponentNum] = useState(0);

  // Interactable functions
  function leaveQueue() {
    set(ref(rtdb, "queue/" + props.user.uid), null);
    setInQueue(false);
  }
  function addMove(move: string) {
    const moves = ref(
      rtdb,
      "lobbies/" + lobbyID + "/moves/" + `player${playerNum}`
    );
    push(moves, move);
    set(ref(rtdb, "lobbies/" + lobbyID + "/ready/player" + playerNum), true);
    setCanMove(false);
  }

  function addUsertoQueue(user: User) {
    const queue = ref(rtdb, "queue/" + user.uid);
    set(queue, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photourl: user.photoURL,
    });
  }

  useEffect(() => {
    const lobbies = ref(rtdb, "lobbies/");
    // Find the lobby that has the user
    onChildAdded(lobbies, (snapshot) => {
      const lobby = snapshot.val();

      if (lobby.player1.uid === props.user.uid) {
        setInQueue(false);
        setInGame(true);
        setOpponent(lobby.player2.email);
        setLobby(snapshot.key);
        setPlayerNum(1);
        setOpponentNum(2);
      } else if (lobby.player2.uid === props.user.uid) {
        setInQueue(false);
        setInGame(true);
        setOpponent(lobby.player1.email);
        setLobby(snapshot.key);
        setPlayerNum(2);
        setOpponentNum(1);
      }
    });
    onValue(ref(rtdb, "lobbies/" + lobbyID + "/"), (snapshot) => {});
  }, [props.user]);

  useEffect(() => {
    setInterval(() => {
      onValue(
        ref(rtdb, "lobbies/" + lobbyID + "/ready/player" + opponentNum),
        (snapshot) => {
          if (snapshot.val()) {
            setCanMove(true);
            set(
              ref(rtdb, "lobbies/" + lobbyID + "/ready/player" + playerNum),
              false
            );
          }
        }
      );
    }, 1000);
  });

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
          <section>
            <div className="flex flex-row justify-center">
              <div className="flex flex-col items-center">
                <h1>Opponent</h1>
                <h2>{opponent}</h2>
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-row justify-center">
              <div className="flex flex-col items-center">
                <h1>Controls</h1>
                <div>
                  {canMove ? (
                    <>
                      <button
                        className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
                        onClick={() => {
                          addMove("rock");
                        }}
                      >
                        Rock
                      </button>
                      <button
                        className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
                        onClick={() => {
                          addMove("paper");
                        }}
                      >
                        Paper
                      </button>
                      <button
                        className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
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
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
        onClick={() => {
          addUsertoQueue(props.user);
          setInQueue(true);
        }}
      >
        Queue
      </button>
    </div>
  );
}

export default GamePage;
