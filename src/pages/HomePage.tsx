import { Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';

interface HomePageProps {
  projects: Project[];
  onProjectClick: (projectId: string) => void;
}

export function HomePage({ projects, onProjectClick }: HomePageProps) {
  const heroImages = projects.flatMap((p) => p.media.photos).slice(0, 6);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Финальные проекты студентов IT Академии
          </h1>
          <p className="hero-subtitle">
            Откройте для себя впечатляющие проекты наших выпускников
          </p>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Все проекты</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
