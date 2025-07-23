import React from 'react';
import astroindusootlogo from '../../assets/astroindusootlogo.png';
import digianni from '../../assets/digianni.png';
import dmcslogo from '../../assets/dmcs_logo_web.png';
import mv from '../../assets/mv.jpg';
import omegaprogrammer from '../../assets/OmegaProgrammer.png'
import techdost from '../../assets/techdost.webp';
import techmagnate from '../../assets/techmagnate.svg';
import webhopers from '../../assets/webhopers.png';
import techcentrica from '../../assets/techcentrica.png';
import garage from '../../assets/garage.png';
import weadpro from '../../assets/weadpro.png';
const Partners: React.FC = () => {
  const partners = [
    { name: 'DMCS India', logo: dmcslogo },
    { name: 'TECHDOST', logo: techdost },
    { name: 'ASTROINDUSOOT', logo: astroindusootlogo },
    { name: 'OMEGAPROGRAMMER', logo: omegaprogrammer },
    { name: 'Weadpro', logo: weadpro},
    { name: 'DIGIDIR', logo: digianni},
    { name: 'MDH', logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop' },
    { name: 'MV', logo: mv},
    { name: 'SIX SOFT MEDIA', logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop' },
    { name: 'TECHMAGNATE', logo: techmagnate},
    { name: 'GARAGE MEDIA', logo: garage},
    { name: 'TECHCENTRICA', logo: techcentrica },
    { name: 'WEBHOPERS', logo: webhopers },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our curriculum is designed in partnership with top companies to ensure you learn the most relevant skills
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {[...partners, ...partners].map((partner, index) => (
               <div
    key={index}
    className="flex-shrink-0 bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
  >
    <div className="w-24 h-12 bg-white flex items-center justify-center">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-12 max-w-full object-contain"
      />
    </div>
  </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;