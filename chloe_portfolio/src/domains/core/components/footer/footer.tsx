import { useTranslation } from "react-i18next";

import "./footer.scss";

const Footer = ()=>{
    const { t } = useTranslation("core");
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <span>
                <p className="footer__year">{currentYear}®</p>
            </span>
            <div className="network-links">
                <a className="network-links__link">{t("footer.instagram")}</a>
                <a className="network-links__link">{t("footer.behance")}</a>
                <a className="network-links__link">{t("footer.linkedin")}</a>
            </div>
        </footer>
    );
};

export default Footer;