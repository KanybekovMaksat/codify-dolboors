import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Header } from '@/app/components/Header';
import { HomePage } from '@/app/components/HomePage';
import { ProjectsPage } from '@/app/components/ProjectsPage';
import { ProjectDetailPage } from '@/app/components/ProjectDetailPage';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailPage />} />
            </Routes>
          </main>
          
          <footer className="border-t border-border py-8 px-4">
            <div className="container mx-auto text-center text-muted-foreground">
              <p>© 2025 Codify. Все права защищены.</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
