import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Star, Users, Award, TrendingUp, BookOpen, Lightbulb } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const dynamicTexts = [
    "Master Digital Marketing",
    "Launch Your Career",
    "Transform Your Future",
    "Become an Expert"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Brand Elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-orange-400" />
            <span className="text-white font-semibold text-sm">MDH</span>
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-2000">
        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/20">
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-6 w-6 text-yellow-400" />
            <span className="text-white font-semibold text-sm">Let's Capture</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-3000">
        <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20">
          <Award className="h-6 w-6 text-green-400" />
        </div>
      </div>
      <div className="absolute top-60 right-10 animate-bounce delay-4000">
        <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20">
          <Users className="h-6 w-6 text-blue-400" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Brand Badge */}
          {/* <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-orange-400" />
              <span className="text-white font-bold">MDH</span>
            </div>
            <span className="text-orange-400 font-bold">X</span>
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-bold">Let's Capture</span>
            </div>
          </div> */}

          {/* Dynamic Main Heading */}
          <div className="mb-6 mt-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="inline-block transition-all duration-500 transform">
                {dynamicTexts[currentText]}
              </span>
              <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent mt-2">
                with Industry Experts
              </span>
            </h1>
          </div>

          {/* Enhanced Subtitle */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
            Join India's premier digital marketing platform where 
            <span className="text-orange-300 font-semibold"> MDH's strategic expertise </span>
            meets 
            <span className="text-yellow-300 font-semibold"> Let's Capture's creative excellence</span>. 
            Transform your career with hands-on projects, expert mentorship, and guaranteed placement support.
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                <span className="text-2xl font-bold text-white">5000+</span>
              </div>
              <span className="text-blue-200 text-sm">Students Trained</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="bg-yellow-500 w-3 h-3 rounded-full animate-pulse"></div>
                <span className="text-2xl font-bold text-white">95%</span>
              </div>
              <span className="text-blue-200 text-sm">Placement Rate</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="bg-blue-500 w-3 h-3 rounded-full animate-pulse"></div>
                <span className="text-2xl font-bold text-white">200+</span>
              </div>
              <span className="text-blue-200 text-sm">Hiring Partners</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="bg-orange-500 w-3 h-3 rounded-full animate-pulse"></div>
                <span className="text-2xl font-bold text-white">4.9</span>
              </div>
              <span className="text-blue-200 text-sm">Student Rating</span>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={onRegisterClick}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 transform hover:scale-105 flex items-center space-x-3"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center space-x-3 text-white border-2 border-white/40 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span>Watch Success Stories</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <span className="text-blue-200 text-sm">Trusted by students from</span>
            <div className="flex items-center space-x-6">
              {['IIT', 'NIT', 'IIM', 'Top Universities'].map((institution, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></div>
                  <span className="text-white font-medium text-sm">{institution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;