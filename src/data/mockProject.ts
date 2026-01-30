export type ProjectMedia =
  | {
      type: 'video';
      src: string; // mp4
      poster?: string;
    }
  | {
      type: 'image';
      src: string;
    }
  | {
      type: 'canva';
      src: string; // iframe url
    };

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

  media: {
    video: {
      src: string; // mp4
      poster?: string;
    };

    photos: string[]; // 👈 НЕСКОЛЬКО ФОТО С ВЫСТУПЛЕНИЯ

    canva: {
      src: string; // iframe ссылка
    };
  };

  projectUrl: string;
  technologies: string[]; approach: string[]; skills: Array<{ category: string; items: string[]; progress: number; }>;
}

export const mockProject= {
  id: '1',
  title: 'JFoods',
  slogan: 'Современный сайт для японской кухни',

  student: {
    name: 'Асема Сагындыкова',
    age: 14,
    photo: '/projects/asema/img/image1.png',
    course: 'HTML & CSS',
    duration: '4 месяца',
    skillsBefore: ['Базовый HTML'],
    skillsAfter: ['HTML', 'CSS', 'Адаптивная вёрстка'],
  },

  media: {
    video: {
      src: '/projects/asema/asema.mp4',
      poster: '/projects/asema/poster.jpg',
    },

    photos: [
      '/projects/asema/img/image1.png',
      '/projects/asema/img/image2.png',
      '/projects/asema/img/image3.png',
    ],

    canva: {
      src: 'https://www.canva.com/design/DAG_51oxmg4/view?embed',
    },
  },

  projectUrl: 'https://codify-dolboors.vercel.app/projects/asema/index.html',
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
          { name: 'main.js', type: 'file' },
        ],
      },
      {
        name: 'public',
        type: 'folder',
        children: [
          { name: 'images', type: 'folder' },
          { name: 'favicon.ico', type: 'file' },
        ],
      },
      { name: 'package.json', type: 'file' },
      { name: 'README.md', type: 'file' },
    ],
  },
  technologies: [
    'HTML5 (семантическая вёрстка)',
    'CSS3 (Flexbox, Grid, анимации)',
    'JavaScript ES6+ (классы, модули)',
    'Local Storage API',
    'Responsive Design',
    'Git & GitHub',
  ],
  approach: [
    'Модульная архитектура с разделением на компоненты',
    'Mobile-first подход к разработке',
    'Семантическая и доступная вёрстка',
    'Чистый и читаемый код',
    'Версионирование через Git',
  ],
  skills: [
    {
      category: 'HTML & Семантика',
      items: [
        'Семантические теги',
        'Доступность (a11y)',
        'SEO-оптимизация',
        'Формы и валидация',
      ],
      progress: 95,
    },
    {
      category: 'CSS & Дизайн',
      items: [
        'Flexbox и Grid',
        'Адаптивная вёрстка',
        'Анимации и переходы',
        'Методология БЭМ',
      ],
      progress: 90,
    },
    {
      category: 'JavaScript',
      items: [
        'ES6+ синтаксис',
        'DOM манипуляции',
        'Работа с событиями',
        'Асинхронность',
        'Модули',
      ],
      progress: 85,
    },
    {
      category: 'Работа с проектами',
      items: ['Git и GitHub', 'Структура проекта', 'Дебаггинг', 'Тестирование'],
      progress: 80,
    },
    {
      category: 'Soft Skills',
      items: [
        'Планирование задач',
        'Соблюдение дедлайнов',
        'Презентация проекта',
        'Работа с обратной связью',
      ],
      progress: 88,
    },
  ],
};
