import { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";


const AuthHook = () => {
   const all = useContext(AuthContext)
   return all;
};

export default AuthHook;