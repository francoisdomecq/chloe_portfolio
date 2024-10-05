import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import { PortfolioPage } from "../../../core";

import "./contact.scss";

import HoveredTitle from "../../../core/components/hovered-title/hovered-title.tsx";

const Contact = () => {
    const { t } = useTranslation("contact");
    return (
        <PortfolioPage className="contact">
            <div className="contact__content">
                <HoveredTitle className="contact__title" title={t("title")}/>
                <h2 className="contact__contact">{t("contact")}</h2>
                <p className="contact__collaboration-message">{t("collaboration-message")}</p>
                <div className="contact__links">
                    <motion.a whileHover={{ scale:1.1 }} className="contact__link" href="https://www.instagram.com/gaillardesign" target="_blank" rel="noreferrer">{t("instagram")}</motion.a>
                    <motion.a whileHover={{ scale:1.1 }} className="contact__link" href="behance.net/chloegaillard1 " target="_blank">{t("behance")}</motion.a>
                    <motion.a whileHover={{ scale:1.1 }} className="contact__link" href="mailto:chloegaillard3312@gmail.com" target="_blank" rel="noreferrer" >{t("mail")}</motion.a>

                </div>
            </div>

        </PortfolioPage>
    );
};

export default Contact;

