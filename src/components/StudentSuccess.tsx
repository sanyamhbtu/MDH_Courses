import React from 'react';
import { Star, MapPin, Briefcase } from 'lucide-react';

const StudentSuccess: React.FC = () => {
 const students = [
  {
    name: 'Manoj Singh',
    role: 'Digital Marketing Executive',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    story: 'Made a successful career switch from IT to marketing with a 40% salary hike.',
    rating: 5,
    course: 'Complete Digital Marketing'
  },
  {
    name: 'Aakash Kushwaha',
    role: 'Digital Marketing Executive',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    story: 'Started with no marketing background and quickly rose to lead major SEO projects.',
    rating: 5,
    course: 'Complete Digital Marketing'
  },
  {
    name: 'Harsh Kushwaha',
    role: 'SEO Executive',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    story: 'Transformed her passion into a profession, managing campaigns that reach millions.',
    rating: 5,
    course: 'SEO & Content Strategy'
  },
  {
    name: 'Rahul Yadav',
    role: 'Digital Marketing Executive',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    story: 'Improved campaign performance by 300% within just 6 months of training.',
    rating: 5,
    course: 'Complete Digital Marketing'
  }
];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories That Inspire</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our alumni who have transformed their careers and are now working with top companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                  <div className="flex items-center space-x-1">
                    {[...Array(student.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {student.course}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{student.name}</h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">{student.story}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join 100+ Successful Students</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-lg">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-green-600">95%</span>
                <span className="text-gray-700">Placement Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-blue-600">4.9</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-orange-600">50%</span>
                <span className="text-gray-700">Avg. Salary Hike</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;