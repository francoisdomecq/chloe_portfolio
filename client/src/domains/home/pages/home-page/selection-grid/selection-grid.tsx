import works from 'src/config/works.json'
import {Project} from "@domains/works/types";
import "./selection-grid.scss"

const SelectionGrid = () => {
  const filteredWorks: Project[]= works.filter(work=>work.selectedIndex)

  const renderWork= (work:Project)=>{
    return (<a href={`/works/${work.id}`}><img className="selection-grid__item" src={work.carouselImage} alt={work.title}/></a>)
  }

  return (
    <div className="selection-grid">{filteredWorks.map(renderWork)}</div>
  )
}

export default SelectionGrid