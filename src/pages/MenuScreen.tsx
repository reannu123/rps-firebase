import React from "react";

function MenuScreen(props: any) {
  return (
    <div className="space-y-8">
      <div className="text-4xl text-center select-none">RPS!</div>
      <div className="">
        <div className="flex flex-col lg:w-[20vh] items-center space-y-4 justify-center select-none ">
          <div
            className="lg:h-[15vh] w-full bg-blue-400  hover:bg-blue-300 text-4xl transition-all flex items-center justify-center rounded-lg p-4"
            onClick={() => {
              props.setScreen(1);
            }}
          >
            <h1 className="m-auto">Play</h1>
          </div>
          <div
            className=" w-full bg-red-400  hover:bg-red-300 text-4xl transition-all flex items-center justify-center rounded-lg p-4"
            onClick={() => {
              props.setScreen(2);
            }}
          >
            <h1 className="m-auto">Friends</h1>
          </div>
          <div
            className=" w-full bg-green-500  hover:bg-green-400 text-4xl transition-all flex items-center justify-center rounded-lg p-4"
            onClick={() => {
              props.setScreen(3);
            }}
          >
            <h1 className="m-auto">Options</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuScreen;
