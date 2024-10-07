import React, { useCallback, useMemo, useState } from "react";

interface AppContextProps {
  children: React.ReactNode;
}

interface AppContextInterface{
  isHovering:boolean;
  hoverElement:()=>void;
  unhoverElement:()=>void;
}

const AppContext = React.createContext <(AppContextInterface)>({} as AppContextInterface);

const AppContextProvider=({ children }:AppContextProps)=>{
    const [isHovering, setIsHovering] = useState<"text"|"image"|undefined>(undefined);

    const hoverElement= useCallback((element:"text"|"image")=> setIsHovering(element ),[]);
    const unhoverElement = useCallback(()=> setIsHovering(undefined),[]);

    const contextValue = useMemo(()=>({
        isHovering,
        hoverElement,
        unhoverElement
    }),[isHovering, hoverElement, unhoverElement]);

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