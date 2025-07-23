import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
  {
    name: 'Manoj Singh',
    role: 'Digital Marketing Executive',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    testimonial: 'This course gave me a strong grip on digital marketing fundamentals and campaign strategy. I now confidently handle end-to-end digital projects.',
    course: 'Complete Digital Marketing'
  },
  {
    name: 'Aakash Kushwaha',
    role: 'Digital Marketing Executive',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    testimonial: 'Perfect for anyone starting from scratch. The blend of SEO, content, and paid ads helped me build a strong foundation.',
    course: 'Complete Digital Marketing'
  },
  {
    name: 'Harsh Kushwaha',
    role: 'SEO Executive',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    testimonial: 'Focused, practical, and up-to-date. I now plan and execute SEO strategies with real impact on rankings and traffic.',
    course: 'SEO & Content Strategy'
  },
  {
    name: 'Ravi Sharma',
    role: 'PPC Executive',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    testimonial: 'The PPC training was exactly what I needed. I can now confidently run ad campaigns and analyze performance data effectively.',
    course: 'Complete Digital Marketing'
  }
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from our graduates who are now working at top companies
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-orange-200"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-orange-500 mb-4 mx-auto lg:mx-0" />
                
                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                  "{testimonials[currentSlide].testimonial}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentSlide].name}
                    </div>
                    
                    <div className="text-sm text-orange-600 font-medium mt-1">
                      {testimonials[currentSlide].course}
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mt-3 lg:mt-0 justify-center lg:justify-start">
                    {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index ? 'bg-orange-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Thumbnail Preview */}
          <div className="mt-8 flex justify-center space-x-4 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`flex-shrink-0 p-3 rounded-xl transition-all duration-200 ${
                  currentSlide === index
                    ? 'bg-orange-100 border-2 border-orange-500'
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-medium text-sm text-gray-900">{testimonial.name}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;