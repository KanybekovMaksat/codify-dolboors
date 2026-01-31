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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ваш ребёнок может создать такой же проект
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Этот проект — результат обучения в <span className="font-bold text-blue-600">Codify</span>.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12  text-white mb-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
