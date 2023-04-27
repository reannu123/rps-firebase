import React, { useState } from "react";
import {
  getDatabase,
  ref,
  set,
  onChildAdded,
  push,
  onValue,
  get,
} from "firebase/database";

function Casual(props: any) {
  const rtdb = getDatabase(props.app);
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
  if (inGame) {
  }
  if (!inQueue) {
    return (
      <div>
        <button
          className="m-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-all"
          onClick={() => {
            joinQueue();
          }}
        >
          Queue Casual Game
        </button>
      </div>
    );
  } else {
    return <div>In Queue</div>;
  }
}

export default Casual;
