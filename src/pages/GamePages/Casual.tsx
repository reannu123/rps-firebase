import React from "react";

function Casual(props: any) {
  return (
    <div>
      <button
        className="m-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-all"
        onClick={() => {
          props.joinQueue();
        }}
      >
        Queue
      </button>
    </div>
  );
}

export default Casual;
