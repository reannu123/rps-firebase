import React, { useState } from "react";

function Match(props: any) {
  const gameType = props.gameType;
  const opponent = props.opponent;
  const [canMove, setCanMove] = useState(true);
  // const [playerNum, setPlayerNum] = useState(0);
  // const [opponentNum, setOpponentNum] = useState(0);
  const [move, setMove] = useState("");
  const [showMove, setShowMove] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [win, setWin] = useState(0);
  // const [oppImg, setOppImg] = useState("");
  const [playerReady, setPlayerReady] = useState(true);

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
              <h3></h3>
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

export default Match;
