import React, { useState } from "react";

function Queue(props: any) {
  const [inQueue, setInQueue] = useState(false);
  if (inQueue) {
    <div>
      <h1>Waiting for other players...</h1>
      <button
        className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
        onClick={() => leaveQueue()}
      >
        Leave Queue
      </button>
    </div>;
  }
  return (
    <div>
      <button
        className="m-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-all"
        onClick={() => {
          props.joinQueue(props.user);
          props.setInQueue(true);
        }}
      >
        Queue
      </button>
    </div>
  );
}

export default Queue;
