import {useTranslation} from "react-i18next";

import {motion} from "framer-motion";

import {PortfolioPage} from "../../../core";
import HoveredTitle from "../../../core/components/hovered-title/hovered-title";
import NavigationHistory from "../../../core/components/navigation-history/navigation-history";

import "./contact.scss";
import {useContext} from "react";
import {AppContext} from "../../../../config/contexts/app-context";

const Contact = () => {
  const {t} = useTranslation("contact");
  const {theme} = useContext(AppContext);
  const routerHistory = [{route: "/", label: "Home"}, {route: "/contact", label: "Contact"}];

  return (
    <PortfolioPage className="contact">
      <div className={`contact-content contact-content__${theme}`}>
        <NavigationHistory history={routerHistory} className="contact-navigation-history"/>
        <HoveredTitle className="contact-title" title={t("title")}/>
        <i className="contact-contact">{t("contact")}</i>
        <p className="contact-collaboration-message">{t("collaboration-message")}</p>
        <div className="contact-contact-section">
          <span className="contact-label">{t("mail")}</span>
          <motion.a whileHover={{scale: 1.1}} className="contact-link" rel="noreferrer" target="_blank"
                    href="mailto:chloegaillard3312@gmail.com">
            {t("mail-adress")}
          </motion.a>
        </div>
        <div className="contact-contact-section">
          <span className="contact-label">{t("social-media")}</span>
          <div className="contact-links">
            <motion.a whileHover={{scale: 1.1}} target="_blank" rel="noreferrer"
                      className="contact-link" href="https://www.instagram.com/gaillardesign"
            >
              {t("instagram")},
            </motion.a>
            <motion.a whileHover={{scale: 1.1}} target="_blank" rel="noreferrer"
                      className="contact-link" href="https://www.linkedin.com/in/chlo%C3%A9-gaillard-964313210/"
            >
              {t("linkedin")},
            </motion.a>
            <motion.a whileHover={{scale: 1.1}} target="_blank" rel="noreferrer"
                      className="contact-link" href="https://behance.net/chloegaillard1 "
            >
              {t("behance")}
            </motion.a>
          </div>
        </div>
      </div>

    </PortfolioPage>
  );
};

export default Contact;

