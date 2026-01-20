import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Users, BookOpen, ArrowLeft, Github, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { projects } from '@/data/projects';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Проект не найден</h1>
          <Link to="/projects" className="text-primary hover:underline">
            Вернуться к проектам
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад к проектам
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            {project.courseType}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Project Info Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <User className="w-4 h-4" />
              <span className="text-sm">Студент</span>
            </div>
            <p className="font-medium">{project.student}</p>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm">Ментор</span>
            </div>
            <p className="font-medium">{project.mentor}</p>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">Группа</span>
            </div>
            <p className="font-medium">{project.group}</p>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Дата завершения</span>
            </div>
            <p className="font-medium">
              {new Date(project.date).toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>
        </div>

        {/* Image Slider */}
        {project.images.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Скриншоты проекта</h2>
            <div className="relative rounded-xl overflow-hidden bg-muted">
              <img 
                src={project.images[currentImageIndex]} 
                alt={`${project.title} - скриншот ${currentImageIndex + 1}`}
                className="w-full aspect-video object-cover"
              />
              
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex
                            ? 'bg-primary'
                            : 'bg-background/50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Skills Learned */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Что изучил ребёнок</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {project.skills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        {project.githubUrl && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Исходный код</h2>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors w-full md:w-auto"
            >
              <Github className="w-5 h-5" />
              <div className="flex-1">
                <div className="font-medium">Посмотреть на GitHub</div>
                <div className="text-sm text-muted-foreground">
                  Изучите код этого проекта
                </div>
              </div>
            </a>
          </div>
        )}

        {/* CTA */}
        <div className="p-8 rounded-xl bg-primary/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Хотите, чтобы ваш ребёнок тоже создавал такие проекты?
          </h3>
          <p className="text-muted-foreground mb-6">
            Запишитесь на курс и начните путь в программировании
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Записаться на курс
          </a>
        </div>
      </div>
    </div>
  );
}
