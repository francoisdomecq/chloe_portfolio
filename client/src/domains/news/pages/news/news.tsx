import {PortfolioPage} from "@core/index";
import { usePageSeo } from "@utils/usePageSeo";

export const News = () => {
  usePageSeo(
    "Actualités — Chloé Gaillard",
    "Actualités et dernières nouvelles de Chloé Gaillard, designer graphique basée à Paris."
  );
  return (
    <PortfolioPage>
      <div></div>
    </PortfolioPage>
  )
}

