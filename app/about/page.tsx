import Image from 'next/image';
import { CheckCircle } from '@/src/components/icons';

const milestones = [
  {
    year: '1970',
    title: 'Foundation',
    description: 'Established as a trusted name in Bangalore real estate'
  },
  {
    year: '1985',
    title: 'Expansion',
    description: 'Extended services to cover all aspects of real estate'
  },
  {
    year: '2000',
    title: 'Innovation',
    description: 'Introduced modern property solutions'
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Embraced technology for enhanced customer service'
  }
];

const values = [
  'Integrity in Every Transaction',
  'Customer-First Approach',
  'Professional Excellence',
  'Transparent Dealings',
  'Continuous Innovation',
  'Community Focus'
];

export default function About() {
  return (
    <div>
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300">Your Trusted Partner Since 2005</p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose text-gray-600">
                <p>Global Enterprises has been a cornerstone of Bangalore's real estate sector. With over more than 15 years of experience, we've helped thousands of families find their perfect homes and assisted numerous businesses in securing ideal commercial spaces.</p>
                <p className="mt-4">Our journey has been marked by a commitment to excellence, integrity, and customer satisfaction. We've evolved with the changing times while maintaining our core values and traditional business ethics.</p>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/about-image.jpg"
                alt="Global Enterprises Office"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value} className="flex items-center">
                <CheckCircle className="h-6 w-6 text-red-600 mr-3" />
                <span className="text-gray-800">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}