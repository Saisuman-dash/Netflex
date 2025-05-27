
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ContentCarousel from '@/components/ContentCarousel';

const Index = () => {
  // Sample data for different content categories
  const trendingContent = [
    {
      id: '1',
      title: 'The Witcher',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2023',
      genre: 'Fantasy, Drama',
      duration: '58m'
    },
    {
      id: '2',
      title: 'House of Cards',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2023',
      genre: 'Political Thriller',
      duration: '51m'
    },
    {
      id: '3',
      title: 'Ozark',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2022',
      genre: 'Crime Drama',
      duration: '60m'
    },
    {
      id: '4',
      title: 'Black Mirror',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2023',
      genre: 'Sci-Fi Thriller',
      duration: '45m'
    },
    {
      id: '5',
      title: 'The Queen\'s Gambit',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=225&fit=crop',
      rating: 'TV-14',
      year: '2023',
      genre: 'Drama',
      duration: '56m'
    },
    {
      id: '6',
      title: 'Mindhunter',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2022',
      genre: 'Crime Thriller',
      duration: '54m'
    },
    {
      id: '7',
      title: 'Narcos',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2023',
      genre: 'Crime Biography',
      duration: '49m'
    }
  ];

  const newReleases = [
    {
      id: '8',
      title: 'Wednesday',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=225&fit=crop',
      rating: 'TV-14',
      year: '2024',
      genre: 'Comedy Horror',
      duration: '50m'
    },
    {
      id: '9',
      title: 'The Diplomat',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2024',
      genre: 'Political Drama',
      duration: '48m'
    },
    {
      id: '10',
      title: 'Ginny & Georgia',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop',
      rating: 'TV-14',
      year: '2024',
      genre: 'Comedy Drama',
      duration: '55m'
    },
    {
      id: '11',
      title: 'The Night Agent',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2024',
      genre: 'Action Thriller',
      duration: '50m'
    },
    {
      id: '12',
      title: 'Florida Man',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2024',
      genre: 'Comedy Crime',
      duration: '52m'
    },
    {
      id: '13',
      title: 'Heartstopper',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=225&fit=crop',
      rating: 'TV-14',
      year: '2024',
      genre: 'Romance Drama',
      duration: '30m'
    },
    {
      id: '14',
      title: 'The Glory',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2024',
      genre: 'Revenge Drama',
      duration: '54m'
    }
  ];

  const topPicks = [
    {
      id: '15',
      title: 'Money Heist',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2023',
      genre: 'Crime Action',
      duration: '70m'
    },
    {
      id: '16',
      title: 'Dark',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2023',
      genre: 'Sci-Fi Mystery',
      duration: '60m'
    },
    {
      id: '17',
      title: 'Elite',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2023',
      genre: 'Teen Drama',
      duration: '50m'
    },
    {
      id: '18',
      title: 'Bridgerton',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2023',
      genre: 'Period Romance',
      duration: '62m'
    },
    {
      id: '19',
      title: 'Squid Game',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=225&fit=crop',
      rating: 'TV-MA',
      year: '2023',
      genre: 'Survival Drama',
      duration: '56m'
    },
    {
      id: '20',
      title: 'Emily in Paris',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=225&fit=crop',
      rating: 'TV-14',
      year: '2023',
      genre: 'Romantic Comedy',
      duration: '30m'
    },
    {
      id: '21',
      title: 'The Umbrella Academy',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=225&fit=crop',
      rating: 'TV-14',
      year: '2023',
      genre: 'Superhero Drama',
      duration: '50m'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      
      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        <ContentCarousel title="Trending Now" items={trendingContent} />
        <ContentCarousel title="New Releases" items={newReleases} />
        <ContentCarousel title="Top Picks for You" items={topPicks} />
      </div>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">StreamVibe</h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Experience premium streaming with our vast collection of movies and TV shows. 
              Discover your next favorite story with our intelligent recommendations.
            </p>
            <div className="mt-8 flex justify-center space-x-8 text-white/60">
              <a href="#" className="hover:text-primary-400 transition-colors">About</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
