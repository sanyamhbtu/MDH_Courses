import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import StudentSuccess from '../components/StudentSuccess';
import FeaturedCourses from '../components/FeaturedCourses';
import WhyChooseUs from '../components/WhyChooseUs';
import OurProcess from '../components/OurProcess';
import WhoWeAre from '../components/WhoWeAre';
import ContactSection from '../components/ContactSection';
import Testimonials from '../components/Testimonials';

interface HomeProps {
  onRegisterClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onRegisterClick }) => {
  return (
    <div className="overflow-hidden">
      <Hero onRegisterClick={onRegisterClick} />
      <Partners />
      <StudentSuccess />
      <FeaturedCourses onRegisterClick={onRegisterClick} />
      <WhyChooseUs />
      <OurProcess />
      <WhoWeAre />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Home;