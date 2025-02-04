enum ProjectContentMediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
}

interface ProjectContent {
  id: string;
  type: string;
  source: string;
}

export interface ProjectDescription {
  subtitle: string[];
  content: string[];
  skills: string[];
  fonts: string;
  coworkers?: string[]
}

interface Project {
  id: string;
  title: string;
  description: ProjectDescription;
  date: string;
  carouselImage: string;
  content: ProjectContent[];
}

interface CreateProject {
  title: string;
  description: ProjectDescription;
  date: string;
  carouselImage: File;
  content: File[];
}

interface UpdateProject {
  title?: string;
  description?: ProjectDescription;
  date?: string;
  carouselImage?: File;
  newCarouselImage?: File;
  content?: File[];
  newContent?: File[];
}

export type {Project, ProjectContent, CreateProject, UpdateProject};
export {ProjectContentMediaType};
