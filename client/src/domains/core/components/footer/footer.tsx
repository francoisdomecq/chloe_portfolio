import {forwardRef} from "react";

import "./footer.scss";

const Footer = forwardRef<HTMLElement>((_, ref) => {

  return (
    <footer className="footer" ref={ref}>
      <div className="footer__content">
        <div className="footer__columns">
          <div className="footer__contact">
            <h2 className="footer__title">
              Pour papoter, se rencontrer et échanger
            </h2>
            <a
              href="mailto:chloegaillard3312@gmail.com"
              className="footer__cta-button"
            >
              Contact
            </a>
          </div>

          <div className="footer__links">
            <div className="footer__sitemap">
              <h3 className="footer__column-title">Plan du site</h3>
              <nav className="footer__sitemap-nav">
                <a href="/" className="footer__link">Accueil</a>
                <a href="#works" className="footer__link">Works</a>
                <a href="#about" className="footer__link">About</a>
                <a href="#news" className="footer__link">News</a>
              </nav>
            </div>

            <div className="footer__social">
              <h3 className="footer__column-title">Pour me suivre</h3>
              <nav className="footer__social-nav">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  LinkedIn
                </a>
              </nav>
            </div>
          </div>

        </div>
      </div>

      <div className="footer__divider" />
      <div className="footer__bottom-bar">
        <span className="footer__bottom-left">Paris, France</span>
        <span className="footer__bottom-right">EN / FR, ©{new Date().getFullYear()}</span>
      </div>
      <div className="footer__big-name">
        <span>Chloé Gaillard</span>
      </div>


    </footer>
  );
});

export default Footer;