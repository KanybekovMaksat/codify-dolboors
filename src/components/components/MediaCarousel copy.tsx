import { useState } from "react";
import Slider from "react-slick";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MediaItem {
  type: "video" | "image";
  url: string;
  thumbnail?: string;
  title: string;
}

interface MediaCarouselProps {
  items: MediaItem[];
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

export function MediaCarousel({ items }: MediaCarouselProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Проект в действии
          </h2>
          <p className="text-xl text-gray-600">
            Смотрите, как студент рассказывает о своей работе
          </p>
        </div>

        <div className="carousel-container">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className="px-2">
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl aspect-video">
                  {item.type === "video" && activeVideo !== item.url ? (
                    <div
                      className="relative cursor-pointer group"
                      onClick={() => setActiveVideo(item.url)}
                    >
                      <img
                        src={item.thumbnail || item.url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="size-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="size-10 text-blue-600 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                        <p className="text-white text-lg font-semibold">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  ) : item.type === "video" && activeVideo === item.url ? (
                    <iframe
                      src={item.url}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="relative">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                        <p className="text-white text-lg font-semibold">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .carousel-container .slick-dots {
          bottom: -50px;
        }
        .carousel-container .slick-dots li button:before {
          font-size: 12px;
          color: #6b7280;
        }
        .carousel-container .slick-dots li.slick-active button:before {
          color: #2563eb;
        }
      `}</style>
    </section>
  );
}
