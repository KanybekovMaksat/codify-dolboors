import ProjectDetails from './pages/ProjectDetails';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
