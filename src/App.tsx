import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import SetName from "./components/SetName";
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
  const [inputName, setInputName] = useState(false);
  const [updateProfile, updatingProfile, errorProfile] = useUpdateProfile(auth);
  const [isAnon, setIsAnon] = useState(false);

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
            <Home user={user} app={app} />
          ) : loadingUser && !inputName ? (
            <>Loading Account...</>
          ) : inputName ? (
            <SetName
              updateProfile={updateProfile}
              setInputName={setInputName}
            />
          ) : (
            <div>Login to Play!</div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
