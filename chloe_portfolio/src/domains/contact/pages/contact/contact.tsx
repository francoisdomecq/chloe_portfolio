import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { PortfolioPage } from "../../../core";
import HoveredTitle from "../../../core/components/hovered-title/hovered-title";
import NavigationHistory from "../../../core/components/navigation-history/navigation-history";

import "./contact.scss";

const Contact = () => {
    const { t } = useTranslation("contact");
    const routerHistory = [{ route:"/",label:"Home" }, { route: "/contact", label: "Contact" }];
    return (
        <PortfolioPage className="contact">
            <div className="contact__content">
                <NavigationHistory history={routerHistory} className="contact__navigation-history"/>
                <HoveredTitle className="contact__title" title={t("title")}/>
                <i className="contact__contact">{t("contact")}</i>
                <p className="contact__collaboration-message">{t("collaboration-message")}</p>
                <div className="contact__contact-section">
                    <span className="contact__label">{t("mail")}</span>
                    <motion.a whileHover={{ scale:1.1 }} className="contact__link" rel="noreferrer" target="_blank"
                        href="mailto:chloegaillard3312@gmail.com">
                        {t("mail-adress")}
                    </motion.a>
                </div>
                <div className="contact__contact-section">
                    <span className="contact__label">{t("social-media")}</span>
                    <div className="contact__links">
                        <motion.a whileHover={{ scale:1.1 }} target="_blank" rel="noreferrer"
                            className="contact__link" href="https://www.instagram.com/gaillardesign"
                        >
                            {t("instagram")},
                        </motion.a>
                        <motion.a whileHover={{ scale:1.1 }} target="_blank" rel="noreferrer"
                            className="contact__link" href="https://www.linkedin.com/in/chlo%C3%A9-gaillard-964313210/"
                        >
                            {t("linkedin")},
                        </motion.a>
                        <motion.a whileHover={{ scale:1.1 }} target="_blank" rel="noreferrer"
                            className="contact__link" href="https://behance.net/chloegaillard1 "
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

