import { Filter, X } from 'lucide-react';

interface FiltersProps {
  selectedCourse: string;
  selectedFormat: string;
  selectedLevel: string;
  selectedAgeRange: string;
  sortBy: string;
  onCourseChange: (course: string) => void;
  onFormatChange: (format: string) => void;
  onLevelChange: (level: string) => void;
  onAgeRangeChange: (ageRange: string) => void;
  onSortChange: (sort: string) => void;
  onReset: () => void;
}

export function Filters({
  selectedCourse,
  selectedFormat,
  selectedLevel,
  selectedAgeRange,
  sortBy,
  onCourseChange,
  onFormatChange,
  onLevelChange,
  onAgeRangeChange,
  onSortChange,
  onReset,
}: FiltersProps) {
  const hasActiveFilters =
    selectedCourse !== 'all' ||
    selectedFormat !== 'all' ||
    selectedLevel !== 'all' ||
    selectedAgeRange !== 'all';

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-slate-800">
          <Filter className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Фильтры и сортировка</h2>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <X className="w-4 h-4" />
            Сбросить
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Курс
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => onCourseChange(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="all">Все курсы</option>
            <option value="HTML/CSS">HTML/CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Frontend">Frontend</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Формат
          </label>
          <select
            value={selectedFormat}
            onChange={(e) => onFormatChange(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="all">Все форматы</option>
            <option value="Сайт">Сайт</option>
            <option value="Игра">Игра</option>
            <option value="Приложение">Приложение</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Уровень
          </label>
          <select
            value={selectedLevel}
            onChange={(e) => onLevelChange(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="all">Все уровни</option>
            <option value="Начальный">Начальный</option>
            <option value="Средний">Средний</option>
            <option value="Продвинутый">Продвинутый</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Возраст
          </label>
          <select
            value={selectedAgeRange}
            onChange={(e) => onAgeRangeChange(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="all">Все возрасты</option>
            <option value="10-12">10-12 лет</option>
            <option value="13-15">13-15 лет</option>
            <option value="16-17">16-17 лет</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Сортировка
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="date">По дате</option>
            <option value="popularity">По популярности</option>
            <option value="level">По сложности</option>
          </select>
        </div>
      </div>
    </div>
  );
}
