enum ProjectContentMediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

interface SelectedProject{
  sourceDesktop:string;
  sourceMobile?:string;
  mediaDesktop:string;
  mediaMobile?:string;
}

interface ProjectContent {
  id: string;
  type: string;
  source: string;
  displayMobile?:boolean;
  displayDesktop?:boolean;
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
  index:number;
  title: string;
  subtitle?: string;
  selected?: SelectedProject;
  carousel:SelectedProject;
  description: ProjectDescription;
  date: string;
  content: ProjectContent[];
  theme?: string;
}

export type {Project, ProjectContent};
export {ProjectContentMediaType};
