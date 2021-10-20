import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //Handle Name input
    const handleNameChange = e => {
        setName(e?.target?.value)
    }
    //Handle Email input
    const handleEmailChange = e => {
        setEmail(e?.target?.value)
    }
    //Handle Password input
    const handlePasswordChange = e => {
        setPassword(e?.target?.value)
    }
    //Toggle Register/Login 
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    //Set User name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    //Handle Registration 
    const handleRegistration = e => {
        e.preventDefault();
        //Check password strength
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password);

    }
    //Process Login function
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    //Register User
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUserName();
                setError('');

            })
            .catch(error => {
                setError(error.message);
            })
    }
    // Sign in using Google
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

    // Auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        user,
        loading,
        signInUsingGoogle,
        error,
        toggleLogin,
        isLogin,
        logOut
    }
}

export default useFirebase;