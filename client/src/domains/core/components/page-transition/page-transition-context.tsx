import {createContext, useCallback, useContext, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";

interface ProjectTransition{
  title:string;
  backgroundColor:string;
  color:string;
}

interface PageTransitionContextType {
  isTransitioning: boolean;
  navigateWithTransition: (to: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isTransitioning: false,
  navigateWithTransition: () => {},
});

const DESKTOP_BP = 960;

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

const PageTransitionProvider = ({children}: PageTransitionProviderProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const navigateWithTransition = useCallback((to: string) => {
    const isDesktop = window.innerWidth >= DESKTOP_BP;

    if (!isDesktop) {
      navigate(to);
      return;
    }

    setIsTransitioning(true);

    // Navigate after the curtain covers the screen
    setTimeout(() => {
      navigate(to);
      window.scrollTo(0, 0);
    }, 600);

    // Remove the curtain after navigation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  }, [navigate]);

  const contextValue = useMemo(() => ({
    isTransitioning,
    navigateWithTransition,
  }), [isTransitioning, navigateWithTransition]);

  return (
    <PageTransitionContext.Provider value={contextValue}>
      {children}
    </PageTransitionContext.Provider>
  );
};

const usePageTransition = () => useContext(PageTransitionContext);

export {PageTransitionProvider, usePageTransition};
