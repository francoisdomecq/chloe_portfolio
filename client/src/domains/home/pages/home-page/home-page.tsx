import { PortfolioPage } from "@components/portfolio-page/portfolio-page";
import {useTranslation} from "react-i18next";
import "./home-page.scss"
import articles from './articles.json'
import { Article } from "./article/article";
import { SelectionGrid } from "./selection-grid/selection-grid";
import ReactPlayer from "react-player";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useIsDesktop } from "@utils/useIsDesktop";
import { usePageSeo } from "@utils/usePageSeo";

export const HomePage = () => {
  const {t}=useTranslation("home")
  usePageSeo(
    "Chloé Gaillard",
    "Portfolio de Chloé Gaillard, designer graphique basée à Paris — direction artistique, identité visuelle, typographie et illustration."
  );

  const showreelRef = useRef<HTMLDivElement>(null);
  const introContainerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const introText = t("home.introduction");

  const { scrollYProgress } = useScroll({
    target: showreelRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.75, 1, 1, 0.75]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [16, 0, 0, 16]);

  return (
    <PortfolioPage>
      <div className="introduction-container" ref={introContainerRef}>
        <motion.p
          className="introduction"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {introText}
        </motion.p>
      </div>
      <div className="showreel" ref={showreelRef}>
        {isDesktop && (
          <motion.div
            className="showreel__inner"
            style={prefersReducedMotion ? {} : { scale, borderRadius }}
          >
            <ReactPlayer width="100%" height="100%" src={"/projects/GAILLARD_CHLOE_SHOWREEL_24.mp4"} autoPlay muted loop playing/>
          </motion.div>
        )}
      </div>
      <div className="selection">
        <div className="selection__header">
          <h2 className="selection__title">{t("home.selection.title")}</h2>
          <a href="/works" className="selection__view-more">{t("home.selection.view-more")}</a>
        </div>
        <SelectionGrid/>
      </div>
      <div className="lastly" id="news">
        <h2 className="selection__title">{t("home.lastly.title")}</h2>
        {articles.map(article=><Article key={article.title} article={article}/>)}
      </div>
    </PortfolioPage>
  )
}
