import { ExternalLink, Award, Code } from 'lucide-react';
import { Project } from '../data/mockProject';

interface ProjectLinkCTAProps {
  project: Project;
}

export default function ProjectLinkCTA({ project }: ProjectLinkCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Готовый проект</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Посмотрите проект в действии
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Полностью рабочее приложение, созданное студентом с нуля
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Открыть проект
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Code className="w-4 h-4" />
                <span>Без шаблонов</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-4 h-4" />
                <span>100% авторская работа</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Работает онлайн</span>
              </div>
            </div>

            <p className="text-blue-200 text-center max-w-xl mt-4">
              Этот проект полностью разработан студентом без использования готовых шаблонов.
              Каждая строка кода написана вручную в процессе обучения.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
