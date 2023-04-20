import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";
import GamePage from "./components/GamePage";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhWYptjj88s1qre32DwsUhBARM0D5ZkN8",
  authDomain: "fir-test-e003d.firebaseapp.com",
  databaseURL:
    "https://fir-test-e003d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-test-e003d",
  storageBucket: "fir-test-e003d.appspot.com",
  messagingSenderId: "1002363761303",
  appId: "1:1002363761303:web:4e9e04e3cbd48b10e02fd2",
  measurementId: "G-WDEJ45ZHK8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {
  const [user, loadingUser, errorUser] = useAuthState(auth);
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState(false);
  const [updateProfile, updatingProfile, errorProfile] = useUpdateProfile(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in.");
      } else {
        console.log("No user is signed in.");
      }
    });
  }, [user]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      // 👇 Get input value
      if (name === "") {
        return;
      }
      updateProfile({ displayName: name });
      setInputName(false);
    }
  };

  return (
    <div className="App">
      <NavBar
        user={user}
        auth={auth}
        loadingUser={loadingUser}
        setInputName={setInputName}
      />
      <div className="h-[90vh] flex flex-col items-center justify-center">
        <section>
          {user && !inputName ? (
            <GamePage user={user} app={app} />
          ) : loadingUser && !inputName ? (
            <>Loading Account...</>
          ) : inputName ? (
            <>
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
                  updateProfile({ displayName: name });
                  setInputName(false);
                }}
              >
                Submit
              </button>
            </>
          ) : (
            <>Login to Play!</>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
