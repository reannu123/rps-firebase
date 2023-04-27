import React, { useState } from "react";

function SetName(props: any) {
  const [name, setName] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      if (name === "") {
        return;
      }
      props.updateProfile({ displayName: name });
      props.setInputName(false);
    }
  };
  return (
    <div>
      <div>Set a Name</div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-white text-black"
      />
      <button
        className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
        onClick={() => {
          props.updateProfile({ displayName: name });
          props.setInputName(false);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default SetName;
