import React from 'react';
import { Search, BookOpen, Award, Trophy } from 'lucide-react';

const OurProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Select Courses',
      description: 'Choose from our comprehensive range of digital marketing courses designed for all skill levels.',
      details: ['Browse 15+ specialized courses', 'Get personalized recommendations', 'Flexible learning paths']
    },
    {
      number: '02',
      icon: BookOpen,
      title: 'Learn Your Skill',
      description: 'Engage with interactive content, live sessions, and hands-on projects with expert mentors.',
      details: ['Live interactive classes', 'Real-world projects', '1-on-1 mentor sessions']
    },
    {
      number: '03',
      icon: Award,
      title: 'Get Certified',
      description: 'Earn industry-recognized certifications and build a strong portfolio for your career.',
      details: ['Google & Facebook certifications', 'Portfolio development', 'Skills assessment']
    },
    {
      number: '04',
      icon: Trophy,
      title: 'Create Your Success',
      description: 'Land your dream job with our placement assistance and ongoing career support.',
      details: ['Job placement assistance', 'Interview preparation', 'Career guidance']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Learning Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured 4-step journey that takes you from beginner to industry-ready digital marketing professional
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 z-0"></div>
                )}
                
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative z-10 border border-gray-100">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our structured learning program and transform your career in just 12 weeks with guaranteed placement support
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                ✓ 30-day money-back guarantee
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                ✓ Lifetime access to course materials
              </div>
              <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                ✓ 1-year career support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;