import React from "react";

function FriendsScreen(props: any) {
  return (
    <div>
      <h1 className="text-4xl text-center select-none mb-4 lg:mb-10">
        Friends
      </h1>
      <div
        className="h-[10vh] w-[30vh] lg:h-[15vh] bg-purple-600  hover:bg-purple-500 text-3xl hover:text-4xl transition-all flex items-center justify-center rounded-lg"
        onClick={() => {
          props.setScreen(0);
        }}
      >
        <h1 className="m-auto">Back</h1>
      </div>
    </div>
  );
}

export default FriendsScreen;
