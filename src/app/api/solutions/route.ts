import { NextResponse } from 'next/server';

// Mock data - replace with your actual database query
export async function GET() {
  const data = {
    categories: [
      { id: 'vision-sensors', name: 'Vision Sensors' },
      { id: '2d-vision', name: '2D Machine Vision Systems' },
      { id: 'insight', name: 'In-Sight' },
    ],
    products: {
      'vision-sensors': [
        {
          id: 1,
          name: 'Vision Sensor 1000',
          description: 'High-precision vision sensor for industrial applications',
          image: '/images/products/vision-sensor.jpg',
        },
      ],
    },
    tabs: [
      { 
        id: 'introduction', 
        name: 'Introduction',
        content: 'Overview of our solutions and how they can benefit your business operations.'
      },
      { 
        id: 'about', 
        name: 'About',
        content: 'Learn more about our company and our expertise in providing innovative solutions.'
      },
      { 
        id: 'mission-vision', 
        name: 'Mission & Vision',
        content: 'Our mission is to deliver cutting-edge solutions that drive business growth and efficiency.'
      },
      { 
        id: 'applications', 
        name: 'Where it is used',
        content: 'Discover the various industries and applications where our solutions are making an impact.'
      },
      { 
        id: 'features', 
        name: 'Features',
        content: 'Key features and capabilities of our solutions that set us apart from the competition.'
      },
      { 
        id: 'benefits', 
        name: 'Benefit',
        content: 'Understand the advantages and ROI our solutions can bring to your organization.'
      },
      { 
        id: 'contact', 
        name: 'Contact',
        content: 'Get in touch with our team to learn more about our solutions and services.'
      }
    ]
  };

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return NextResponse.json(data);
}
