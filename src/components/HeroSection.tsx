
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Plus } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroContent = [
    {
      title: "Stranger Things",
      description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1920&h=1080&fit=crop",
      rating: "TV-14",
      year: "2023"
    },
    {
      title: "The Crown",
      description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop",
      rating: "TV-MA",
      year: "2023"
    },
    {
      title: "Breaking Bad",
      description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1920&h=1080&fit=crop",
      rating: "TV-MA",
      year: "2022"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroContent.length]);

  const current = heroContent[currentSlide];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full border border-primary-500/30">
                {current.rating}
              </span>
              <span className="text-white/80">{current.year}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {current.title}
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              {current.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 text-lg font-semibold hover-scale"
              >
                <Play className="mr-2 h-5 w-5" />
                Play Now
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold hover-scale"
              >
                <Plus className="mr-2 h-5 w-5" />
                My List
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary-500 scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
