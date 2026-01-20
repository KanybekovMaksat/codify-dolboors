import { useState } from 'react';
import { ProjectCard } from '@/app/components/ProjectCard';
import { projects, courseTypes } from '@/data/projects';

export function ProjectsPage() {
  const [selectedCourse, setSelectedCourse] = useState('Все курсы');

  const filteredProjects = selectedCourse === 'Все курсы'
    ? projects
    : projects.filter(p => p.courseType === selectedCourse);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Проекты студентов
          </h1>
          <p className="text-xl text-muted-foreground">
            Все работы наших талантливых учеников
          </p>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {courseTypes.map((course) => (
              <button
                key={course}
                onClick={() => setSelectedCourse(course)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCourse === course
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {course}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Проекты не найдены
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
