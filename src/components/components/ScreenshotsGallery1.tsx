import { useState } from "react";
import Slider from "react-slick";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";

interface Screenshot {
  url: string;
  title: string;
  description: string;
}

interface ScreenshotsGalleryProps {
  screenshots: Screenshot[];
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 size-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
    >
      <ChevronRight className="size-6 text-gray-700" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 size-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all"
    >
      <ChevronLeft className="size-6 text-gray-700" />
    </button>
  );
}

export function ScreenshotsGallery({ screenshots }: ScreenshotsGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const lightboxSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: lightboxIndex,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Галерея скриншотов
          </h2>
          <p className="text-xl text-gray-600">
            Посмотрите на все страницы проекта
          </p>
        </div>

        <div className="gallery-container">
          <Slider {...settings}>
            {screenshots.map((screenshot, index) => (
              <div key={index} className="px-3">
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={screenshot.url}
                    alt={screenshot.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="size-16 bg-white/90 rounded-full flex items-center justify-center">
                      <ZoomIn className="size-8 text-gray-900" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-semibold mb-1">
                      {screenshot.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {screenshot.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 size-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="size-6 text-white" />
          </button>

          <div className="w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <Slider {...lightboxSettings}>
              {screenshots.map((screenshot, index) => (
                <div key={index} className="px-4">
                  <div className="text-center">
                    <img
                      src={screenshot.url}
                      alt={screenshot.title}
                      className="w-full max-h-[80vh] object-contain mx-auto rounded-lg"
                    />
                    <div className="mt-6 text-white">
                      <h3 className="text-2xl font-semibold mb-2">
                        {screenshot.title}
                      </h3>
                      <p className="text-white/80">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      <style>{`
        .gallery-container .slick-dots {
          bottom: -50px;
        }
        .gallery-container .slick-dots li button:before {
          font-size: 12px;
          color: #6b7280;
        }
        .gallery-container .slick-dots li.slick-active button:before {
          color: #2563eb;
        }
      `}</style>
    </section>
  );
}
