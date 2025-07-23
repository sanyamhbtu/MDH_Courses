import React from 'react';
import { Clock, Users, Star, Award, ArrowRight } from 'lucide-react';

interface FeaturedCoursesProps {
  onRegisterClick: () => void;
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ onRegisterClick }) => {
  const courses = [
    {
      title: 'Digital Marketing Basic to Advanced',
      description: 'Master digital marketing from scratch — SEO, social media, ads, content, analytics & more. Learn by doing with real projects and expert guidance.',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      duration: '3 Months',
      rating: 4.9,
      price: '₹12,000',
      originalPrice: '₹15,999',
      features: ['Technical SEO', 'Content Planning', 'Link Building', 'Local SEO'],
      badge: 'Expert Level'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master digital marketing with an industry-relevant curriculum, real-world projects, expert guidance, and dedicated placement support
          </p>
        </div>
    {/* //grid grid-cols-1 lg:grid-cols-3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
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
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {course.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
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

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="h-6 w-6" />
              <span className="text-lg font-semibold">Certificate & Placement Guarantee</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Complete any course and get industry-recognized certification plus guaranteed placement assistance with our 20+ hiring partners
            </p>
            <button
              onClick={onRegisterClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;