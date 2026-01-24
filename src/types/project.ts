export interface Project {
  id: string;
  title: string;
  studentName: string;
  studentAge: number;
  course: 'HTML/CSS' | 'JavaScript' | 'Frontend' | 'Python';
  format: 'Сайт' | 'Игра' | 'Приложение';
  level: 'Начальный' | 'Средний' | 'Продвинутый';
  description: string;
  technologies: string[];
  thumbnail: string;
  date: string;
  popularity: number;
}
