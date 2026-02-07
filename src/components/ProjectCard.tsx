import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const firstPhoto = project.media.photos[0];

  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-image">
        {firstPhoto && (
          <img src={firstPhoto} alt={project.title} loading="lazy" />
        )}
      </div>
      <div className="project-card-content">
        <div className="project-card-course">{project.course}</div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        <button className="project-card-button">Посмотреть</button>
      </div>
    </div>
  );
}
