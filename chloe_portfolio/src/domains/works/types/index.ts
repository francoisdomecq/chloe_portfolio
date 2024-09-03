interface Project {
  id:string;
  title: string;
  description: string;
  carouselImage:string;
  content: ProjectContent[];
}

enum ProjectContentMediaType{
  IMAGE = "image",
  VIDEO = "video",
}

interface ProjectContentDescription{
  title: string;
  description: string;
}

interface ProjectContent {
  id: string;
  type: ProjectContentMediaType;
  source : string;
  description : ProjectContentDescription;
}

export { Project , ProjectContent, ProjectContentMediaType };