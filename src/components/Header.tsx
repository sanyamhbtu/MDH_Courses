import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import letscapture from '../../assets/letscapturelogo.png'

interface HeaderProps {
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo Section */}
          <Link to="/" className="flex items-center space-x-2 group">
            {/* MDH */}
            <div className="flex items-center space-x-1">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  isScrolled
                    ? 'border-blue-600'
                    : 'border-orange-400 bg-white/10 backdrop-blur-sm'
                } group-hover:scale-105`}
              >
                <img
                  src="/assets/mdh-logo.png"
                  alt="MDH"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className={`text-base sm:text-lg font-bold ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                } transition-colors`}
              >
                MDH
              </span>
            </div>

            {/* X Separator */}
            <div
              className={`text-lg sm:text-xl font-bold transition-transform duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-yellow-400'
              } group-hover:scale-125`}
            >
              X
            </div>

            {/* Let's Capture */}
            <div className="flex items-center space-x-1">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  isScrolled
                    ? 'border-orange-600'
                    : 'border-yellow-400 bg-white/10 backdrop-blur-sm'
                } group-hover:scale-105`}
              >
                <img
                  src={letscapture}
                  alt="Let's Capture"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className={`text-base sm:text-lg font-bold ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                } transition-colors`}
              >
                Let's Capture
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-orange-500 relative group ${
                  location.pathname === item.path
                    ? 'text-orange-500'
                    : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
                }`}
              >
                {item.name}
                <div
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : ''
                  }`}
                ></div>
              </Link>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onRegisterClick}
              className="hidden md:inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Register Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl mt-2 py-6 border border-gray-100 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-3 text-sm font-medium transition-all duration-200 hover:text-orange-500 hover:bg-orange-50 rounded-lg mx-2 ${
                  location.pathname === item.path
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-6">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onRegisterClick();
                }}
                className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
