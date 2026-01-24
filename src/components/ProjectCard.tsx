import { ExternalLink, Calendar, User } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const courseBadgeColors = {
  'HTML/CSS': 'bg-orange-100 text-orange-700 border-orange-200',
  JavaScript: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  Frontend: 'bg-blue-100 text-blue-700 border-blue-200',
  Python: 'bg-green-100 text-green-700 border-green-200',
};

const levelBadgeColors = {
  'Начальный': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Средний': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Продвинутый': 'bg-blue-50 text-blue-700 border-blue-200',
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long' });
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              courseBadgeColors[project.course]
            }`}
          >
            {project.course}
          </span>
        </div>
        <div className="absolute bottom-3 left-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${
              levelBadgeColors[project.level]
            }`}
          >
            {project.level}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>
              {project.studentName}, {project.studentAge} лет
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formatDate(project.date)}</span>
          </div>

          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors group/btn">
            Смотреть проект
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
