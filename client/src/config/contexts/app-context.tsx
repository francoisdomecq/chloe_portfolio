import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Admin} from "../../domains/admin/types";
import axiosClient from "../axios";

interface AppContextProps {
  children: React.ReactNode;
}

interface AppContextInterface {
  isHovering: "text" | "carouselImage" | undefined;
  hoverElement: (element: "text" | "carouselImage") => void;
  unhoverElement: () => void;
  user: Admin | undefined;
  setUser: (user: Admin) => void;
}

const AppContext = React.createContext <(AppContextInterface)>({} as AppContextInterface);

const AppContextProvider = ({children}: AppContextProps) => {
  const [isHovering, setIsHovering] = useState<"text" | "carouselImage" | undefined>(undefined);
  const [user, setUser] = useState<Admin | undefined>(undefined);
  const hoverElement = useCallback((element: "text" | "carouselImage") => setIsHovering(element), []);
  const unhoverElement = useCallback(() => setIsHovering(undefined), []);

  const contextValue = useMemo(() => ({
    isHovering,
    hoverElement,
    unhoverElement,
    user,
    setUser
  }), [isHovering, hoverElement, unhoverElement, user, setUser]);


  const refreshUserInfo = useCallback(() => {
    axiosClient.get('/auth')
      .then(res => res.data)
      .then(res => setUser(res))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => refreshUserInfo, [refreshUserInfo])

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