import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Header, Footer, PortfolioPage} from "@core/index";
import { usePageSeo } from "@utils/usePageSeo";
import { fadeInUp, staggerContainer } from "@utils/animations";
import articles from "@domains/home/pages/home-page/articles.json";
import "./about.scss";

const SKILL_KEYS = [
  "direction",
  "typography",
  "identity",
  "webdesign",
  "social",
  "branding",
  "illustration",
] as const;

export const About = () => {
  const { t } = useTranslation("about");
  const prefersReducedMotion = useReducedMotion();

  usePageSeo(
    "About — Chloé Gaillard",
    "Chloé Gaillard, designer graphique basée à Paris. Direction artistique, identité visuelle sur-mesure, typographie et illustration."
  );

  const containerProps = prefersReducedMotion
    ? {}
    : { variants: staggerContainer, initial: "hidden" as const, animate: "visible" as const };

  const itemProps = prefersReducedMotion ? {} : { variants: fadeInUp };

  return (
    <PortfolioPage>
      <div className="about-main">
        <div className="about-left">
          <motion.div className="about-intro" {...containerProps}>
            <motion.p className="about-intro__bio" {...itemProps}>
              {t("about.bio")}
            </motion.p>
            <motion.a
              className="about-intro__email"
              href={`mailto:${t("about.email")}`}
              {...itemProps}
            >
              {t("about.email")}
            </motion.a>
          </motion.div>

          <div className="about-sections">
          <section className="about-section">
            <p className="about-section__label">{t("about.skillsLabel")}</p>
            <ul className="about-section__skills">
              {SKILL_KEYS.map((key) => (
                <li key={key} className="about-section__skill">
                  {t(`about.${key}`)}
                </li>
              ))}
            </ul>
          </section>

          <section className="about-section">
            <p className="about-section__label">{t("about.clientsLabel")}</p>
            <p className="about-section__body">{t("about.clients")}</p>
          </section>

          <section className="about-section">
            <p className="about-section__label">{t("about.pressLabel")}</p>
            <div className="about-section__press">
              {articles.map((article) => (
                <a
                  key={article.link}
                  className="about-section__press-link"
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.website}
                </a>
              ))}
            </div>
          </section>
          </div>
        </div>

        <div className="about-photo">
          <img
            className="about-photo__img"
            src="/chlochlo.jpg"
            alt="Chloé Gaillard dans son studio"
            width="1686"
            height="2248"
            loading="eager"
          />
        </div>
      </div>
    </PortfolioPage>
  );
};
