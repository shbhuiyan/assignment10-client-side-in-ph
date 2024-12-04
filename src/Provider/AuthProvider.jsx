import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext()


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null)

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



    const authInfo = {
        user,
        setUser,
        createUser,
        oldUser,
        google,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;