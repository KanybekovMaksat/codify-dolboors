import { BookOpen, MessageCircle, Calendar, Trophy, ArrowRight } from 'lucide-react';
import { Project } from '../data/mockProject';

interface FinalCTAProps {
  project: Project;
}

export default function FinalCTA({ project }: FinalCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-green-600/5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Trophy className="w-4 h-4" />
              Результат обучения в Codify
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ваш ребёнок может создать такой же проект
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Этот проект — результат обучения в <span className="font-bold text-blue-600">Codify</span>.
            </p>

            <p className="text-2xl font-bold text-gray-900 mb-2">
              Через {project.student.duration} ваш ребёнок сможет:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {project.student.duration}
                </div>
                <p className="text-gray-700 font-medium">Длительность курса</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {project.skills.length}+
                </div>
                <p className="text-gray-700 font-medium">Категорий навыков</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                <p className="text-gray-700 font-medium">Выпускной проект</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 shadow-2xl text-white mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Начните обучение сегодня
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <button className="group bg-white text-blue-700 px-8 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3">
                <BookOpen className="w-6 h-6" />
                Записаться на курс
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-blue-500/30 hover:border-white/50 transition-all flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Получить консультацию
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Calendar className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm text-blue-100">Старт ближайшей группы</p>
                <p className="font-bold">1 февраля</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <Trophy className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm text-blue-100">Гарантия результата</p>
                <p className="font-bold">100%</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <BookOpen className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm text-blue-100">Осталось мест</p>
                <p className="font-bold">5 из 12</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Более 500 студентов уже создали свои проекты в Codify
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600"
                  ></div>
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                и еще 496+ студентов
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
