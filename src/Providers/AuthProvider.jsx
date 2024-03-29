import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    const createUser =(email, password) =>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoding(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
    }

    useEffect( () =>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoding(false);
        });
        return () =>{
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loding,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}

export default AuthProvider;