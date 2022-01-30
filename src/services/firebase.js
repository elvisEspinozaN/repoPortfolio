import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7IIZPdAc_VP0RCZR6IjV7wXhd-6dxlpQ",
  authDomain: "react-firebase-projects-e3d0e.firebaseapp.com",
  projectId: "react-firebase-projects-e3d0e",
  storageBucket: "react-firebase-projects-e3d0e.appspot.com",
  messagingSenderId: "119212875449",
  appId: "1:119212875449:web:e3fe15de50e3fa52f94568",
};

// intialize firebase //
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// google provider //
const provider = new firebase.auth.GoogleAuthProvider();

// custom params //
provider.setCustomParameters({
  prompt: "select_account",
});

// login function //
function login() {
  return auth.signInWithPopup(provider);
}

// logout function //
function logout() {
  return auth.signOut();
}

// export //
export { auth, login, logout };
