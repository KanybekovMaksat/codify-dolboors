import MediaCarousel from '../components/components/MediaCarousel';
import AboutProject from '../components/components/AboutProject';
import AuthorCard from '../components/components/AuthorCard';
import ScreenshotsGallery from '../components/components/ScreenshotsGallery1';
import ProjectLinkCTA from '../components/components/ProjectLinkCTA';
import ProjectStructure from '../components/components/ProjectStructure';
import SkillsSection from '../components/components/SkillsSection';
import FinalCTA from '../components/components/FinalCTA';
import { mockProject } from '../data/mockProject';
import HeroSection from '../components/components/HeroSection';

export default function ProjectDetails() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection  project={mockProject} />
      {/* <AboutProject project={mockProject} /> */}
      <MediaCarousel project={mockProject} />
      <AuthorCard project={mockProject} />
      <ProjectLinkCTA project={mockProject} />
      <ProjectStructure project={mockProject} />
      <SkillsSection project={mockProject} />
      <FinalCTA project={mockProject} />
    </div>
  );
}
