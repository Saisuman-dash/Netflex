
import { useState } from 'react';
import { Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold gradient-text">StreamVibe</h1>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white/80 hover:text-primary-400 transition-colors">Home</a>
              <a href="#" className="text-white/80 hover:text-primary-400 transition-colors">Movies</a>
              <a href="#" className="text-white/80 hover:text-primary-400 transition-colors">TV Shows</a>
              <a href="#" className="text-white/80 hover:text-primary-400 transition-colors">My List</a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <Input
                  type="text"
                  placeholder="Search movies, shows..."
                  className="w-64 bg-black/50 border-white/20 text-white placeholder:text-white/60"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-white/80 hover:text-primary-400"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* User Profile */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:text-primary-400"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
