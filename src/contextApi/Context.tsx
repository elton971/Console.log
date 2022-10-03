
import { useState, createContext, useEffect, ReactNode } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../components/FireBase";

const provider = new GoogleAuthProvider();


interface AuthProviderProps{
    children:ReactNode;
}

interface AuthContextData {
    signed:boolean;
    users:any;
    signInGoogle:()=>void;
    signOut:()=>void;
    createAccountEmainPass:(email:string,password:string)=>void;
    loginWithEmailPass:(email:string,password:string)=>void;
}

export const AuthGoogleContext = createContext({} as AuthContextData);

export const AuthGoogleProvider = ({ children }:AuthProviderProps) => {
    

  const auth = getAuth(app);
  const [users, setUser] = useState<any>();

  useEffect(() => {
    const loadStorageData = () => {
      const storageUser = sessionStorage.getItem("@AuthFirebase:user");
      const storageToken = sessionStorage.getItem("@AuthFirebase:token");
      if (storageToken && storageUser) {
        setUser(storageUser);
      }
    };
    loadStorageData();
  });

  //auth usando google account=================
  async function signInGoogle() {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)!;
        const token = credential.accessToken 
        const user = result.user;

        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  function signOut() {
    sessionStorage.clear();
    setUser(null);
  }
  //==========================================

  //auth usando email e passs=======================================
  async function createAccountEmainPass(email: string,password: string) {
   await  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

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
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }


  //===============================================================
  return (
    <AuthGoogleContext.Provider
      value={{
        signed: !!users,
        users,
        signInGoogle,
        signOut,
        createAccountEmainPass,
        loginWithEmailPass
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};
