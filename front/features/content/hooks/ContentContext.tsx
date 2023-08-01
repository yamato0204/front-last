
import React, { ContextType, createContext, useContext, useState } from "react";


export const ContentContext = createContext<any>(null);
export const ContentUpdateContext = createContext<any>(null);


export const ContentProvider = ({ children }:any)  => { 
    const[stateContent, setContent] = useState("");

    return (

        <ContentContext.Provider value={stateContent}>
            <ContentUpdateContext.Provider value={setContent}>
                {children}
            </ContentUpdateContext.Provider>
        </ContentContext.Provider>


    )



}

export const useContent = () => useContext(ContentContext);

export const useUpdateContent = () => useContext(ContentUpdateContext);



