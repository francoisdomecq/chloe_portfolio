enum ProjectContentMediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

interface SelectedProject{
  sourceDesktop:string;
  sourceMobile:string;
  mediaDesktop:string;
  mediaMobile:string;
}

interface ProjectContent {
  id: string;
  type: string;
  source: string;
}

interface ProjectDescription {
  title: string;
  subtitle: string[];
  content: string[];
  skills: string[];
  fonts: string;
  coworkers?: string[]
}

interface Project {
  id: string;
  title: string;
  selected?: SelectedProject;
  description: ProjectDescription;
  date: string;
  carouselImage: string;
  content: ProjectContent[];
  theme?: string;
}

export type {Project, ProjectContent};
export {ProjectContentMediaType};
