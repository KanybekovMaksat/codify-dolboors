import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { AuthorSidebar } from '../components/AuthorSidebar';
import { CodeBlock } from '../components/CodeBlock';

interface ProjectPageProps {
  project: Project;
  onBack: () => void;
}

export function ProjectPage({ project, onBack }: ProjectPageProps) {
  return (
    <div className="project-page">
      <AuthorSidebar author={project.author} />

      <main className="project-content">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
          Вернуться к проектам
        </button>

        <div className="project-header">
          <div className="project-course-badge">{project.course}</div>
          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Открыть проект
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        {project.media.video && (
          <section className="project-section">
            <h2>Видео демонстрация</h2>
            <div className="video-wrapper">
              <video controls>
                <source src={project.media.video} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          </section>
        )}

        {project.media.photos.length > 0 && (
          <section className="project-section">
            <h2>Скриншоты</h2>
            <div className="photos-grid">
              {project.media.photos.map((photo, idx) => (
                <div key={idx} className="photo-item">
                  <img src={photo} alt={`Скриншот ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.media.canva && (
          <section className="project-section">
            <h2>Дизайн в Canva</h2>
            <a
              href={project.media.canva}
              target="_blank"
              rel="noopener noreferrer"
              className="canva-link"
            >
              Посмотреть дизайн в Canva
              <ExternalLink size={16} />
            </a>
          </section>
        )}

        {project.code.length > 0 && (
          <section className="project-section">
            <h2>Исходный код</h2>
            <div className="code-files">
              {project.code.map((file, idx) => (
                <CodeBlock key={idx} file={file} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
