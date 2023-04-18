import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";
import GamePage from "./components/GamePage";
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
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar user={user} auth={auth} />
      <div className="h-[90vh] flex flex-col items-center justify-center">
        <section>
          {user ? <GamePage user={user} app={app} /> : <>Login to Play</>}
        </section>
      </div>
    </div>
  );
}

export default App;
