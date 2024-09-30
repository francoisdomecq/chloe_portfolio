import { useTranslation } from "react-i18next";

import { PortfolioPage } from "../../../core";

import "./contact.scss";

const Contact = () => {
    const { t } = useTranslation("contact");
    return (
        <PortfolioPage className="contact">
            <div className="contact__content">
                <p className="contact__title">{t("title")}</p>
                <h2 className="contact__contact">{t("contact")}</h2>
                <p className="contact__collaboration-message">{t("collaboration-message")}</p>
                <div className="contact__links">
                    <a className="contact__link">{t("instagram")}</a>
                    <a className="contact__link">{t("linkedin")}</a>
                    <a className="contact__link">{t("mail")}</a>
                </div>
            </div>

        </PortfolioPage>
    );
};

export default Contact;

