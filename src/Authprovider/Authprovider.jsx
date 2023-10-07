import { createContext, useState } from "react";

export const AuthContext = createContext(null)
const Authprovider = () => {
    const [user,setUser] = useState(null)
    const authInfo = {user}
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default Authprovider;