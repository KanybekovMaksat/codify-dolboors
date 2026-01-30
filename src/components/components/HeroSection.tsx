import { ExternalLink, BookOpen } from 'lucide-react';
import { Project } from '../../data/mockProject';

interface HeroSectionProps {
  project: Project;
}

export default function HeroSection({ project }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-[url('/projects/asema/img/image1.png')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
            Выпускной проект
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 max-w-3xl mx-auto font-light">
            {project.slogan}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-base sm:text-lg">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="font-semibold">{project.student.name}</span>
              <span className="text-blue-200">•</span>
              <span className="text-blue-200">{project.student.age} лет</span>
            </div>

          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Открыть проект
            </a>

          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div> */}
    </section>
    
  );
}
