import {Article as ArticleType} from "../../../types";
import ReactPlayer from "react-player";
import "./article.scss"
import {useTranslation} from "react-i18next";

interface ArticleProps {
  article: ArticleType;
}

export const  Article = ({article}: ArticleProps) => {
  const {t} = useTranslation("home");
  return (
    <a className="article" href={article.link} target="_blank" rel="noopener noreferrer">
      <hr className="article__separator"/>
      <div className="article__content">
        <p className="article__date">{article.date}</p>
        <div className="article__media">
          <div className="article__video">
            <ReactPlayer src={article.video} width={350} height={350} playing loop controls={false} muted/>
          </div>
          <img className="article__image" src={article.image} alt={article.title}/>
          <div className="article__description">
            <div className="article__description-content">
              <h3 className="article__title">{article.website} /<br/> {article.title}</h3>
              <p className="article__article">{article.article}</p>
            </div>
            <span className="article__read-more">{t("home.lastly.read-more")}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

