import { Code2, Trophy, Users } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920')] opacity-5 bg-cover bg-center"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Финальные проекты студентов{' '} <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Codify Dolboor
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Реальные проекты. Реальные навыки. Реальные результаты.
          </p>

          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            Посмотреть проекты
            <Code2 className="w-5 h-5" />
          </button>

          {/* <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex justify-center mb-3">
                <Users className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="text-4xl font-bold mb-2">10к+</div>
              <div className="text-gray-300">выпускников</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex justify-center mb-3">
                <Trophy className="w-10 h-10 text-blue-400" />
              </div>
              <div className="text-4xl font-bold mb-2">10к+</div>
              <div className="text-gray-300">финальных проектов</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex justify-center mb-3">
                <Code2 className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="text-4xl font-bold mb-2">10–17</div>
              <div className="text-gray-300">возраст учеников</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
