import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Интерактивная игра "Космические приключения"',
    description: 'Увлекательная браузерная игра с управлением космическим кораблем, сбором звезд и уклонением от астероидов.',
    url: 'https://example.com/space-game',
    course: 'Курс JST',
    media: {
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      photos: [
        'https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    author: {
      fullName: 'Асема Сагындыкова',
      age: 14,
      photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      previousSkills: ['HTML', 'CSS'],
      newSkills: ['JavaScript', 'Canvas API', 'Game Logic'],
      testimonial: 'Этот курс открыл для меня мир программирования! Я никогда не думала, что смогу создать свою собственную игру. Теперь я планирую изучать React и создавать более сложные проекты.',
    },
    code: [
      {
        language: 'html',
        filename: 'index.html',
        content: `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Космические приключения</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <canvas id="gameCanvas"></canvas>
        <div class="score">Очки: <span id="score">0</span></div>
    </div>
    <script src="game.js"></script>
</body>
</html>`,
        explanation: 'Основная HTML структура игры. Включает canvas элемент для отрисовки игры и счетчик очков.',
      },
      {
        language: 'css',
        filename: 'style.css',
        content: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: linear-gradient(to bottom, #000428, #004e92);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Arial', sans-serif;
}

.game-container {
    position: relative;
}

#gameCanvas {
    border: 2px solid #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.score {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    font-size: 24px;
    font-weight: bold;
}`,
        explanation: 'Стили для игры: космический фон с градиентом, центрирование canvas и стилизация счетчика очков.',
      },
      {
        language: 'javascript',
        filename: 'game.js',
        content: `const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

let score = 0;
let gameRunning = true;

const player = {
    x: canvas.width / 2,
    y: canvas.height - 100,
    width: 50,
    height: 50,
    speed: 5
};

const stars = [];
const asteroids = [];

function createStar() {
    stars.push({
        x: Math.random() * canvas.width,
        y: 0,
        size: 5,
        speed: 2
    });
}

function createAsteroid() {
    asteroids.push({
        x: Math.random() * canvas.width,
        y: 0,
        size: 30,
        speed: 3
    });
}

function update() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Отрисовка и обновление игровых объектов
    stars.forEach((star, index) => {
        star.y += star.speed;
        ctx.fillStyle = 'yellow';
        ctx.fillRect(star.x, star.y, star.size, star.size);

        if (star.y > canvas.height) {
            stars.splice(index, 1);
        }
    });

    // Игрок
    ctx.fillStyle = 'cyan';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(update);
}

setInterval(createStar, 1000);
setInterval(createAsteroid, 2000);
update();`,
        explanation: 'Основная логика игры: создание и движение объектов, отрисовка на canvas, система подсчета очков и обработка столкновений.',
      },
    ],
  },
  {
    id: '2',
    title: 'Портфолио веб-дизайнера',
    description: 'Современный адаптивный сайт-портфолио с анимациями, галереей работ и формой обратной связи.',
    url: 'https://example.com/portfolio',
    course: 'Web Design',
    media: {
      photos: [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
      canva: 'https://www.canva.com/design/example',
    },
    author: {
      fullName: 'Дмитрий Козлов',
      age: 16,
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      previousSkills: ['Photoshop', 'Базовый HTML'],
      newSkills: ['CSS Grid', 'Flexbox', 'Анимации', 'Responsive Design'],
      testimonial: 'Курс помог мне превратить мои дизайн-идеи в реальные веб-страницы. Я научился создавать красивые и функциональные сайты, которые отлично выглядят на любых устройствах.',
    },
    code: [
      {
        language: 'html',
        filename: 'index.html',
        content: `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Портфолио - Дмитрий Козлов</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">DK Design</div>
            <ul>
                <li><a href="#home">Главная</a></li>
                <li><a href="#works">Работы</a></li>
                <li><a href="#about">О себе</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </nav>
    </header>

    <section id="home" class="hero">
        <h1>Создаю современные веб-дизайны</h1>
        <p>Превращаю идеи в красивые интерфейсы</p>
    </section>

    <section id="works" class="gallery">
        <h2>Мои работы</h2>
        <div class="grid">
            <div class="work-item">Проект 1</div>
            <div class="work-item">Проект 2</div>
            <div class="work-item">Проект 3</div>
        </div>
    </section>
</body>
</html>`,
        explanation: 'Структура портфолио с навигацией, hero-секцией и галереей работ. Использованы семантические HTML5 теги.',
      },
      {
        language: 'css',
        filename: 'style.css',
        content: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

header {
    background: #333;
    color: white;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

nav a:hover {
    color: #4CAF50;
}

.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.gallery {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.work-item {
    height: 300px;
    background: #f0f0f0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
}

.work-item:hover {
    transform: translateY(-10px);
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2rem;
    }

    nav ul {
        gap: 1rem;
    }
}`,
        explanation: 'Современные стили с использованием CSS Grid для галереи, Flexbox для навигации, плавные анимации и адаптивный дизайн для мобильных устройств.',
      },
    ],
  },
  {
    id: '3',
    title: 'Телеграм-бот "Помощник студента"',
    description: 'Python-бот для организации расписания занятий, напоминаний о домашних заданиях и хранения учебных материалов.',
    course: 'Python Programming',
    media: {
      photos: [
        'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    author: {
      fullName: 'Бакай Бакыт',
      age: 15,
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      previousSkills: ['Базовый Python', 'Scratch'],
      newSkills: ['Telegram Bot API', 'Работа с базами данных', 'Асинхронное программирование'],
      testimonial: 'Я всегд хотел создать что-то полезное для себя и одноклассников. Благодаря курсу я не только научился работать с API, но и создал бота, которым пользуются мои друзья!',
    },
    code: [
      {
        language: 'python',
        filename: 'bot.py',
        content: `import telebot
from datetime import datetime
import json

TOKEN = 'YOUR_BOT_TOKEN'
bot = telebot.TeleBot(TOKEN)

schedule = {}
homework = {}

@bot.message_handler(commands=['start'])
def start_message(message):
    bot.send_message(
        message.chat.id,
        "Привет! Я твой помощник студента. "
        "Используй команды:\\n"
        "/add_schedule - добавить занятие\\n"
        "/show_schedule - показать расписание\\n"
        "/add_homework - добавить домашку\\n"
        "/show_homework - показать домашние задания"
    )

@bot.message_handler(commands=['add_schedule'])
def add_schedule(message):
    bot.send_message(
        message.chat.id,
        "Отправь расписание в формате:\\n"
        "День: Предмет - Время"
    )
    bot.register_next_step_handler(message, save_schedule)

def save_schedule(message):
    user_id = message.chat.id
    if user_id not in schedule:
        schedule[user_id] = []
    schedule[user_id].append(message.text)
    bot.send_message(user_id, "Расписание сохранено!")

@bot.message_handler(commands=['show_schedule'])
def show_schedule(message):
    user_id = message.chat.id
    if user_id in schedule and schedule[user_id]:
        schedule_text = "\\n".join(schedule[user_id])
        bot.send_message(user_id, f"Твое расписание:\\n{schedule_text}")
    else:
        bot.send_message(user_id, "Расписание пустое")

@bot.message_handler(commands=['add_homework'])
def add_homework(message):
    bot.send_message(
        message.chat.id,
        "Отправь домашнее задание в формате:\\n"
        "Предмет: Задание - Срок"
    )
    bot.register_next_step_handler(message, save_homework)

def save_homework(message):
    user_id = message.chat.id
    if user_id not in homework:
        homework[user_id] = []
    homework[user_id].append(message.text)
    bot.send_message(user_id, "Домашнее задание сохранено!")

@bot.message_handler(commands=['show_homework'])
def show_homework(message):
    user_id = message.chat.id
    if user_id in homework and homework[user_id]:
        hw_text = "\\n".join(homework[user_id])
        bot.send_message(user_id, f"Твои домашние задания:\\n{hw_text}")
    else:
        bot.send_message(user_id, "Домашних заданий нет")

bot.polling(none_stop=True)`,
        explanation: 'Telegram-бот на Python с использованием библиотеки pyTelegramBotAPI. Реализованы команды для добавления и просмотра расписания и домашних заданий. Данные хранятся в словарях для каждого пользователя.',
      },
    ],
  },
  {
    id: '4',
    title: 'Мобильная игра "Лабиринт"',
    description: 'Игра на Lua для платформы LÖVE с процедурной генерацией лабиринтов и системой уровней сложности.',
    course: 'Game Development',
    media: {
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      photos: [
        'https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=800',
      ],
    },
    author: {
      fullName: 'Артем Новиков',
      age: 13,
      photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      previousSkills: ['Scratch', 'Базовое программирование'],
      newSkills: ['Lua', 'LÖVE Framework', 'Алгоритмы генерации', 'Коллизии'],
      testimonial: 'Lua оказался намного проще, чем я думал! Создание игр - это так увлекательно. Я уже придумал еще несколько игр, которые хочу сделать.',
    },
    code: [
      {
        language: 'lua',
        filename: 'main.lua',
        content: `function love.load()
    love.window.setTitle("Лабиринт")
    love.window.setMode(800, 600)

    cellSize = 40
    cols = 20
    rows = 15

    player = {
        x = 1,
        y = 1,
        size = 30
    }

    finish = {
        x = cols - 2,
        y = rows - 2
    }

    maze = generateMaze(cols, rows)
    gameWon = false
end

function generateMaze(w, h)
    local maze = {}
    for y = 1, h do
        maze[y] = {}
        for x = 1, w do
            maze[y][x] = math.random() > 0.3 and 0 or 1
        end
    end
    maze[1][1] = 0
    maze[h][w] = 0
    return maze
end

function love.update(dt)
    if gameWon then return end
end

function love.keypressed(key)
    if gameWon then return end

    local newX, newY = player.x, player.y

    if key == "up" then newY = newY - 1 end
    if key == "down" then newY = newY + 1 end
    if key == "left" then newX = newX - 1 end
    if key == "right" then newX = newX + 1 end

    if newX > 0 and newX <= cols and newY > 0 and newY <= rows then
        if maze[newY][newX] == 0 then
            player.x = newX
            player.y = newY

            if player.x == finish.x and player.y == finish.y then
                gameWon = true
            end
        end
    end
end

function love.draw()
    for y = 1, rows do
        for x = 1, cols do
            if maze[y][x] == 1 then
                love.graphics.setColor(0.2, 0.2, 0.2)
            else
                love.graphics.setColor(1, 1, 1)
            end
            love.graphics.rectangle("fill",
                (x-1) * cellSize,
                (y-1) * cellSize,
                cellSize,
                cellSize
            )
        end
    end

    love.graphics.setColor(0, 1, 0)
    love.graphics.rectangle("fill",
        (finish.x - 1) * cellSize + 5,
        (finish.y - 1) * cellSize + 5,
        cellSize - 10,
        cellSize - 10
    )

    love.graphics.setColor(0, 0.5, 1)
    love.graphics.circle("fill",
        (player.x - 1) * cellSize + cellSize/2,
        (player.y - 1) * cellSize + cellSize/2,
        player.size/2
    )

    if gameWon then
        love.graphics.setColor(1, 1, 0)
        love.graphics.print("Победа! Нажми R для перезапуска", 250, 300, 0, 2, 2)
    end
end`,
        explanation: 'Игра-лабиринт на Lua с использованием LÖVE Framework. Реализована процедурная генерация лабиринта, управление игроком стрелками, проверка коллизий со стенами и система победы при достижении финиша.',
      },
    ],
  },
];
