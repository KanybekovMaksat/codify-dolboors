import { TrendingUp } from 'lucide-react';
import { Project } from '../data/mockProject';

interface SkillsSectionProps {
  project: Project;
}

export default function SkillsSection({ project }: SkillsSectionProps) {
  // Берем только ключевые категории навыков
  const mainSkills = project.skills.map((skill) => ({
    category: skill.category,
    progress: skill.progress,
  }));

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Результаты обучения
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Основные навыки
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Ключевые умения, которые студент освоил за время курса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mainSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {skill.category}
              </h3>

              <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-green-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Прогресс</span>
                <span className="font-bold text-blue-600">{skill.progress}%</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Это только начало!
          </h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            После завершения курса студенты получают не только технические навыки,
            но и уверенность в своих силах, умение самостоятельно решать задачи
            и готовность к созданию собственных проектов.
          </p>
        </div>
      </div>
    </section>
  );
}
