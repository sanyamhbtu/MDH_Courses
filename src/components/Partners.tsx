import React from 'react';

const Partners: React.FC = () => {
  const partners = [
    { name: 'Google', logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop' },
    { name: 'Facebook', logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop' },
    { name: 'Amazon', logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop' },
    { name: 'Microsoft', logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop' },
    { name: 'Shopify', logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop' },
    { name: 'HubSpot', logo: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=60&fit=crop' },
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
                className="flex-shrink-0 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100"
              >
                <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">{partner.name}</span>
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