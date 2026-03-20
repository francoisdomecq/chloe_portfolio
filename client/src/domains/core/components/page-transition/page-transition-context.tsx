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

const DESKTOP_BP = 1024;

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

const PageTransitionProvider = ({children}: PageTransitionProviderProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const navigateWithTransition = useCallback((to: string) => {
    const isDesktop = window.innerWidth >= DESKTOP_BP;
    const hashIndex = to.indexOf('#');
    const path = hashIndex !== -1 ? to.slice(0, hashIndex) || '/' : to;
    const hash = hashIndex !== -1 ? to.slice(hashIndex + 1) : null;

    const scrollToHash = () => {
      if (hash) {
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };

    if (!isDesktop) {
      navigate(path);
      scrollToHash();
      return;
    }

    setIsTransitioning(true);

    // Navigate after the curtain covers the screen
    setTimeout(() => {
      navigate(path);
      scrollToHash();
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
