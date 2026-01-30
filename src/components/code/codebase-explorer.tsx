import { useState } from 'react';
import { FileTreeItem, FileNode } from './file-tree-item';
import { CodeViewer } from './code-viewer';
import { Code2, FileText, Sparkles } from 'lucide-react';

// Пример структуры проекта
const sampleProject: FileNode[] = [
  {
    id: '1',
    name: 'game_project',
    type: 'folder',
    children: [
      {
        id: '2',
        name: 'main.py',
        type: 'file',
        language: 'python',
        explanation:
          'Главный файл игры. Здесь создаётся игровое окно, загружаются персонажи и запускается основной игровой цикл. Это как режиссёр, который управляет всей игрой!',
        content: `import pygame
import sys

# Инициализация Pygame
pygame.init()

# Настройки экрана
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Моя первая игра!")

# Цвета
WHITE = (255, 255, 255)
BLUE = (50, 150, 255)

# Главный игровой цикл
running = True
clock = pygame.time.Clock()

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    # Отрисовка
    screen.fill(WHITE)
    pygame.draw.circle(screen, BLUE, (400, 300), 50)
    
    pygame.display.flip()
    clock.tick(60)

pygame.quit()
sys.exit()`,
      },
      {
        id: '3',
        name: 'player.py',
        type: 'file',
        language: 'python',
        explanation:
          'Файл с описанием игрока. Здесь задаются все характеристики персонажа: его положение на экране, скорость движения и внешний вид. Каждый раз, когда игрок двигается, этот код работает!',
        content: `class Player:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.speed = 5
        self.width = 50
        self.height = 50
    
    def move(self, dx, dy):
        """Двигает игрока на заданное расстояние"""
        self.x += dx * self.speed
        self.y += dy * self.speed
    
    def draw(self, screen):
        """Рисует игрока на экране"""
        pygame.draw.rect(screen, (255, 0, 0), 
                        (self.x, self.y, self.width, self.height))`,
      },
    ],
  },
  {
    id: '4',
    name: 'website',
    type: 'folder',
    children: [
      {
        id: '5',
        name: 'index.html',
        type: 'file',
        language: 'html',
        explanation:
          'Структура веб-страницы. HTML — это как скелет вашего сайта. Здесь описывается, что будет на странице: заголовки, текст, кнопки и картинки. Браузер читает этот файл и показывает всё на экране.',
        content: `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мой первый сайт</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Добро пожаловать!</h1>
        <nav>
            <a href="#home">Главная</a>
            <a href="#about">О нас</a>
            <a href="#contact">Контакты</a>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h2>Привет, мир!</h2>
            <p>Это мой первый веб-сайт, сделанный с нуля.</p>
            <button onclick="showMessage()">Нажми меня!</button>
        </section>
    </main>
    
    <script src="script.js"></script>
</body>
</html>`,
      },
      {
        id: '6',
        name: 'style.css',
        type: 'file',
        language: 'css',
        explanation:
          'Стили для сайта. CSS отвечает за внешний вид: цвета, размеры, отступы и красивое оформление. Без CSS сайт был бы чёрно-белым и скучным!',
        content: `body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

header {
    padding: 20px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
}

h1 {
    font-size: 2.5em;
    margin: 0;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background 0.3s;
}

nav a:hover {
    background: rgba(255, 255, 255, 0.2);
}

main {
    padding: 40px;
    text-align: center;
}

button {
    background: white;
    color: #667eea;
    border: none;
    padding: 15px 30px;
    font-size: 1.1em;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.2s;
}

button:hover {
    transform: scale(1.1);
}`,
      },
      {
        id: '7',
        name: 'script.js',
        type: 'file',
        language: 'javascript',
        explanation:
          'Интерактивность сайта. JavaScript делает сайт живым! Он реагирует на клики, показывает сообщения, анимирует элементы. Это мозг вашего сайта, который отвечает на действия пользователя.',
        content: `function showMessage() {
    alert('Привет! Рад, что ты нажал на кнопку! 👋');
}

// Анимация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('h1');
    header.style.opacity = '0';
    
    setTimeout(() => {
        header.style.transition = 'opacity 1s';
        header.style.opacity = '1';
    }, 100);
});

// Интерактивная анимация при наведении на ссылки
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});`,
      },
    ],
  },
  {
    id: '8',
    name: 'scratch_game.sb3',
    type: 'file',
    language: 'scratch',
    explanation:
      'Игра в Scratch. Это визуальное программирование — вместо текста используются блоки-команды, которые соединяются как пазл. Идеально для начинающих программистов!',
    content: JSON.stringify([
      {
        type: 'event',
        category: 'events',
        text: 'Когда нажат зелёный флаг',
        nested: [
          {
            type: 'motion',
            category: 'motion',
            text: 'перейти в x: 0 y: 0',
          },
          {
            type: 'control',
            category: 'control',
            text: 'повторять всегда',
            nested: [
              {
                type: 'motion',
                category: 'motion',
                text: 'идти 10 шагов',
              },
              {
                type: 'control',
                category: 'control',
                text: 'если касается края? то',
                nested: [
                  {
                    type: 'motion',
                    category: 'motion',
                    text: 'отскочить от края',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'event',
        category: 'events',
        text: 'Когда нажата клавиша пробел',
        nested: [
          {
            type: 'looks',
            category: 'looks',
            text: 'сказать "Привет!" на 2 секунд',
          },
          {
            type: 'sound',
            category: 'sound',
            text: 'играть звук "мяу"',
          },
        ],
      },
    ]),
  },
  {
    id: '9',
    name: 'roblox_script.lua',
    type: 'file',
    language: 'lua',
    explanation:
      'Скрипт для Roblox. Lua — это язык программирования для создания игр в Roblox. Этот код управляет объектами в игре, создаёт интерактивность и делает игровой мир живым!',
    content: `-- Скрипт двери в Roblox
local door = script.Parent
local isOpen = false

-- Функция открытия/закрытия двери
local function toggleDoor()
    if isOpen then
        -- Закрываем дверь
        door.CFrame = door.CFrame * CFrame.Angles(0, -math.rad(90), 0)
        isOpen = false
        print("Дверь закрыта")
    else
        -- Открываем дверь
        door.CFrame = door.CFrame * CFrame.Angles(0, math.rad(90), 0)
        isOpen = true
        print("Дверь открыта")
    end
end

-- Обработчик клика по двери
door.ClickDetector.MouseClick:Connect(function(player)
    print(player.Name .. " нажал на дверь!")
    toggleDoor()
end)`,
  },
];

export function CodebaseExplorer() {
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);

  const handleFileSelect = (node: FileNode) => {
    if (node.type === 'file') {
      setSelectedFile(node);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 p-0 overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
              <div className="flex items-center gap-2 text-white">
                <FileText className="w-5 h-5" />
                <h2 className="font-semibold text-lg">Файлы проекта</h2>
              </div>
            </div>
            <div className="h-[600px]">
              <div className="p-2">
                {sampleProject.map((node) => (
                  <FileTreeItem
                    key={node.id}
                    node={node}
                    level={0}
                    onFileSelect={handleFileSelect}
                    selectedId={selectedFile?.id || null}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 p-6 shadow-lg">
            {selectedFile ? (
              <div className="h-[600px]  pr-4">
                <CodeViewer file={selectedFile} />
              </div>
            ) : (
              <div className="h-[600px] flex flex-col items-center justify-center text-center p-8">
                <Code2 className="w-20 h-20 text-gray-300 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">Выберите файл для просмотра</h3>
                <p className="text-gray-500 max-w-md">
                  Нажмите на любой файл в списке слева, чтобы увидеть его содержимое и узнать, что он делает
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-green-900 mb-2">Что показывает этот модуль?</h3>
              <p className="text-green-800 leading-relaxed">
                Здесь вы можете увидеть весь код, который написал ваш ребёнок. Каждый файл — это часть проекта: игры,
                сайта или программы. Цветные блоки показывают разные языки программирования. Объяснения помогут понять,
                зачем нужен каждый файл и что он делает. Это как смотреть на чертёж дома — видно всю структуру и
                назначение каждой комнаты!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
