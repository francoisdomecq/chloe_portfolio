import React, {useCallback, useMemo, useState} from "react";

interface AppContextProps {
  children: React.ReactNode;
}

interface AppContextInterface {
  isHovering: "text" | "carouselImage" | undefined;
  hoverElement: (element: "text" | "carouselImage") => void;
  unhoverElement: () => void;
  theme: string;
  handleChangeTheme: (theme: string | undefined) => void;
}

const AppContext = React.createContext <(AppContextInterface)>({} as AppContextInterface);

const AppContextProvider = ({children}: AppContextProps) => {
  const [isHovering, setIsHovering] = useState<"text" | "carouselImage" | undefined>(undefined);
  const [theme, setTheme] = useState("dark");

  const hoverElement = useCallback((element: "text" | "carouselImage") => setIsHovering(element), []);
  const unhoverElement = useCallback(() => setIsHovering(undefined), []);
  const handleChangeTheme = useCallback((theme = "dark") => setTheme(theme), [])

  const contextValue = useMemo(() => ({
    isHovering,
    hoverElement,
    unhoverElement,
    theme,
    handleChangeTheme
  }), [isHovering, hoverElement, unhoverElement, theme, handleChangeTheme]);

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