import {createContext, useCallback, useContext, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";

interface PageTransitionContextType {
  isTransitioning: boolean;
  navigateWithTransition: (to: string) => void;
  setTransitionImgSrc: (src: string | null) => void;
  transitionImgSrc: string | null;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isTransitioning: false,
  navigateWithTransition: () => {},
  setTransitionImgSrc: () => {},
  transitionImgSrc: null,
});

const DESKTOP_BP = 960;

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

const PageTransitionProvider = ({children}: PageTransitionProviderProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionImgSrc, setTransitionImgSrc] = useState<string | null>(null);
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
    setTransitionImgSrc,
    transitionImgSrc,
  }), [isTransitioning, navigateWithTransition,setTransitionImgSrc,transitionImgSrc]);

  return (
    <PageTransitionContext.Provider value={contextValue}>
      {children}
    </PageTransitionContext.Provider>
  );
};

const usePageTransition = () => useContext(PageTransitionContext);

export {PageTransitionProvider, usePageTransition};
