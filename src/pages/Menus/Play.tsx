import React, { useState } from "react";
import Casual from "../GamePages/Casual";

function Play(props: any) {
  const [playScreen, setPlayScreen] = useState(0);

  if (playScreen === 0) {
    return (
      <div className="">
        <div className="text-4xl text-center select-none mb-4 lg:mb-10">
          Play a Game
        </div>
        <div className="flex flex-col lg:flex-row max-lg:space-y-2 items-center lg:space-x-4 justify-center select-none">
          <div
            className="h-[20vh] w-[30vh] lg:h-[30vh] bg-blue-400  hover:bg-blue-300 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg"
            onClick={() => {
              setPlayScreen(1); // Casual
            }}
          >
            <h1 className="m-auto">Casual</h1>
          </div>
          <div
            className="h-[20vh] w-[30vh] lg:h-[30vh] bg-red-400  hover:bg-red-300 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg"
            onClick={() => {
              setPlayScreen(2);
            }}
          >
            <h1 className="m-auto">Ranked</h1>
          </div>
          <div
            className="h-[20vh] w-[30vh] lg:h-[30vh] bg-green-500  hover:bg-green-400 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg"
            onClick={() => {
              setPlayScreen(3);
            }}
          >
            <h1 className="m-auto">VS AI</h1>
          </div>
          <div
            className="h-[10vh] w-[30vh] lg:h-[15vh] bg-purple-600  hover:bg-purple-500 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg"
            onClick={() => {
              props.setScreen(0);
            }}
          >
            <h1 className="m-auto">Back</h1>
          </div>
        </div>
      </div>
    );
  } else if (playScreen === 1) {
    return <Casual user={props.user} />;
  } else if (playScreen === 2) {
    return <>Ranked</>;
  } else if (playScreen === 3) {
    return <>VS AI</>;
  } else {
    return <div>ERROR</div>;
  }
}

export default Play;
