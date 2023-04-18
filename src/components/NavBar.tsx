import React from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  User,
  signInWithCredential,
  signInWithRedirect,
} from "firebase/auth";

function NavBar(props: any) {
  const auth = getAuth(props.app);
  let user: User = props.user;

  return (
    <div className="h-[10vh] bg-gray-500 flex-row flex items-center justify-between px-4">
      <h1>RPS</h1>
      <div className="">
        {props.user ? (
          <div className="flex items-center justify-end">
            <h3 className="m-4">Hello {user.email}!</h3>
            <button
              className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
              onClick={() => {
                props.auth.signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button
              className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
              onClick={() => {
                const provider = new GoogleAuthProvider();
                signInWithRedirect(auth, provider);
              }}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
