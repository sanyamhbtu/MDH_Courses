import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hello! I have a query from your website.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Message:* ${formData.message}

Please get back to me at your earliest convenience.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/919876543210?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 87654 32109'],
      description: 'Mon-Sat 9AM-7PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@mdhcapture.com', 'admissions@mdhcapture.com'],
      description: 'We reply within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['MDH X Let\'s Capture Academy', 'Mumbai, Maharashtra 400001'],
      description: 'India'
    }
  ];

  const faqs = [
    {
      question: 'How long are the courses?',
      answer: 'Our courses range from 6 weeks to 12 weeks depending on the specialization chosen.'
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes, we provide 100% placement assistance with our network of 200+ hiring partners.'
    },
    {
      question: 'Are the classes online or offline?',
      answer: 'We offer both online and offline classes. You can choose based on your preference.'
    },
    {
      question: 'What certifications do you provide?',
      answer: 'We provide industry-recognized certifications from Google, Facebook, and our own platform.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your career? We're here to guide you every step of the way. 
            Let's discuss how we can help you achieve your digital marketing goals.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20 relative z-10">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2 mb-3">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-gray-700 font-medium">
                      {detail}
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="admission">Admission Process</option>
                      <option value="placement">Placement Support</option>
                      <option value="fees">Fees & Payment</option>
                      <option value="mentorship">Mentorship Program</option>
                      <option value="corporate">Corporate Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Side Content */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-red-600">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Support */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-900">Quick Support</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Need immediate assistance? Chat with our support team on WhatsApp for instant help.
                </p>
                <button
                  onClick={() => window.open('https://wa.me/919876543210?text=Hi, I need quick support regarding your courses.', '_blank')}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-lg"
                >
                  Chat on WhatsApp
                </button>
              </div>

              {/* Campus Visit */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Visit Our Campus</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Schedule a campus visit to see our facilities and meet our mentors in person.
                </p>
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors shadow-lg">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our courses and services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Mumbai with easy access to public transportation
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600">
                MDH X Let's Capture Academy<br />
                Mumbai, Maharashtra 400001, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;