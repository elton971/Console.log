
import { useState, createContext, useEffect, ReactNode } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../service/FireBase";


const provider = new GoogleAuthProvider();

interface AuthProviderProps{
    children:ReactNode;
}

interface AuthContextData {
    user:any;
}

export const AuthGoogleContext = createContext({} as AuthContextData);

export const AuthGoogleProvider = ({ children }:AuthProviderProps) => {
    const [user, setUser] = useState<any>();
    
    const auth = getAuth(app);
  useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, photoURL, uid } = user
                
                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })
        
        return () => {
            unsubscribe()
        }
    }, [])

  //===============================================================
  return (
    <AuthGoogleContext.Provider value={{user}}>
      {children}
    </AuthGoogleContext.Provider>
  );
};
