import { Target, Users, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/mockProject';

interface AboutProjectProps {
  project: Project;
}

export default function AboutProject({ project }: AboutProjectProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            О проекте
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Понятное описание проекта простыми словами
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Что это за проект</h3>
            <p className="text-gray-700 leading-relaxed">
              {project.description.what}
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Какую задачу решает</h3>
            <p className="text-gray-700 leading-relaxed">
              {project.description.problem}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-gray-200 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Для кого этот проект</h3>
              <p className="text-gray-700 leading-relaxed">
                {project.description.audience}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 border-2 border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            Основной функционал
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.description.functionality.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
