import { useContext } from "react";
import { AuthGoogleContext } from "../contextApi/Context";

export function useAuth() {
	const value = useContext(AuthGoogleContext)
	
	return value
}