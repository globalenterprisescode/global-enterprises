import React from 'react';
import { useProperties } from '../hooks/useProperties';
import PropertyCard from '../components/PropertyCard';
import LeadForm from '../components/LeadForm';

const RentalProperties = () => {
  const { properties, loading, error } = useProperties('rental');

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
        Error loading properties: {error}
      </div>
    );
  }

  return (
    <div>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Rental Properties</h1>
          <p className="text-xl text-gray-300">Find your perfect rental home in Bangalore</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard 
              key={property.id} 
              property={{
                id: property.id,
                title: property.builder_name,
                location: property.location,
                price: property.price.toString(),
                image: property.images?.[0] || '/placeholder.jpg',
                area: property.size,
                project: property.project
              }} 
              type="rental"
            />
            ))}
          </div>
        </div>
      </section>

      <LeadForm />
    </div>
  );
};

export default RentalProperties;