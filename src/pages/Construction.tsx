import React from 'react';
import { useServices } from '../hooks/useServices';
import LeadForm from '../components/LeadForm';
import { CheckCircle } from '../components/icons';

const features = [
  'Expert Architectural Planning',
  'Quality Construction Materials',
  'Experienced Project Management',
  'Timely Completion',
  'Cost-Effective Solutions',
  'After-Service Support'
];

const Construction = () => {
  const { services, loading, error } = useServices('construction');

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 p-4">
        Error loading services: {error}
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Construction Services</h1>
          <p className="text-xl text-gray-300">Build your dream space with expert craftsmanship</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-56">
                  <img 
                    src={service.images || '/placeholder.jpg'} 
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                {/* <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Our commitment to excellence sets us apart</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-red-600 mr-2" />
                <span className="text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadForm />
    </div>
  );
};

export default Construction;