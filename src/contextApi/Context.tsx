import { useState, createContext, useEffect, ReactNode } from "react";
import { getAuth} from "firebase/auth";
import { app } from "../service/FireBase";
interface AuthProviderProps{
	children:ReactNode;
}
interface AuthContextData {
	user:any;
	setUser: (p: any)=>void;
}
export const AuthGoogleContext = createContext({} as AuthContextData);
export const AuthGoogleProvider = ({ children }:AuthProviderProps) => {
	const [user, setUser] = useState<any>();
	const auth = getAuth(app);
	
	//===============================================================
	return (
		<AuthGoogleContext.Provider value={{user,setUser}}>
			{children}
		</AuthGoogleContext.Provider>
	);
};
