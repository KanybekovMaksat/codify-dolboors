export interface ProjectMedia {
  video?: string;
  photos: string[];
  canva?: string;
}

export interface Author {
  fullName: string;
  age: number;
  photo: string;
  previousSkills: string[];
  newSkills: string[];
  testimonial: string;
}

export interface CodeFile {
  language: 'html' | 'css' | 'javascript' | 'python' | 'lua' | 'scratch';
  filename: string;
  content: string;
  explanation: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url?: string;
  course: string;
  media: ProjectMedia;
  author: Author;
  code: CodeFile[];
}
