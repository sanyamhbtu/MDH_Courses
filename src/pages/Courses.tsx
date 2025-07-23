import React, { useState } from 'react';
import { Clock, Users, Star, Filter, Search, ArrowRight } from 'lucide-react';

interface CoursesProps {
  onRegisterClick: () => void;
}

const Courses: React.FC<CoursesProps> = ({ onRegisterClick }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Complete Digital Marketing Mastery',
      category: 'comprehensive',
      level: 'beginner',
      description: 'Master all aspects of digital marketing from SEO to social media, PPC to email marketing.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '12 weeks',
      students: 1250,
      rating: 4.9,
      price: '₹24,999',
      originalPrice: '₹39,999',
      modules: ['SEO & SEM', 'Social Media', 'Email Marketing', 'Analytics', 'Content Strategy', 'PPC'],
      badge: 'Most Popular'
    },
    {
      id: 2,
      title: 'Social Media Marketing Pro',
      category: 'social-media',
      level: 'intermediate',
      description: 'Become a social media expert with advanced strategies for all major platforms.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '8 weeks',
      students: 890,
      rating: 4.8,
      price: '₹16,999',
      originalPrice: '₹24,999',
      modules: ['Facebook Marketing', 'Instagram Growth', 'LinkedIn Strategy', 'Twitter Ads', 'Content Creation'],
      badge: 'Best Seller'
    },
    {
      id: 3,
      title: 'SEO & Content Strategy',
      category: 'seo',
      level: 'intermediate',
      description: 'Master search engine optimization and content marketing for organic growth.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '10 weeks',
      students: 670,
      rating: 4.9,
      price: '₹19,999',
      originalPrice: '₹29,999',
      modules: ['Technical SEO', 'Content Planning', 'Link Building', 'Local SEO', 'SEO Tools'],
      badge: 'Expert Level'
    },
    {
      id: 4,
      title: 'PPC & Google Ads Mastery',
      category: 'ppc',
      level: 'advanced',
      description: 'Learn advanced pay-per-click advertising strategies and campaign optimization.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '8 weeks',
      students: 540,
      rating: 4.8,
      price: '₹18,999',
      originalPrice: '₹27,999',
      modules: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'ROI Analysis', 'Advanced Targeting'],
      badge: 'High ROI'
    },
    {
      id: 5,
      title: 'Email Marketing & Automation',
      category: 'email',
      level: 'beginner',
      description: 'Build and automate email campaigns that convert prospects into customers.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '6 weeks',
      students: 420,
      rating: 4.7,
      price: '₹14,999',
      originalPrice: '₹21,999',
      modules: ['Email Design', 'Automation', 'Segmentation', 'A/B Testing', 'Analytics'],
      badge: 'Quick Start'
    },
    {
      id: 6,
      title: 'Analytics & Data Science',
      category: 'analytics',
      level: 'advanced',
      description: 'Dive deep into marketing analytics and data-driven decision making.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '10 weeks',
      students: 380,
      rating: 4.9,
      price: '₹22,999',
      originalPrice: '₹32,999',
      modules: ['Google Analytics', 'Data Visualization', 'Marketing Attribution', 'Predictive Analytics'],
      badge: 'Data Driven'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Courses', count: courses.length },
    { id: 'comprehensive', name: 'Complete Programs', count: courses.filter(c => c.category === 'comprehensive').length },
    { id: 'social-media', name: 'Social Media', count: courses.filter(c => c.category === 'social-media').length },
    { id: 'seo', name: 'SEO', count: courses.filter(c => c.category === 'seo').length },
    { id: 'ppc', name: 'PPC & Ads', count: courses.filter(c => c.category === 'ppc').length },
    { id: 'email', name: 'Email Marketing', count: courses.filter(c => c.category === 'email').length },
    { id: 'analytics', name: 'Analytics', count: courses.filter(c => c.category === 'analytics').length }
  ];

  const levels = [
    { id: 'beginner', name: 'Beginner', color: 'green' },
    { id: 'intermediate', name: 'Intermediate', color: 'blue' },
    { id: 'advanced', name: 'Advanced', color: 'red' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesFilter = selectedFilter === 'all' || course.category === selectedFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing courses designed by industry experts to transform your career
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {course.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  {/* Level Badge */}
                  <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                    course.level === 'beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'intermediate' ? 'bg-blue-100 text-blue-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {levels.find(l => l.id === course.level)?.name}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {course.modules.slice(0, 3).map((module, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {module}
                        </span>
                      ))}
                      {course.modules.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                          +{course.modules.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                      Save {Math.round((1 - parseInt(course.price.replace(/[₹,]/g, '')) / parseInt(course.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                    </div>
                  </div>

                  <button
                    onClick={onRegisterClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No courses found matching your criteria.</div>
              <button
                onClick={() => {
                  setSelectedFilter('all');
                  setSearchTerm('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join thousands of successful students who have transformed their careers with our comprehensive courses
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRegisterClick}
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              Start Learning Today
            </button>
            <span className="text-orange-100">or</span>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;