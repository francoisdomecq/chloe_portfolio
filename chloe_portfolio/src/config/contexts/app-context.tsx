import React, { useCallback, useMemo, useState } from "react";

interface AppContextProps {
  children: React.ReactNode;
}

interface AppContextInterface{
  isTextHovered:boolean;
  hoverText:()=>void;
  unhoverText:()=>void;
}

const AppContext = React.createContext <(AppContextInterface)>({} as AppContextInterface);

const AppContextProvider=({ children }:AppContextProps)=>{
    const [isTextHovered, setIsTextHovered] = useState(false);

    const hoverText = useCallback(()=> setIsTextHovered(true),[]);
    const unhoverText = useCallback(()=> setIsTextHovered(false),[]);

    const contextValue = useMemo(()=>({
        isTextHovered,
        hoverText,
        unhoverText
    }),[isTextHovered, hoverText, unhoverText]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export {
    AppContext,
    AppContextProvider
};