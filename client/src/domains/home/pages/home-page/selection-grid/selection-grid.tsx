import works from 'src/config/works.json'
import {Project} from "@domains/works/types";
import "./selection-grid.scss"
import ReactPlayer from "react-player";
import {useNavigate} from "react-router-dom";

export const SelectionGrid = () => {
  const filteredWorks: Project[]= works.filter(work=>!!work.selected)
  const isDesktop = window.innerWidth > 768;
  const navigate = useNavigate();

  const renderWork= (work:Project, index: number)=>{
    if(isDesktop){
      return (
        <a key={work.id} href={`/works/${work.id}`} aria-label={work.title} onClick={(e) => {
          e.preventDefault();
          navigate(`/works/${work.id}`);
        }}>
          {work.selected?.mediaDesktop === "VIDEO" ?
            <ReactPlayer src={work.selected.sourceDesktop}  width="100%" height="100%" className="selection-grid__item" muted autoPlay loop controls={false}/>
            :
            <img alt={work.title} src={work.selected?.sourceDesktop} className="selection-grid__item" loading={index === 0 ? "eager" : "lazy"}/>
          }
        </a>
      )
    }
    return (
      <a key={work.id} href={`/works/${work.id}`} aria-label={work.title}>
        {work.selected?.mediaMobile === "VIDEO" ?
          <ReactPlayer src={work.selected.sourceMobile} muted autoPlay loop controls={false}/>
          :
          <img src={work.selected?.sourceMobile} alt={work.title} className="selection-grid__item" loading={index === 0 ? "eager" : "lazy"}/>
        }
    </a>
    )
  }

  return (
    <div className="selection-grid">{filteredWorks.map((work, i) => renderWork(work, i))}</div>
  )
}

