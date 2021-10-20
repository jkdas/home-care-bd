import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// initialize firebase
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;