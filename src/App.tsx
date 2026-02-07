import { useState } from 'react';
import { Home } from 'lucide-react';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';
import { ThemeToggle } from './components/ThemeToggle';
import { projects } from './data/projects';

type View = 'home' | 'project';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('project');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProjectId(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      {/* <nav className="navbar">
        <button className="nav-home" onClick={handleBackToHome}>
          <Home size={20} />
          <span>IT Академия</span>
        </button>
        <ThemeToggle />
      </nav> */}

      <div className="main-content">
        {currentView === 'home' && (
          <HomePage projects={projects} onProjectClick={handleProjectClick} />
        )}
        {currentView === 'project' && selectedProject && (
          <ProjectPage project={selectedProject} onBack={handleBackToHome} />
        )}
      </div>
    </div>
  );
}

export default App;
