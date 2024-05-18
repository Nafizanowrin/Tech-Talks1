import React, { createContext, useState } from "react";
import { useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
    // const authState = {
    //     isAuthenticated: false,
    //     user: null
    // };


    const [token, setToken] = useState(localStorage.getItem("token"))
    

    const storetokenInLS = (serverToken) => {
      return  localStorage.setItem('token', serverToken);
    }


    const isLoggedin = !!token;
    console.log("isloggedin", isLoggedin);

    const LogoutUser = () => {
        
        setToken("")
        return localStorage.removeItem("token")
    }



    return (
        <AuthContext.Provider value={{storetokenInLS, LogoutUser,  isLoggedin}} >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);

    if(!authContextValue){
        throw new Error("Error in authcontext")
    }
    return authContextValue;
    
}
