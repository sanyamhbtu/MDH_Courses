import React from 'react';
import { Users, Award, BookOpen, Headphones, TrendingUp, Shield } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Learn from industry professionals with 10+ years of experience in top companies like Google, Facebook, and Amazon.'
    },
    {
      icon: BookOpen,
      title: 'Updated Curriculum',
      description: 'Industry-relevant curriculum updated quarterly to match the latest trends and technologies in digital marketing.'
    },
    {
      icon: TrendingUp,
      title: 'Hands-on Projects',
      description: 'Work on real campaigns and build a portfolio with live projects from our partner companies.'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Get industry-recognized certificates from Google, Facebook, and our platform to boost your career prospects.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock doubt resolution and career guidance from our dedicated support team.'
    },
    {
      icon: Shield,
      title: 'Placement Guarantee',
      description: '100% placement assistance with our network of 200+ hiring partners and guaranteed job support.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MDH X Let's Capture</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine the best of both worlds - MDH's marketing expertise and Let's Capture's creative excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of successful students who have already transformed their careers with our proven methodology
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">5000+</div>
                <div className="text-orange-100">Students Trained</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-orange-100">Placement Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-orange-100">Student Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;