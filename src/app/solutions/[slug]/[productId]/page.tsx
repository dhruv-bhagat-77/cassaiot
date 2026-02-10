import { notFound } from 'next/navigation';
import HeroSection from '@/components/product/HeroSection';
import ProblemSection from '@/components/product/ProblemSection';
import IntroductionSection from '@/components/product/IntroductionSection';
import MissionVisionSection from '@/components/product/MissionVisionSection';
import SolutionModulesSection from '@/components/product/SolutionModulesSection';
import UVPSection from '@/components/product/UVPSection';
import HowItWorksSection from '@/components/product/HowItWorksSection';
import DashboardSection from '@/components/product/DashboardSection';
import IntegrationSection from '@/components/product/IntegrationSection';
import WhereUsedSection from '@/components/product/WhereUsedSection';
import IndustriesSection from '@/components/product/IndustriesSection';
import WhyCassSection from '@/components/product/WhyCassSection';
import CTASection from '@/components/product/CTASection';

// TypeScript interfaces
interface Problem {
  title: string;
  subtitle: string;
  description: string;
  issues: string[];
  conclusion: string;
}

interface Introduction {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  resultTitle: string;
  resultItems: string[];
}

interface SolutionModules {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  list: string[];
}

interface Mission {
  title: string;
  subtitle: string;
  mission: string;
  vision: string;
}

interface FlowStep {
  step: string;
  description: string;
}

interface Flow {
  title: string;
  subtitle: string;
  icon: string;
  stepIcons: string[];
  conclusion: string;
  steps: FlowStep[];
}

interface Dashboard {
  title: string;
  subtitle: string;
  icon: string;
  features: Array<{ icon: string; text: string }>;
  footer: string;
}

interface Integration {
  title: string;
  subtitle: string;
  icon: string;
  features: Array<{ icon: string; text: string }>;
  footer: string;
}

interface WhereUsed {
  title: string;
  icon: string;
  list: string[];
  footer: string;
}

interface Industries {
  title: string;
  icon: string;
  list: string[];
}

interface UVP {
  title: string;
  subtitle: string;
  traditionalTitle: string;
  traditionalFeatures: string[];
  visionFlowTitle: string;
  features: string[];
  conclusion: {
    icon: string;
    text: string;
  };
}

interface WhyCassAIOT {
  title: string;
  icon: string;
  list: string[];
  conclusion: {
    icon: string;
    text: string;
  };
}

interface CTA {
  title: string;
  description: string;
  buttons: Array<{
    text: string;
    style: string;
  }>;
}

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  hero: Hero;
  problem: Problem;
  introduction: Introduction;
  mission: Mission;
  solutionModules: string[];
  usp: UVP;
  flow: Flow;
  dashboard: Dashboard;
  integration: Integration;
  whereUsed: WhereUsed;
  industries: Industries;
  whyCassAIOT: WhyCassAIOT;
  cta: CTA;
}

interface CategoryProducts {
  [key: string]: Product;
}

interface Products {
  [key: string]: CategoryProducts;
}

// Fetch product data from API
async function getProductById(slug: string, productId: string): Promise<Product | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/solutions`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    const category = data.categories.find((cat: any) => cat.id === slug);
    
    if (!category) {
      return null;
    }
    
    const product = category.products.find((prod: any) => prod.id === productId);
    
    if (!product) {
      return null;
    }
    
    // API now returns data in the correct structure, no transformation needed
    return product as Product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

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
      <HeroSection product={product} hero={product.hero} />
      <ProblemSection problem={product.problem} />
      <IntroductionSection introduction={product.introduction} />
      <MissionVisionSection mission={product.mission} />
      <SolutionModulesSection solutionModules={product.solutionModules} />
      <UVPSection usp={product.usp} />
      <HowItWorksSection flow={product.flow} />
      <DashboardSection dashboard={product.dashboard} />
      <IntegrationSection integration={product.integration} />
      <WhereUsedSection whereUsed={product.whereUsed} />
      <IndustriesSection industries={product.industries} />
      <WhyCassSection whyCassAIOT={product.whyCassAIOT} />
      <CTASection cta={product.cta} />
    </main>
  );
}