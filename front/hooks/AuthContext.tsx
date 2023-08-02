import React, {  createContext, useContext, useState } from "react";


export const AuthContext = createContext<any>(null);
export const AuthSetContext = createContext<any>(null);


export const AuthProvider = ({ children }:any)  => { 
    const[stateContent, setContent] = useState("");

    return (

        <AuthContext.Provider value={stateContent}>
            <AuthSetContext.Provider value={setContent}>
                {children}
            </AuthSetContext.Provider>
        </AuthContext.Provider>


    )



}

export const useAuthState = () => useContext(AuthContext);

export const useAuthSet = () => useContext(AuthSetContext);


