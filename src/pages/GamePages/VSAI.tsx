import { useState, useEffect } from "react";

function VSAI() {
  const opponent = "AI";
  const [inGame, setInGame] = useState(false);
  const [canMove, setCanMove] = useState(false);
  const [showMove, setShowMove] = useState(false);
  const [move, setMove] = useState("");
  const [showResult, setShowResult] = useState(false);

  function addMove(move: any) {
    setMove(move);
    setCanMove(false);
    setShowMove(true);
  }

  // GAME
  return <></>;
}

export default VSAI;
