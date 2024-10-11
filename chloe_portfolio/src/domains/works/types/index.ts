enum ProjectContentMediaType{
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

interface ProjectContent {
  id: string;
  type: string;
  source : string;
}

interface Project {
  id:string;
  title: string;
  description: string;
  date: string;
  carouselImage:string;
  content: ProjectContent[];
}
export type { Project, ProjectContent };
export { ProjectContentMediaType };
