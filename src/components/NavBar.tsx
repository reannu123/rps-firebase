import React from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  User,
  signInWithCredential,
  signInWithRedirect,
  signInAnonymously,
} from "firebase/auth";
function NavBar(props: any) {
  const auth = getAuth(props.app);
  let user: User = props.user;
  let loadingUser = props.loadingUser;

  return (
    <div className="h-[10vh] bg-gray-500 flex-row flex items-center justify-between px-4">
      <h1>RPS</h1>
      <div className="">
        {props.user ? (
          <div className="flex items-center justify-end">
            <h3 className="m-4">Hello {user.displayName}!</h3>
            <button
              className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
              onClick={() => {
                props.auth.signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        ) : loadingUser ? (
          <>Loading</>
        ) : (
          <div className="flex items-center justify-center">
            <button
              className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
              onClick={() => {
                const provider = new GoogleAuthProvider();
                signInWithRedirect(auth, provider);
              }}
            >
              Google Sign In
            </button>
            <button
              className="m-4 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-all"
              onClick={() => {
                signInAnonymously(auth);
                props.setInputName(true);
              }}
            >
              Sign In Anonymously
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
