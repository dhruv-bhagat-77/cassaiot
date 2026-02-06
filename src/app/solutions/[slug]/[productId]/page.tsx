import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Play, Users, Shield, Zap, BarChart3, Factory, Package, Truck, Cpu, Database, Globe, Award } from 'lucide-react';

// TypeScript interfaces
interface Problem {
  title: string;
  description: string;
  issues: string[];
  conclusion: string;
}

interface Introduction {
  title: string;
  technologies: string[];
  result: string;
}

interface Mission {
  mission: string;
  vision: string;
}

interface FlowStep {
  step: string;
  description: string;
}

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  problem: Problem;
  introduction: Introduction;
  mission: Mission;
  solutionModules: string[];
  usp: string[];
  flow: FlowStep[];
  dashboard: string[];
  integration: string[];
  whereUsed: string[];
  industries: string[];
  whyCassAIOT: string[];
}

interface CategoryProducts {
  [key: string]: Product;
}

interface Products {
  [key: string]: CategoryProducts;
}

// Mock product data
const getProductById = async (slug: string, productId: string): Promise<Product | null> => {
  const products: Products = {
    'vision': {
      'cass-vision-flow': {
        id: 'cass-vision-flow',
        name: 'CASS VisionFlow™',
        tagline: 'AI-Powered Real-Time Inventory Intelligence',
        description: 'Track Raw Materials, Production & Dispatch — automatically, accurately, and in real time using AI, Computer Vision, and ERP integration.',
        image: '/images/products/vision-sensor.jpg',
        problem: {
          title: 'Traditional inventory systems fail on the factory floor.',
          description: 'Most ERP and inventory software depend on manual entries, barcode scans, or delayed updates, which leads to:',
          issues: [
            'Inventory mismatches',
            'Production delays',
            'Dispatch errors',
            'Lack of real-time visibility',
            'High dependency on manpower'
          ],
          conclusion: 'What businesses think they have in stock is often very different from what is physically moving on shop floor.'
        },
        introduction: {
          title: 'CASS VisionFlow™ is an AI-powered, camera-first inventory management solution designed for modern manufacturing, warehousing, and logistics environments.',
          technologies: [
            'Computer Vision',
            'AI Object Detection & Recognition',
            'Barcode, QR & OCR',
            'Real-time ERP synchronization'
          ],
          result: '100% verified, real-time inventory visibility across raw material, WIP, finished goods, and dispatch.'
        },
        mission: {
          mission: 'To eliminate inventory inaccuracies and operational blind spots by replacing manual processes with real-time AI-driven automation.',
          vision: 'To build a future where every factory operates autonomously, with inventory, production, and dispatch verified digitally in real time—without human dependency.'
        },
        solutionModules: [
          'Raw Material Inventory Tracking',
          'WIP & Production Line Tracking',
          'Finished Goods Inventory',
          'Dispatch & Dock Verification',
          'AI Camera-Based Counting',
          'Alerts & Notifications Engine',
          'ERP & Software Integration Layer',
          'Centralized SaaS Dashboard'
        ],
        usp: [
          'Tracks what physically moves, not just what is entered',
          'Multiple tracking methods in one unified system',
          'Camera-first approach (no barcode dependency)',
          'Works with existing ERP, no replacement required',
          'Designed for real factory conditions, not labs'
        ],
        flow: [
          {
            step: 'Raw Material Inward',
            description: 'Verified via camera, barcode, QR, or OCR'
          },
          {
            step: 'Production Line',
            description: 'AI tracks consumption & output in real time'
          },
          {
            step: 'Inspection / Packing',
            description: 'Counts and validates items automatically'
          },
          {
            step: 'Dispatch & Dock',
            description: 'Verifies loading, routes, and quantities'
          },
          {
            step: 'ERP Sync',
            description: 'Data pushed instantly to ERP & business systems'
          }
        ],
        dashboard: [
          'Live inventory across all locations',
          'Line-wise, SKU-wise, dock-wise views',
          'Camera feed with AI counts',
          'Shift, day, and month analytics',
          'Alerts, logs, and audit trails',
          'Accessible via web, desktop, and mobile'
        ],
        integration: [
          'Seamless API-based integration',
          'Syncs with ERP, sales & production software',
          'Automated notifications & workflows',
          'Compatible with SAP, Tally, Oracle, and custom ERP'
        ],
        whereUsed: [
          'Manufacturing plants',
          'Conveyor-based production lines',
          'Warehouses & distribution centers',
          'Multi-dock dispatch yards',
          'Robot-assisted material handling setups'
        ],
        industries: [
          'Manufacturing & Engineering',
          'Automotive & Auto Components',
          'FMCG & Consumer Goods',
          'Food & Beverage',
          'Pharmaceuticals',
          'Logistics & Warehousing',
          'Textile & Apparel',
          'Electronics & Electricals',
          'Gems & Jewelry Manufacturing'
        ],
        whyCassAIOT: [
          'Built by industrial automation & AI experts',
          'Proven experience in AI, robotics, and vision systems',
          'Hardware & ERP agnostic',
          'Scalable, secure, and future-ready',
          'Designed for global deployment, not just pilots'
        ]
      }
    },
    'robots': {
      // Add robot products here
    }
  };

  const categoryProducts = products[slug];
  if (!categoryProducts) return null;
  
  return categoryProducts[productId] || null;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string; productId: string }> }) {
  const { slug, productId } = await params;
  const product = await getProductById(slug, productId);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} | CASS AIOT`,
    description: product.description,
    openGraph: {
      title: `${product.name} | CASS AIOT`,
      description: product.description,
      images: [{
        url: product.image,
        width: 1200,
        height: 630,
        alt: product.name,
      }],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string; productId: string }> }) {
  const { slug, productId } = await params;
  const product = await getProductById(slug, productId);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  {product.tagline}
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                    👉 Request Demo
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                    👉 Talk to Our Experts
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-red-50 dark:bg-red-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-red-600 dark:text-red-400 text-2xl">❗</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                {product.problem.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {product.problem.description}
                </p>
                <div className="space-y-3">
                  {product.problem.issues.map((issue, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-100 dark:bg-red-900/20 p-6 rounded-lg">
                <p className="text-red-800 dark:text-red-200 font-medium leading-relaxed">
                  {product.problem.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-600 dark:text-blue-400 text-2xl">🧠</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                Introduction
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  {product.introduction.title}
                </p>
                <div className="space-y-4">
                  {product.introduction.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">
                  The result:
                </h3>
                <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                  {product.introduction.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-green-600 dark:text-green-400 text-2xl">🎯</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                Mission & Vision
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {product.mission.mission}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {product.mission.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Modules Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-purple-600 dark:text-purple-400 text-2xl">🧩</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                Solution Modules
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                CASS VisionFlow™ is a modular, scalable platform:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.solutionModules.map((module, index) => (
                <div key={index} className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                    {module}
                  </h4>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
              Deploy only what you need. Scale when you grow.
            </p>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-yellow-50 dark:bg-yellow-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-yellow-600 dark:text-yellow-400 text-2xl">⭐</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                USP – Why VisionFlow is Different
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.usp.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg text-center">
              <p className="text-yellow-900 dark:text-yellow-100 font-medium text-lg">
                This is not just inventory software —<br />
                it's inventory intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-600 dark:text-blue-400 text-2xl">🔄</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                Flow – How System Works
              </h2>
            </div>
            <div className="space-y-6">
              {product.flow.map((item, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.step}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
              Every movement is captured, validated, and logged automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-green-600 dark:text-green-400 text-2xl">📊</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                Centralized SaaS Dashboard
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                One dashboard. Complete control.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.dashboard.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-purple-600 dark:text-purple-400 text-2xl">🔗</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                Software & ERP Integration
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                VisionFlow enhances your existing systems, it doesn't replace them.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.integration.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Database className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-purple-900 dark:text-purple-100 text-center">
                Your team keeps using familiar software —<br />
                VisionFlow simply makes it accurate and real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Used Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-600 dark:text-blue-400 text-2xl">📍</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                Where It Is Used
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.whereUsed.map((location, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg flex items-center space-x-3">
                  <Factory className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">{location}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
              Works for single-line factories as well as large multi-plant enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-green-600 dark:text-green-400 text-2xl">🏭</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                Industries We Serve
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.industries.map((industry, index) => (
                <div key={index} className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <span className="text-green-800 dark:text-green-200">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why CASS AIOT Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-900/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-600 dark:text-blue-400 text-2xl">🏆</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">
                Why CASS AIOT Private Limited
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.whyCassAIOT.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-center">
              <p className="text-blue-900 dark:text-blue-100 font-medium text-lg">
                We don't just sell software —<br />
                we engineer operational intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-3xl">🚀</span>
            <h2 className="text-3xl font-bold text-white mt-4 mb-4">
              Ready to eliminate inventory errors for good?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Transform your factory into a real-time, data-driven operation with CASS VisionFlow™.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                👉 Request a Live Demo
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center">
                👉 Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
