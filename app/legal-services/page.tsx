"use client"

import { CheckCircle } from '@/src/components/icons';
import LeadForm from '@/src/components/LeadForm';

const legalServices = [
  'Property Documentation Review',
  'Title Verification',
  'Legal Due Diligence',
  'Agreement Drafting',
  'Property Registration Assistance',
  'Legal Consultation'
];

export default function LegalServices() {
  return (
    <div>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Legal Services</h1>
          <p className="text-xl text-gray-300">Professional legal assistance for all your real estate needs</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Legal Services</h2>
              <div className="space-y-4">
                {legalServices.map((service) => (
                  <div key={service} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                    <span className="text-gray-800">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
              <div className="prose text-gray-600">
                <p>Our experienced legal team ensures that your real estate transactions are secure and compliant with all applicable laws and regulations. We provide comprehensive legal support throughout your property journey.</p>
                <p className="mt-4">With years of expertise in real estate law, we help you navigate complex legal procedures with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </div>
  );
}