
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
    setUser:(val:any)=>void;
    user:any;
    image:any;
    name:any;

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
      localStorage.setItem("@AuthFirebase:image",String(user.photoURL));
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


  const [user, setUser] = useState<any>();
  const [image, setImage] = useState<any>();
  const [name, setName] = useState<any>();

  useEffect(() => {
    const loadStorageData = () => {
        const storageEmail = localStorage.getItem("@AuthFirebase:email");
        const storageToken = localStorage.getItem("@AuthFirebase:token");
        const storageName = localStorage.getItem("@AuthFirebase:name");
        const storageImage = localStorage.getItem("@AuthFirebase:image");

        if (storageToken && storageEmail) {
            setUser(storageEmail);
            setImage(storageImage);
            setName(storageName)
            console.log(user)
        }
    };
    loadStorageData();
});


  //===============================================================
  return (
    <AuthGoogleContext.Provider
      value={{
          createAccountEmainPass,
          loginWithEmailPass,
          setUser,
          user,
          image,
          name
      }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};
