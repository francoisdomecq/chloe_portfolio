import "./footer.scss";
import {NAV_TABS} from "@components/navbar/navbar.config";
import {useTranslation} from "react-i18next";

export const Footer = () => {
  const {t} = useTranslation("core");

  return (
    <footer className="footer" >
      <div className="footer__content">
        <div className="footer__columns">
          <div className="footer__contact">
            <h2 className="footer__title">
              {t("footer.contactLabel")}
            </h2>
            <a
              href="mailto:chloegaillard3312@gmail.com"
              className="footer__cta-button"
            >
              {t("footer.contactButton")}
            </a>
          </div>

          <div className="footer__links">
            <div className="footer__sitemap">
              <h3 className="footer__column-title">
                {t("footer.siteMap")}
              </h3>
              <nav className="footer__sitemap-nav">
                <a  href="/" className="footer__link">
                  {t("footer.home")}
                </a>
                {NAV_TABS.map(navTab=>
                  <a  key={navTab.key} href={navTab.key} className="footer__link">{t(`navbar.tabs.${navTab.key}`)}</a>)
                }
              </nav>
            </div>

            <div className="footer__social">
              <h3 className="footer__column-title"> {t("footer.followMe")}</h3>
              <nav className="footer__social-nav">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  {t("footer.instagram")}
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  {t("footer.linkedin")}

                </a>
              </nav>
            </div>
          </div>

        </div>
      </div>

      <div className="footer__divider" />
      <div className="footer__bottom-bar">
        <span className="footer__bottom-left">
                  {t("footer.location")}
        </span>
        <span className="footer__bottom-right">{t("footer.languages")}
          , ©{new Date().getFullYear()}</span>
      </div>
      <div className="footer__big-name">
        <span>Chloé Gaillard</span>
      </div>


    </footer>
  );
}

