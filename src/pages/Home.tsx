import { useState, useMemo } from 'react';
import { Hero } from '../components/Hero';
import { Filters } from '../components/Filters';
import { ProjectCard } from '../components/ProjectCard';
import { mockProjects } from '../data/mockProjects';
import { Project } from '../types/project';

function Home() {
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedAgeRange, setSelectedAgeRange] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = [...mockProjects];

    if (selectedCourse !== 'all') {
      filtered = filtered.filter((p) => p.course === selectedCourse);
    }

    if (selectedFormat !== 'all') {
      filtered = filtered.filter((p) => p.format === selectedFormat);
    }

    if (selectedLevel !== 'all') {
      filtered = filtered.filter((p) => p.level === selectedLevel);
    }

    if (selectedAgeRange !== 'all') {
      const [min, max] = selectedAgeRange.split('-').map(Number);
      filtered = filtered.filter(
        (p) => p.studentAge >= min && p.studentAge <= max,
      );
    }

    filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      if (sortBy === 'popularity') {
        return b.popularity - a.popularity;
      }
      if (sortBy === 'level') {
        const levelOrder = { Начальный: 1, Средний: 2, Продвинутый: 3 };
        return levelOrder[b.level] - levelOrder[a.level];
      }
      return 0;
    });

    return filtered;
  }, [selectedCourse, selectedFormat, selectedLevel, selectedAgeRange, sortBy]);

  const handleReset = () => {
    setSelectedCourse('all');
    setSelectedFormat('all');
    setSelectedLevel('all');
    setSelectedAgeRange('all');
    setSortBy('date');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Hero />

      <main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        id="projects"
      >
        {/* <Filters
          selectedCourse={selectedCourse}
          selectedFormat={selectedFormat}
          selectedLevel={selectedLevel}
          selectedAgeRange={selectedAgeRange}
          sortBy={sortBy}
          onCourseChange={setSelectedCourse}
          onFormatChange={setSelectedFormat}
          onLevelChange={setSelectedLevel}
          onAgeRangeChange={setSelectedAgeRange}
          onSortChange={setSortBy}
          onReset={handleReset}
        /> */}

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Проекты студентов:
            {/* <span className="text-blue-600">
              {filteredAndSortedProjects.length}
            </span> */}
          </h2>
        </div>

        {filteredAndSortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Проекты не найдены
            </h3>
            <p className="text-gray-600 mb-6">
              Попробуйте изменить параметры фильтрации
            </p>
            <button
              onClick={handleReset}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-white py-12 mt-20">
        <p className='text-center text-slate-400'>
        Сopyright © 2026 Codify. Все права защищены. 
        </p>
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-3">
            Готовы создать свой проект?
          </h3>
          <p className="text-gray-400 mb-6">
            Присоединяйтесь к Codify и начните своё путешествие в мир
            программирования
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105">
            Записаться на курс
          </button>
        </div> */}
      </footer>
    </div>
  );
}

export default Home;
