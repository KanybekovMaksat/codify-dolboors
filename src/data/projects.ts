export interface Project {
  id: string;
  title: string;
  description: string;
  student: string;
  mentor: string;
  group: string;
  courseType: string;
  date: string;
  coverImage: string;
  videoUrl?: string;
  images: string[];
  skills: string[];
  presentationUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Игра "Космические Приключения"',
    description: 'Увлекательная игра, где нужно управлять космическим кораблем и собирать звезды',
    student: 'Алексей Петров',
    mentor: 'Мария Иванова',
    group: 'Junior 2024',
    courseType: 'Разработка игр',
    date: '2025-01-15',
    coverImage: 'https://images.unsplash.com/photo-1556438064-2d7646166914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY4ODE1NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1556438064-2d7646166914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY4ODE1NTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1505304451-3b3b85a91afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZ3xlbnwxfHx8fDE3Njg4NzI4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    skills: [
      'Основы программирования',
      'Работа с игровой механикой',
      'Управление объектами',
      'Обработка событий'
    ],
    githubUrl: 'https://github.com/example/space-adventure'
  },
  {
    id: '2',
    title: 'Интернет-магазин "МиниМаркет"',
    description: 'Веб-приложение для онлайн-покупок с корзиной и каталогом товаров',
    student: 'София Кузнецова',
    mentor: 'Дмитрий Смирнов',
    group: 'Middle 2024',
    courseType: 'Веб-разработка',
    date: '2025-01-10',
    coverImage: 'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY4OTExNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY4OTExNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    skills: [
      'HTML и CSS',
      'JavaScript',
      'Работа с формами',
      'Адаптивный дизайн'
    ],
    githubUrl: 'https://github.com/example/mini-market'
  },
  {
    id: '3',
    title: 'Мобильное приложение "Мой Дневник"',
    description: 'Приложение для ведения личного дневника с возможностью добавления фото',
    student: 'Максим Новиков',
    mentor: 'Елена Волкова',
    group: 'Advanced 2024',
    courseType: 'Мобильная разработка',
    date: '2024-12-20',
    coverImage: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4OTA4MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4OTA4MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    skills: [
      'React Native',
      'Работа с базой данных',
      'UI/UX дизайн',
      'Камера и галерея'
    ]
  },
  {
    id: '4',
    title: 'Образовательная платформа "УчусьСам"',
    description: 'Интерактивная платформа для изучения математики с тестами и заданиями',
    student: 'Анна Соколова',
    mentor: 'Игорь Павлов',
    group: 'Middle 2024',
    courseType: 'Веб-разработка',
    date: '2024-12-15',
    coverImage: 'https://images.unsplash.com/photo-1599666505327-7758b44a9985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY29kaW5nfGVufDF8fHx8MTc2ODkyOTMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1599666505327-7758b44a9985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY29kaW5nfGVufDF8fHx8MTc2ODkyOTMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    skills: [
      'React',
      'Логика программирования',
      'Работа с API',
      'Системы тестирования'
    ]
  },
  {
    id: '5',
    title: 'Игра "Лабиринт Времени"',
    description: 'Логическая игра-головоломка с различными уровнями сложности',
    student: 'Артем Морозов',
    mentor: 'Мария Иванова',
    group: 'Junior 2024',
    courseType: 'Разработка игр',
    date: '2024-11-30',
    coverImage: 'https://images.unsplash.com/photo-1505304451-3b3b85a91afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZ3xlbnwxfHx8fDE3Njg4NzI4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1505304451-3b3b85a91afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZ3xlbnwxfHx8fDE3Njg4NzI4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    skills: [
      'Алгоритмы',
      'Работа с уровнями',
      'Игровой баланс',
      'Анимации'
    ]
  },
  {
    id: '6',
    title: 'Портфолио разработчика',
    description: 'Личный сайт-портфолио с проектами и резюме',
    student: 'Екатерина Белова',
    mentor: 'Дмитрий Смирнов',
    group: 'Advanced 2024',
    courseType: 'Веб-разработка',
    date: '2024-11-25',
    coverImage: 'https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc2ODkyOTMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGluZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc2ODkyOTMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    skills: [
      'HTML/CSS',
      'JavaScript',
      'Адаптивная верстка',
      'Анимации CSS'
    ],
    githubUrl: 'https://github.com/example/portfolio'
  }
];

export const courseTypes = [
  'Все курсы',
  'Веб-разработка',
  'Мобильная разработка',
  'Разработка игр'
];
