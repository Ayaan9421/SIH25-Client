import React,{ useContext, useEffect, useState } from 'react'
import { auth } from "../firebase/firebase.js";
//import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
};

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn,setUserLoggedIn]=useState(false)
    const [loading, setLoading] = useState(true);

    // function signup(email, password) {
    //     return createUserWithEmailAndPassword(auth, email, password);
    // }

    // function signupWithGoogle() {
    //     return signInWithPopup(auth, googleProvider);
    // }

    // function login(email, password) {
    //     return signInWithEmailAndPassword(auth, email, password);
    // }

    // function logout() {
    //     return auth.signOut();
    // }

    // function forgotPassword(email) {
    //     return sendPasswordResetEmail(auth, email);
    // }

    // function changePassword(password) {
    //     return updatePassword(auth.currentUser, password);
    // }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user){
        if(user){
            setCurrentUser({...user});
            setUserLoggedIn(true);
        }
        else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }


    const value = {
        currentUser,
        userLoggedIn,
        loading
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
