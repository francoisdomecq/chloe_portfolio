import PortfolioPage from "@components/portfolio-page/portfolio-page";
import {useTranslation} from "react-i18next";
import "./home-page.scss"
import articles from './articles.json'
import Article from "./article/article";
import SelectionGrid from "./selection-grid/selection-grid";
import ReactPlayer from "react-player";

export const HomePage = () => {
  const {t}=useTranslation("home")

  return (
    <PortfolioPage>
      <div className="introduction-container">
        <p className="introduction">{t("home.introduction")}</p>
      </div>
      <div className="showreel">
        <ReactPlayer width="80%" height="90%"src={"/projects/GAILLARD_CHLOE_SHOWREEL_24.mp4"} autoPlay muted loop playing controls/>
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
