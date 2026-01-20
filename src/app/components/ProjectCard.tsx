import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      to={`/projects/${project.id}`}
      className="group block rounded-xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.coverImage} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-3">
          {project.courseType}
        </div>
        
        <h3 className="text-xl mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{project.student}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(project.date).toLocaleDateString('ru-RU')}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
