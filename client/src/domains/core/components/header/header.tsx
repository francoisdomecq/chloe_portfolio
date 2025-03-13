import {useContext, useEffect} from "react";
import {useTranslation} from "react-i18next";
import {useLocation, useNavigate} from "react-router-dom";

import {motion} from "framer-motion";

import Navbar from "../navbar/navbar";


import "./header.scss";
import {AppContext} from "../../../../config/contexts/app-context";

interface HeaderProps {
  className?: string
}

const Header = ({className}: HeaderProps) => {
  const navigate = useNavigate();
  const {t} = useTranslation("core");
  const location = useLocation()
  const {theme} = useContext(AppContext)

  const handleClickHeaderTitle = () => {
    navigate("/");
    window.scroll(0, 0);
  };

  useEffect(() => {
    if (location.pathname.includes('works')) {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (window.innerWidth > 900) {
          const navbar = document.getElementById("header");
          if (navbar) {
            if (prevScrollpos > currentScrollPos) {
              if (currentScrollPos < 100) {
                navbar.classList.remove("background-color");
                navbar.classList.add("background-transparent");
              } else {
                navbar.classList.add("background-color");
              }
              navbar.style.top = "0";
            } else if (currentScrollPos <= 100) {
              navbar.classList.add("background-color");
            } else {
              navbar.style.top = "-10%";
            }
            prevScrollpos = currentScrollPos;
          }
        }
      };
    } else {
      window.onscroll = () => {
      }
    }

  }, [location]);

  return (
    <motion.header className={`header ${className} header__${theme}`} id="header">
      <div onClick={handleClickHeaderTitle}>
        <h1 className="header__title">{t("header.name")}</h1>
      </div>
      <Navbar/>
    </motion.header>
  );
};

export default Header;