import React from 'react';
import { Users, Target, Award, Heart, Lightbulb, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We are passionate about delivering the highest quality education and seeing our students succeed.'
    },
    {
      icon: Users,
      title: 'Student-Centric Approach',
      description: 'Every decision we make is focused on providing the best learning experience for our students.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate our teaching methods and curriculum to stay ahead of industry trends.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'We prepare our students for the global digital marketing landscape with international best practices.'
    }
  ];

  const team = [
    {
      name: 'Dr. Rajesh Mehta',
      role: 'Co-Founder & CEO',
      company: 'MDH',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: '15+ years in digital marketing strategy and business development.',
      linkedin: '#'
    },
    {
      name: 'Sarah Williams',
      role: 'Co-Founder & Creative Director',
      company: "Let's Capture",
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Award-winning creative director with expertise in brand storytelling.',
      linkedin: '#'
    },
    {
      name: 'Amit Sharma',
      role: 'Head of Curriculum',
      company: 'MDH X LC',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former Google marketing lead with deep expertise in performance marketing.',
      linkedin: '#'
    },
    {
      name: 'Priya Patel',
      role: 'VP Student Success',
      company: 'MDH X LC',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Dedicated to ensuring every student achieves their career goals.',
      linkedin: '#'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About MDH X Let's Capture</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            A powerful collaboration between two industry leaders, bringing together strategic marketing expertise 
            and creative excellence to revolutionize digital marketing education in India.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                 Founded in 2025, MDH X Let's Capture was born from a shared mission — to deliver industry-relevant digital marketing education through creativity and real-world expertise.
                </p>
                <p>
                  MDH, a specialized digital marketing training company, brings deep-rooted knowledge of market trends, strategy, and performance-driven campaigns. Let's Capture, a creative production house, contributes its strength in content creation, branding, and storytelling.
                </p>
                <p>
                  Together, we’ve crafted a hands-on, practical learning platform designed to empower learners with both technical skills and creative confidence.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Our team working together"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">2025</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize digital marketing education by providing world-class training that is accessible, 
                practical, and industry-relevant. We empower individuals with the skills and confidence needed 
                to excel in the digital marketing landscape and build successful careers.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become India's most trusted and comprehensive digital marketing education platform, 
                known for producing industry-ready professionals who drive innovation and growth in the 
                digital economy. We envision a future where quality education creates equal opportunities for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-orange-600 font-medium mb-1">{member.role}</div>
                  <div className="text-gray-500 text-sm mb-3">{member.company}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Hiring Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-blue-100">Expert Mentors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;