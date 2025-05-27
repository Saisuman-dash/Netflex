
import { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import UserMenu from './UserMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
              Netflex
            </Link>
            
            {/* Navigation Links */}
            {user && (
              <div className="hidden md:flex items-center space-x-6">
                <Link to="/" className="text-white/80 hover:text-primary-400 transition-colors">Home</Link>
                <Link to="/movies" className="text-white/80 hover:text-primary-400 transition-colors">Movies</Link>
                <Link to="/tv-shows" className="text-white/80 hover:text-primary-400 transition-colors">TV Shows</Link>
                <Link to="/my-list" className="text-white/80 hover:text-primary-400 transition-colors">My List</Link>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
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

                {/* Add to List */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-primary-400"
                >
                  <Plus className="h-5 w-5" />
                </Button>

                {/* User Menu */}
                <UserMenu />
              </>
            ) : (
              <Link to="/auth">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
