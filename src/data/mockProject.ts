export interface Project {
  id: string;
  title: string;
  slogan: string;
  student: {
    name: string;
    age: number;
    photo: string;
    course: string;
    duration: string;
    skillsBefore: string[];
    skillsAfter: string[];
  };
  video: {
    url: string;
    thumbnail: string;
  };
  images: string[];
  description: {
    what: string;
    problem: string;
    audience: string;
    functionality: string[];
  };
  projectUrl: string;
  screenshots: Array<{
    url: string;
    title: string;
    type: 'desktop' | 'mobile' | 'tablet';
  }>;
  structure: {
    folders: Array<{
      name: string;
      type: 'folder' | 'file';
      children?: Array<{
        name: string;
        type: 'folder' | 'file';
      }>;
    }>;
  };
  technologies: string[];
  approach: string[];
  skills: Array<{
    category: string;
    items: string[];
    progress: number;
  }>;
}

export const mockProject: Project = {
  id: '1',
  title: 'TaskMaster Pro',
  slogan: 'Умный планировщик задач для студентов',
  student: {
    name: 'Алексей Смирнов',
    age: 14,
    photo: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
    course: 'Веб-разработка для подростков',
    duration: '5 месяцев',
    skillsBefore: [
      'Базовое знание HTML',
      'Умение работать с компьютером',
      'Интерес к программированию'
    ],
    skillsAfter: [
      'Создание полноценных веб-приложений',
      'Профессиональная работа с HTML, CSS, JavaScript',
      'Понимание архитектуры проектов',
      'Работа с Git и GitHub',
      'Адаптивная вёрстка',
      'Презентация своих проектов'
    ]
  },
  video: {
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  images: [
    'https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  description: {
    what: 'TaskMaster Pro — это современное веб-приложение для управления задачами, специально разработанное для студентов. Приложение помогает организовать учебный процесс, не забывать о домашних заданиях и эффективно планировать время.',
    problem: 'Многие студенты сталкиваются с проблемой организации своего времени и забывают о важных заданиях. TaskMaster Pro решает эту проблему, предоставляя простой и удобный инструмент для планирования.',
    audience: 'Школьники и студенты, которые хотят улучшить свою организованность и не забывать о важных задачах. Подходит для всех, кто ценит своё время.',
    functionality: [
      'Создание и управление задачами с приоритетами',
      'Категоризация задач по предметам',
      'Установка дедлайнов и напоминаний',
      'Отслеживание прогресса выполнения',
      'Статистика продуктивности',
      'Адаптивный дизайн для всех устройств'
    ]
  },
  projectUrl: 'https://taskmaster-demo.example.com',
  screenshots: [
    {
      url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Главная страница',
      type: 'desktop'
    },
    {
      url: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Список задач',
      type: 'desktop'
    },
    {
      url: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400',
      title: 'Мобильная версия',
      type: 'mobile'
    },
    {
      url: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Страница статистики',
      type: 'desktop'
    }
  ],
  structure: {
    folders: [
      {
        name: 'src',
        type: 'folder',
        children: [
          { name: 'components', type: 'folder' },
          { name: 'pages', type: 'folder' },
          { name: 'assets', type: 'folder' },
          { name: 'styles', type: 'folder' },
          { name: 'utils', type: 'folder' },
          { name: 'main.js', type: 'file' }
        ]
      },
      {
        name: 'public',
        type: 'folder',
        children: [
          { name: 'images', type: 'folder' },
          { name: 'favicon.ico', type: 'file' }
        ]
      },
      { name: 'package.json', type: 'file' },
      { name: 'README.md', type: 'file' }
    ]
  },
  technologies: [
    'HTML5 (семантическая вёрстка)',
    'CSS3 (Flexbox, Grid, анимации)',
    'JavaScript ES6+ (классы, модули)',
    'Local Storage API',
    'Responsive Design',
    'Git & GitHub'
  ],
  approach: [
    'Модульная архитектура с разделением на компоненты',
    'Mobile-first подход к разработке',
    'Семантическая и доступная вёрстка',
    'Чистый и читаемый код',
    'Версионирование через Git'
  ],
  skills: [
    {
      category: 'HTML & Семантика',
      items: [
        'Семантические теги',
        'Доступность (a11y)',
        'SEO-оптимизация',
        'Формы и валидация'
      ],
      progress: 95
    },
    {
      category: 'CSS & Дизайн',
      items: [
        'Flexbox и Grid',
        'Адаптивная вёрстка',
        'Анимации и переходы',
        'Методология БЭМ'
      ],
      progress: 90
    },
    {
      category: 'JavaScript',
      items: [
        'ES6+ синтаксис',
        'DOM манипуляции',
        'Работа с событиями',
        'Асинхронность',
        'Модули'
      ],
      progress: 85
    },
    {
      category: 'Работа с проектами',
      items: [
        'Git и GitHub',
        'Структура проекта',
        'Дебаггинг',
        'Тестирование'
      ],
      progress: 80
    },
    {
      category: 'Soft Skills',
      items: [
        'Планирование задач',
        'Соблюдение дедлайнов',
        'Презентация проекта',
        'Работа с обратной связью'
      ],
      progress: 88
    }
  ]
};
