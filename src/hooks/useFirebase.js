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


    const handleNameChange = e => {
        setName(e?.target?.value)
    }

    const handleEmailChange = e => {
        setEmail(e?.target?.value)
    }

    const handlePasswordChange = e => {
        setPassword(e?.target?.value)
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const handleRegistration = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password);

    }
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

    // observe whether user auth state changed or not
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