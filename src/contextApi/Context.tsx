
import { useState, createContext, useEffect, ReactNode } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../components/FireBase";


const provider = new GoogleAuthProvider();


interface AuthProviderProps{
    children:ReactNode;
}

interface AuthContextData {
    createAccountEmainPass:(email:string,password:string)=>any;
    loginWithEmailPass:(email:string,password:string)=>any;
}

export const AuthGoogleContext = createContext({} as AuthContextData);

export const AuthGoogleProvider = ({ children }:AuthProviderProps) => {

  const auth = getAuth(app);

  //==========================================

  //auth usando email e passs=======================================
  async function createAccountEmainPass(email: string,password: string) {
   await  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
     return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    
  }


   async function loginWithEmailPass(email: string,password: string)
  {
      let val;
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      localStorage.setItem("@AuthFirebase:name",String(user.displayName));
      localStorage.setItem("@AuthFirebase:image",user.photoURL);
      localStorage.setItem("@AuthFirebase:email",String(user.email));
      localStorage.setItem("@AuthFirebase:token",String(user.refreshToken));

      if(user)
      {
         val= "get";
      }

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    });
    return val;
  }


  //===============================================================
  return (
    <AuthGoogleContext.Provider
      value={{
        createAccountEmainPass,
        loginWithEmailPass
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};
