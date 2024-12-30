"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin } from './icons';
import Modal from './Modal';
import LeadForm from './LeadForm';
import Image from './Image';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: string;
    image: string;
    area: string;
    project: string;
  };
  type: string
}

const PropertyCard = ({ property, type }: PropertyCardProps) => {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const router = useRouter();

  const handleLeadSubmit = () => {
    setShowLeadForm(false);
    sessionStorage.setItem('formSubmitted', 'true');
    router.push(`/property/${property.id}`);
  };

  const handlePropertyClick = () => {
    const formSubmitted = sessionStorage.getItem('formSubmitted');
    if(!formSubmitted) {
      setShowLeadForm(true);
    } else {
      router.push(`/property/${property.id}?type=${type}`);
    }
  }

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
        onClick={handlePropertyClick}
      >
        <div className="relative h-48">
          <Image 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full">
            {property.price}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.project}</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{property.location}</span>
          </div>
        </div>
      </div>

      <Modal isOpen={showLeadForm} onClose={() => setShowLeadForm(false)}>
        <LeadForm onSubmit={handleLeadSubmit} />
      </Modal>
    </>
  );
};

export default PropertyCard;