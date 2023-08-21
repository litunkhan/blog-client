/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext()


const Authprobider = ({children}) => {
    const [user,setUser] = useState('')
    const userInfo = {
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default Authprobider;