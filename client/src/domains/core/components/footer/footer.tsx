import {useTranslation} from "react-i18next";

import {motion} from "framer-motion";

import "./footer.scss";

const Footer = () => {
  const {t} = useTranslation("core");
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
            <span>
                <p className="footer__year">{currentYear}®</p>
            </span>
      <div className="network-links">
        <motion.a
          className="network-links__link"
          href="https://www.instagram.com/gaillardesign"
          target="_blank"
          rel="noreferrer"
          whileHover={{scale: 1.1}}
        >
          {t("footer.instagram")}
        </motion.a>
        <motion.a className="network-links__link" href="behance.net/chloegaillard1 " target="_blank"
                  whileHover={{scale: 1.1}}>{t("footer.behance")}</motion.a>
        <motion.a className="network-links__link" href="https://www.linkedin.com/in/chlo%C3%A9-gaillard-964313210"
                  target="_blank" rel="noreferrer" whileHover={{scale: 1.1}}>{t("footer.linkedin")}</motion.a>
      </div>
    </footer>
  );
};

export default Footer;