import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import SolutionsTabs from '../components/SolutionsTabs';
import Hero from '../components/Hero';

// This would come from your API in a real app
const getSolutionBySlug = async (slug: string) => {
  // In a real app, you would fetch this from your API
  const solutions = {
    'vision': {
      id: 'vision-sensors',
      name: 'Vision Sensors',
      description: 'High-precision vision sensors for industrial applications',
      image: '/images/products/vision-sensor.jpg',
      content: `
        <h3 class="text-xl font-semibold mb-4">Advanced Vision Sensor Technology</h3>
        <p class="mb-4">Our vision sensors provide high-precision detection and measurement for industrial applications. With advanced image processing capabilities, they deliver reliable performance in the most demanding environments.</p>
        <h4 class="text-lg font-semibold mt-6 mb-2">Key Features</h4>
        <ul class="list-disc pl-5 space-y-2 mb-6">
          <li>High-resolution imaging for precise detection</li>
          <li>Rugged design for industrial environments</li>
          <li>Easy integration with existing systems</li>
          <li>Advanced pattern matching and edge detection</li>
        </ul>
      `,
      specifications: [
        { name: 'Resolution', value: '5MP' },
        { name: 'Frame Rate', value: '60 FPS' },
        { name: 'Interface', value: 'GigE, USB 3.0' },
        { name: 'Operating Temperature', value: '0°C to 45°C' },
      ]
    },
    // Add more solutions as needed
  };

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return solutions[slug as keyof typeof solutions] || null;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const solution = await getSolutionBySlug(params.slug);
  
  if (!solution) {
    return {
      title: 'Solution Not Found',
      description: 'The requested solution could not be found.',
    };
  }

  return {
    title: `${solution.name} | CASS AIOT`,
    description: solution.description,
    openGraph: {
      title: `${solution.name} | CASS AIOT`,
      description: solution.description,
      images: [{
        url: solution.image,
        width: 1200,
        height: 630,
        alt: solution.name,
      }],
    },
  };
}

export default async function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = await getSolutionBySlug(params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - Dark background */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800">
        <Hero />
      </div>
      
      {/* Solutions Tabs Section */}
      <SolutionsTabs />
    </main>
  );
}