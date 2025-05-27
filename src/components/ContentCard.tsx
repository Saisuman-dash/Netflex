
import { useState } from 'react';
import { Play, Plus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentCardProps {
  title: string;
  image: string;
  rating?: string;
  year?: string;
  genre?: string;
  duration?: string;
}

const ContentCard = ({ title, image, rating, year, genre, duration }: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 hover:z-30">
        {/* Image */}
        <div className="aspect-[16/9] relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Hover Content */}
        {isHovered && (
          <div className="absolute inset-0 flex flex-col justify-end p-4 animate-fade-in">
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              
              <div className="flex items-center space-x-2 mb-3 text-sm">
                {rating && (
                  <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded border border-primary-500/30">
                    {rating}
                  </span>
                )}
                {year && <span className="text-white/80">{year}</span>}
                {duration && <span className="text-white/80">{duration}</span>}
              </div>

              {genre && (
                <p className="text-white/70 text-sm mb-3">{genre}</p>
              )}

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  className="bg-primary-500 hover:bg-primary-600 text-white p-2"
                >
                  <Play className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-white/10 p-2"
                >
                  <Plus className="h-4 w-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-white/10 p-2"
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Glassmorphism effect when hovered */}
        <div className={`absolute inset-0 glass-card transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>
    </div>
  );
};

export default ContentCard;
