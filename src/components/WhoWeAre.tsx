import React from 'react';
import { Users, Target, Heart, Zap } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                MDH X Let's Capture represents a powerful collaboration between two industry leaders, 
                combining strategic marketing expertise with creative excellence to deliver world-class digital marketing education.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to democratize digital marketing education and make it accessible to everyone, 
                regardless of their background or experience level. We believe in practical, hands-on learning 
                that prepares our students for real-world challenges.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2025</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
                <div className="text-sm text-gray-600">Expert Mentors</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-sm text-gray-600">Hiring Partners</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Course Specializations</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Users className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-lg font-bold">Community</div>
                  <div className="text-sm opacity-90">Building stronger connections</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Target className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-lg font-bold">Focus</div>
                  <div className="text-sm opacity-90">Goal-oriented learning</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Heart className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-lg font-bold">Passion</div>
                  <div className="text-sm opacity-90">Love for teaching</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Zap className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-lg font-bold">Innovation</div>
                  <div className="text-sm opacity-90">Cutting-edge methods</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
              #1
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-xl">
              ✓
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower individuals with practical digital marketing skills and create a community of successful 
              professionals who can drive business growth in the digital age. We strive to bridge the gap between 
              industry requirements and academic learning through hands-on, project-based education.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become India's leading digital marketing education platform, known for producing industry-ready 
              professionals who shape the future of digital marketing. We envision a world where quality education 
              is accessible to all, and every student achieves their career aspirations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;