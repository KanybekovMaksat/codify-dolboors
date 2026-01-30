import { Target, Users, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/mockProject';

interface AboutProjectProps {
  project: Project;
}

export default function AboutProject({ project }: AboutProjectProps) {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            О проекте
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Понятное описание проекта простыми словами
          </p>
        </div>
      </div>
    </section>
  );
}
