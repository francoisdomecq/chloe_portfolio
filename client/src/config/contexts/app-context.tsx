import React, {useCallback, useMemo, useState} from "react";

interface AppContextProps {
  children: React.ReactNode;
}

interface AppContextInterface {
  isHovering: "text" | "carouselImage" | undefined;
  hoverElement: (element: "text" | "carouselImage") => void;
  unhoverElement: () => void;
}

const AppContext = React.createContext <(AppContextInterface)>({} as AppContextInterface);

const AppContextProvider = ({children}: AppContextProps) => {
  const [isHovering, setIsHovering] = useState<"text" | "carouselImage" | undefined>(undefined);

  const hoverElement = useCallback((element: "text" | "carouselImage") => setIsHovering(element), []);
  const unhoverElement = useCallback(() => setIsHovering(undefined), []);

  const contextValue = useMemo(() => ({
    isHovering,
    hoverElement,
    unhoverElement
  }), [isHovering, hoverElement, unhoverElement]);

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