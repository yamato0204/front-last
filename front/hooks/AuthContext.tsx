import React, {  createContext, useContext, useState } from "react";

export const AuthContext = createContext<any>(null);
export const AuthSetContext = createContext<any>(null);

export const AuthProvider = ({ children }:any)  => { 
    const[stateAuth, setAuth ] = useState("");

    return (

        <AuthContext.Provider value={stateAuth}>
            <AuthSetContext.Provider value ={setAuth}>
                {children}
            </AuthSetContext.Provider>
        </AuthContext.Provider>
    )

}

export const useAuthState = () => useContext(AuthContext);

export const useAuthSet = (): React.Dispatch<React.SetStateAction<string>> => useContext(AuthSetContext);


