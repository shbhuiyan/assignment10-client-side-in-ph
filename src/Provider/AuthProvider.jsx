import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext()


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null)
    // const [loading , setLoading] = useState(true)
    
    const googleProvider = new GoogleAuthProvider();

    // create user....
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    // oldUser .....
    const oldUser = (email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    // login/signup with google provider
    const google = () => {
        return signInWithPopup(auth , googleProvider)
    }

    // Sign Out...
    const logOut = () => {
        return signOut(auth)
    }


    // Get the currently signed-in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
            setUser(currentUser);
            // setLoading(false);
        })
        return () => unsubscribe()
    },[])


    const authInfo = {
        user,
        setUser,
        createUser,
        oldUser,
        google,
        logOut,
        // loading,
        // setLoading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;