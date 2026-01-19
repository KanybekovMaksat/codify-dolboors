export type CourseCategory = 'Scratch' | 'Roblox' | 'HTML/CSS' | 'JS(React)' | 'Python';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
}

export interface Group {
  id: string;
  name: string;
  category: CourseCategory;
  students: Student[];
}

export interface ProjectFile {
  name: string;
  type: 'zip' | 'presentation' | 'image';
  url: string;
  size?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  type: 'individual' | 'team';
  studentIds: string[];
  groupId: string;
  category: CourseCategory;
  files: ProjectFile[];
  createdAt: string;
}

export interface Mentor {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  photo: string;
  bio: string;
}
