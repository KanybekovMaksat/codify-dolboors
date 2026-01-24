import { useState } from 'react';
import { Monitor, Smartphone, X, ZoomIn } from 'lucide-react';
import { Project } from '../data/mockProject';

interface ScreenshotsGalleryProps {
  project: Project;
}

export default function ScreenshotsGallery({ project }: ScreenshotsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'mobile':
        return <Smartphone className="w-4 h-4" />;
      case 'desktop':
        return <Monitor className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Галерея скриншотов
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Детальный взгляд на каждую страницу приложения
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={screenshot.url}
                  alt={screenshot.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-white">
                  <p className="font-semibold mb-1">{screenshot.title}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    {getDeviceIcon(screenshot.type)}
                    <span className="capitalize">{screenshot.type}</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <ZoomIn className="w-5 h-5 text-gray-800" />
              </div>

              <div className="p-4 border-t border-gray-100">
                <p className="font-medium text-gray-900">{screenshot.title}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  {getDeviceIcon(screenshot.type)}
                  <span className="capitalize">{screenshot.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-w-6xl w-full">
              <img
                src={project.screenshots[selectedImage].url}
                alt={project.screenshots[selectedImage].title}
                className="w-full h-auto rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="text-center mt-6 text-white">
                <p className="text-xl font-semibold mb-2">
                  {project.screenshots[selectedImage].title}
                </p>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  {getDeviceIcon(project.screenshots[selectedImage].type)}
                  <span className="capitalize">
                    {project.screenshots[selectedImage].type}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
