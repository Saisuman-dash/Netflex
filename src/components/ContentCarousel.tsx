
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContentCard from './ContentCard';

interface ContentCarouselProps {
  title: string;
  items: Array<{
    id: string;
    title: string;
    image: string;
    rating?: string;
    year?: string;
    genre?: string;
    duration?: string;
  }>;
}

const ContentCarousel = ({ title, items }: ContentCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 6;
  const maxIndex = Math.max(0, items.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  return (
    <div className="mb-12 animate-slide-up">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        
        {/* Navigation Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className="border-white/20 text-white hover:bg-white/10 disabled:opacity-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out gap-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="px-2">
                <ContentCard
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                  year={item.year}
                  genre={item.genre}
                  duration={item.duration}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-6">
        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-500 transition-all duration-300 rounded-full"
            style={{
              width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;
