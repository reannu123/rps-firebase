import React, { useState } from "react";
import MenuScreen from "./Menus/MenuScreen";
import Play from "./Menus/Play";
import FriendsScreen from "./Menus/FriendsScreen";
import OptionsScreen from "./Menus/OptionsScreen";

function Home(props: any) {
  const [screen, setScreen] = useState(0);

  return (
    <div className="h-full">
      {screen === 0 ? (
        <MenuScreen setScreen={setScreen} />
      ) : screen === 1 ? (
        <Play user={props.user} setScreen={setScreen} app={props.app} />
      ) : screen === 2 ? (
        <FriendsScreen setScreen={setScreen} />
      ) : screen === 3 ? (
        <OptionsScreen setScreen={setScreen} />
      ) : null}
    </div>
  );
}

export default Home;
