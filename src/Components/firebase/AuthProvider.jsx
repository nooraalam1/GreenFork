import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import { GoogleAuthProvider,createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider ()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
        return unsubscribe()
    }
},[])


//Create User
    function userCreate(email,password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

//Signup with google    

function googleSignup(){
    return signInWithPopup(auth,provider)
}

//Sign in with email password

function emailPassSignin(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}
//Signin with google
function googleSignin(){
    return signInWithPopup(auth,provider)
}
//Logout

function logOut(){
    return signOut(auth)
}
    const info ={
        user,
        loading,
        userCreate,
        googleSignup,
        googleSignin,
        emailPassSignin,
        logOut
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;