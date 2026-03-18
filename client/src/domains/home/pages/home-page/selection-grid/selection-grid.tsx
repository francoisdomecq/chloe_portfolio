import works from 'src/config/works.json'
import {Project} from "@domains/works/types";
import "./selection-grid.scss"
import ReactPlayer from "react-player";
import {usePageTransition} from "@components/page-transition/page-transition-context";

export const SelectionGrid = () => {
  const filteredWorks: Project[]= works.filter(work=>!!work.selected)
  const isDesktop = window.innerWidth > 768;
  const {navigateWithTransition }=usePageTransition();

  const renderWork= (work:Project)=>{
    if(isDesktop){
      return (
        <a href={`/works/${work.id}`} onClick={(e) => {
          navigateWithTransition(`/works/${work.id}`)
          e.preventDefault();
        }}>
          {work.selected?.mediaDesktop === "VIDEO" ?
            <ReactPlayer src={work.selected.sourceDesktop}  width="100%" height="100%" className="selection-grid__item" muted autoPlay loop controls={false}/>
            :
            <img alt={work.title} src={work.selected?.sourceDesktop} className="selection-grid__item"/>
          }
        </a>
      )
    }
    return (
      <a href={`/works/${work.id}`}>
        {work.selected?.mediaMobile === "VIDEO" ?
          <ReactPlayer src={work.selected.sourceMobile} muted autoPlay loop controls={false}/>
          :
          <img src={work.selected?.sourceMobile} alt={work.title} className="selection-grid__item"/>
        }
    </a>
    )
  }

  return (
    <div className="selection-grid">{filteredWorks.map(renderWork)}</div>
  )
}

