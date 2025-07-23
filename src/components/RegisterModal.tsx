import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, selectedCourse = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourse,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hello! I'm interested in registering for your digital marketing courses.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Course Interest:* ${formData.course || 'General Inquiry'}
*Message:* ${formData.message || 'No additional message'}

Please provide more information about enrollment and fees.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/919876543210?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Register Now</h2>
            <p className="text-gray-600">Get started with your digital marketing journey</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course Interest
            </label>
            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            >
              <option value="">Select a course</option>
              <option value="Digital Marketing Fundamentals">Digital Marketing Fundamentals</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="SEO & Content Strategy">SEO & Content Strategy</option>
              <option value="PPC & Google Ads">PPC & Google Ads</option>
              <option value="Email Marketing">Email Marketing</option>
              <option value="Analytics & Data Science">Analytics & Data Science</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Any specific questions or requirements?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Send via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;