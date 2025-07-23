import React from 'react';
import { Linkedin, Twitter, Globe, Award, BookOpen, Users } from 'lucide-react';

const Mentors: React.FC = () => {
  const mentors = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Senior Digital Marketing Strategist',
      company: 'Ex-Google',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '12+ years',
      specialization: ['SEO Strategy', 'Performance Marketing', 'Analytics'],
      bio: 'Former Google Marketing Lead with expertise in scaling digital campaigns for Fortune 500 companies. Specializes in data-driven marketing strategies.',
      achievements: ['Led $50M+ ad campaigns', 'Google Certified Trainer', '500+ students mentored'],
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Sarah Williams',
      role: 'Creative Director & Brand Strategist',
      company: 'Ex-Facebook',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '10+ years',
      specialization: ['Social Media Strategy', 'Content Creation', 'Brand Building'],
      bio: 'Award-winning creative director who has built viral campaigns for major brands. Expert in social media storytelling and community building.',
      achievements: ['5 Cannes Lions Awards', 'Built 10M+ follower communities', 'Featured in Marketing Week'],
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Amit Sharma',
      role: 'PPC & Conversion Optimization Expert',
      company: 'Ex-Amazon',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '8+ years',
      specialization: ['Google Ads', 'Facebook Ads', 'Conversion Rate Optimization'],
      bio: 'Amazon marketing veteran specializing in PPC campaigns and conversion optimization. Known for achieving 300%+ ROI improvements.',
      achievements: ['Managed $20M+ ad spend', 'Average 250% ROI increase', 'Certified in 8 platforms'],
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Priya Patel',
      role: 'Content Marketing & SEO Specialist',
      company: 'Ex-HubSpot',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '9+ years',
      specialization: ['Content Strategy', 'SEO', 'Inbound Marketing'],
      bio: 'Former HubSpot content strategist who has built content engines that generated millions in revenue. Expert in SEO and content marketing.',
      achievements: ['Generated 50M+ organic traffic', 'Published 3 marketing books', 'Top 50 Content Marketers'],
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Michael Chen',
      role: 'Email Marketing & Automation Expert',
      company: 'Ex-Mailchimp',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '7+ years',
      specialization: ['Email Marketing', 'Marketing Automation', 'Customer Journey'],
      bio: 'Email marketing specialist who has designed automation workflows generating millions in revenue. Expert in customer lifecycle marketing.',
      achievements: ['Built $10M+ email revenue', 'Industry-leading open rates', 'Automation specialist'],
      linkedin: '#',
      twitter: '#',
      website: '#'
    },
    {
      name: 'Neha Gupta',
      role: 'Analytics & Data Science Expert',
      company: 'Ex-Adobe',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      experience: '11+ years',
      specialization: ['Marketing Analytics', 'Data Science', 'Attribution Modeling'],
      bio: 'Data science expert who transforms marketing data into actionable insights. Specializes in advanced analytics and predictive modeling.',
      achievements: ['PhD in Data Science', 'Built ML models for marketing', 'Published researcher'],
      linkedin: '#',
      twitter: '#',
      website: '#'
    }
  ];

  const stats = [
    { label: 'Expert Mentors', value: '50+', icon: Users },
    { label: 'Years Combined Experience', value: '500+', icon: Award },
    { label: 'Students Mentored', value: '5000+', icon: BookOpen },
    { label: 'Industry Certifications', value: '200+', icon: Award }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Expert Mentors</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Learn from industry veterans who have built successful careers at top companies and are passionate about sharing their knowledge
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Profile Image */}
                <div className="relative">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                    <span className="text-sm font-medium text-gray-700">{mentor.experience}</span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                  <div className="text-blue-600 font-medium mb-1">{mentor.role}</div>
                  <div className="text-gray-500 text-sm mb-4">{mentor.company}</div>

                  {/* Bio */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{mentor.bio}</p>

                  {/* Specializations */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Specializations:</div>
                    <div className="flex flex-wrap gap-2">
                      {mentor.specialization.map((spec, specIndex) => (
                        <span
                          key={specIndex}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-700 mb-2">Key Achievements:</div>
                    <ul className="space-y-1">
                      {mentor.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <a
                      href={mentor.linkedin}
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={mentor.twitter}
                      className="p-2 bg-sky-100 text-sky-600 rounded-lg hover:bg-sky-200 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={mentor.website}
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mentorship Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalized guidance that accelerates your learning and career growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1-on-1 Sessions</h3>
              <p className="text-gray-600 leading-relaxed">
                Personal mentoring sessions tailored to your specific goals and challenges with direct feedback and guidance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Project Reviews</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your work reviewed by industry experts with actionable feedback to improve your skills and portfolio.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic career advice, interview preparation, and networking opportunities to accelerate your professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Learn from the Best</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Get personalized mentorship from industry experts and accelerate your digital marketing career
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors shadow-lg">
              Book a Mentor Session
            </button>
            <span className="text-purple-100">or</span>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              View All Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentors;