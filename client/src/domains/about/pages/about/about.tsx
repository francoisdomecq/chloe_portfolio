import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { PortfolioPage } from "@core/index";
import { usePageSeo } from "@utils/usePageSeo";
import { fadeInUp, staggerContainer, slideInLeft, skillsStagger } from "@utils/animations";
import { useIsDesktop } from "@utils/useIsDesktop";
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

const VIEWPORT = { once: true, margin: "-30px" };

export const About = () => {
  const { t } = useTranslation("about");
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const shouldAnimate = isDesktop && !prefersReducedMotion;

  usePageSeo(
    "About — Chloé Gaillard",
    "Chloé Gaillard, designer graphique basée à Paris. Direction artistique, identité visuelle sur-mesure, typographie et illustration."
  );

  // Bio + email: staggered fade-in on mount
  const introContainerProps = prefersReducedMotion
    ? {}
    : { variants: staggerContainer, initial: "hidden" as const, animate: "visible" as const };
  const introItemProps = prefersReducedMotion ? {} : { variants: fadeInUp };

  // Skills: slide from left, staggered, desktop only
  const skillsListProps = shouldAnimate
    ? { variants: skillsStagger, initial: "hidden" as const, whileInView: "visible" as const, viewport: VIEWPORT }
    : {};
  const skillItemProps = shouldAnimate ? { variants: slideInLeft } : {};

  // Other sections: fade-in on scroll
  const sectionProps = !prefersReducedMotion
    ? { variants: fadeInUp, initial: "hidden" as const, whileInView: "visible" as const, viewport: VIEWPORT }
    : {};

  // Photo: fade-in on mount, desktop only
  const photoProps = shouldAnimate
    ? { variants: fadeInUp, initial: "hidden" as const, animate: "visible" as const }
    : {};

  return (
    <PortfolioPage>
      <div className="about-main">
        <div className="about-left">
          <motion.div className="about-intro" {...introContainerProps}>
            <motion.p className="about-intro__bio" {...introItemProps}>
              {t("about.bio")}
            </motion.p>
            <motion.a
              className="about-intro__email"
              href={`mailto:${t("about.email")}`}
              {...introItemProps}
            >
              {t("about.email")}
            </motion.a>
          </motion.div>

          <div className="about-sections">
            <section className="about-section">
              <motion.p className="about-section__label" {...sectionProps}>
                {t("about.skillsLabel")}
              </motion.p>
              <motion.ul className="about-section__skills" {...skillsListProps}>
                {SKILL_KEYS.map((key) => (
                  <motion.li key={key} className="about-section__skill" {...skillItemProps}>
                    {t(`about.${key}`)}
                  </motion.li>
                ))}
              </motion.ul>
            </section>

            <motion.section className="about-section" {...sectionProps}>
              <p className="about-section__label">{t("about.clientsLabel")}</p>
              <p className="about-section__body">{t("about.clients")}</p>
            </motion.section>

            <motion.section className="about-section" {...sectionProps}>
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
            </motion.section>
          </div>
        </div>

        <motion.div className="about-photo" {...photoProps}>
          <img
            className="about-photo__img"
            src="/chlochlo.jpg"
            alt="Chloé Gaillard dans son studio"
            width="1686"
            height="2248"
            loading="eager"
          />
        </motion.div>
      </div>
    </PortfolioPage>
  );
};
