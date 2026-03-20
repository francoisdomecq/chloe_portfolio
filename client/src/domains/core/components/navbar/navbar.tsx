import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

import {motion, useReducedMotion} from "framer-motion";

import {NAV_TABS} from "./navbar.config";

import "./navbar.scss";
import {useContext} from "react";
import {AppContext} from "@config/contexts/app-context";

export const Navbar = () => {
  const {theme, handleChangeTheme} = useContext(AppContext)
  const {t} = useTranslation("core");
  const prefersReducedMotion = useReducedMotion();

  return (
    <nav className={`navbar navbar__${theme}`}>
      <ul className="navbar__nav-items">
        {NAV_TABS.map(tab =>
          <motion.li whileHover={prefersReducedMotion ? {} : {scale: 1.05}} key={tab.key}>
            <Link
              to={`/${tab.tagId}`}
              className="navbar__nav-item"
              onClick={() => handleChangeTheme("dark")}
            >
              {t(`navbar.tabs.${tab.key}`)}
            </Link>
          </motion.li>
        )}
      </ul>
    </nav>
  );
};

