import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Mentor, Group, Project, Student, CourseCategory } from '@/app/types';
import { mockMentor, mockGroups, mockProjects } from '@/app/mock-data';

interface AppContextType {
  mentor: Mentor;
  groups: Group[];
  projects: Project[];
  addGroup: (group: Omit<Group, 'id'>) => void;
  updateGroup: (id: string, group: Partial<Group>) => void;
  deleteGroup: (id: string) => void;
  addProject: (project: Omit<Project, 'id' | 'createdAt'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  getGroupById: (id: string) => Group | undefined;
  getProjectById: (id: string) => Project | undefined;
  getProjectsByGroupId: (groupId: string) => Project[];
  getStudentsByIds: (ids: string[], groupId: string) => Student[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [mentor] = useState<Mentor>(mockMentor);
  const [groups, setGroups] = useState<Group[]>(mockGroups);
  const [projects, setProjects] = useState<Project[]>(mockProjects);

  const addGroup = (group: Omit<Group, 'id'>) => {
    const newGroup: Group = {
      ...group,
      id: `g${Date.now()}`,
    };
    setGroups((prev) => [...prev, newGroup]);
  };

  const updateGroup = (id: string, updatedGroup: Partial<Group>) => {
    setGroups((prev) =>
      prev.map((group) => (group.id === id ? { ...group, ...updatedGroup } : group))
    );
  };

  const deleteGroup = (id: string) => {
    setGroups((prev) => prev.filter((group) => group.id !== id));
    setProjects((prev) => prev.filter((project) => project.groupId !== id));
  };

  const addProject = (project: Omit<Project, 'id' | 'createdAt'>) => {
    const newProject: Project = {
      ...project,
      id: `p${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setProjects((prev) => [...prev, newProject]);
  };

  const updateProject = (id: string, updatedProject: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((project) => (project.id === id ? { ...project, ...updatedProject } : project))
    );
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const getGroupById = (id: string) => {
    return groups.find((group) => group.id === id);
  };

  const getProjectById = (id: string) => {
    return projects.find((project) => project.id === id);
  };

  const getProjectsByGroupId = (groupId: string) => {
    return projects.filter((project) => project.groupId === groupId);
  };

  const getStudentsByIds = (ids: string[], groupId: string) => {
    const group = getGroupById(groupId);
    if (!group) return [];
    return group.students.filter((student) => ids.includes(student.id));
  };

  const value: AppContextType = {
    mentor,
    groups,
    projects,
    addGroup,
    updateGroup,
    deleteGroup,
    addProject,
    updateProject,
    deleteProject,
    getGroupById,
    getProjectById,
    getProjectsByGroupId,
    getStudentsByIds,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
