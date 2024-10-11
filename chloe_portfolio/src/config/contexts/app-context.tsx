import React, { useCallback, useMemo, useState } from "react";

interface AppContextProps {
  children: React.ReactNode;
}

interface AppContextInterface{
  isHovering:boolean;
  hoverElement:()=>void;
  unhoverElement:()=>void;
  mousePosition: { x: number; y: number };
  updateMousePosition: (e: MouseEvent) => void;
}

const AppContext = React.createContext <(AppContextInterface)>({} as AppContextInterface);

const AppContextProvider=({ children }:AppContextProps)=>{
    const [isHovering, setIsHovering] = useState<"text"|"image"|undefined>(undefined);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const hoverElement= useCallback((element:"text"|"image")=> setIsHovering(element ),[]);
    const unhoverElement = useCallback(()=> setIsHovering(undefined),[]);

    const updateMousePosition = useCallback((e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    },[]);

    const contextValue = useMemo(()=>({
        isHovering,
        hoverElement,
        unhoverElement,
        mousePosition,
        updateMousePosition
    }),[isHovering, hoverElement, unhoverElement,mousePosition,updateMousePosition]);

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