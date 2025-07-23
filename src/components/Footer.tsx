import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-orange-500" />
              <div className="text-lg font-bold">
                <span>MDH</span>
                <span className="text-orange-500"> X </span>
                <span>Let's Capture</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering digital marketers through comprehensive courses and expert mentorship. Transform your career with industry-leading education.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-orange-500 transition-colors">Courses</Link></li>
              <li><Link to="/mentors" className="text-gray-400 hover:text-orange-500 transition-colors">Our Mentors</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Digital Marketing Fundamentals</span></li>
              <li><span className="text-gray-400">Social Media Marketing</span></li>
              <li><span className="text-gray-400">SEO & Content Strategy</span></li>
              <li><span className="text-gray-400">PPC & Google Ads</span></li>
              <li><span className="text-gray-400">Email Marketing</span></li>
              <li><span className="text-gray-400">Analytics & Data Science</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">info@mdhcapture.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 MDH X Let's Capture. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span className="text-gray-400 text-sm hover:text-orange-500 cursor-pointer">Privacy Policy</span>
            <span className="text-gray-400 text-sm hover:text-orange-500 cursor-pointer">Terms of Service</span>
            <span className="text-gray-400 text-sm hover:text-orange-500 cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;