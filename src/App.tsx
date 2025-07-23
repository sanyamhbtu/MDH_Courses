import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Mentors from './pages/Mentors';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';
import RegisterModal from './components/RegisterModal';
import { useState } from 'react';

function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header onRegisterClick={() => setIsRegisterModalOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<Home onRegisterClick={() => setIsRegisterModalOpen(true)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses onRegisterClick={() => setIsRegisterModalOpen(true)} />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <RegisterModal 
          isOpen={isRegisterModalOpen} 
          onClose={() => setIsRegisterModalOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;