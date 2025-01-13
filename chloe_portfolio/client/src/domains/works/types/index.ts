enum ProjectContentMediaType{
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

interface ProjectContent {
  id: string;
  type: string;
  source : string;
}

interface ProjectDescription{
  title: string;
  subtitle:string[];
  content:string[];
  skills : string[];
  fonts: string;
  coworkers?:string[]
}

interface Project {
  id:string;
  title: string;
  description: ProjectDescription;
  date: string;
  carouselImage:string;
  content: ProjectContent[];
}
export type { Project, ProjectContent };
export { ProjectContentMediaType };
