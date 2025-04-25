import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

import {motion} from "framer-motion";

import {NAV_TABS} from "./navbar.config";


import "./navbar.scss";
import {useContext} from "react";
import {AppContext} from "../../../../config/contexts/app-context";

const Navbar = () => {
  const navigate = useNavigate();
  const {theme, handleChangeTheme} = useContext(AppContext)
  const {t} = useTranslation("core");

  const handleClickHeaderTitle = (tagId: string) => {
    navigate(`/${tagId}`);
    handleChangeTheme("dark")
  };
  return (
    <nav className={`navbar navbar__${theme}`}>
      <ul className="navbar__nav-items">
        {NAV_TABS.map(tab =>
          <motion.li whileHover={{scale: 1.05}} key={tab.key} onClick={() => handleClickHeaderTitle(tab.tagId)}>
            <span className="navbar__nav-item">{t(`navbar.tabs.${tab.key}`)}</span>
          </motion.li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;