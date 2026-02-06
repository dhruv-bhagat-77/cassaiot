'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';

interface Tab {
  id: string;
  name: string;
  content: any;
}

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  tabs: Tab[];
}

interface Category {
  id: string;
  name: string;
  products: Product[];
}

interface SolutionsData {
  categories: Category[];
}




const SolutionsTabs = () => {
  const [solutionsData, setSolutionsData] = useState<SolutionsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSolutionsData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/solutions");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSolutionsData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load solutions");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSolutionsData();
  }, []);



  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!solutionsData) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Solutions</h2>

          {/* Category-wise Product Sections */}
          <div className="space-y-16">
            {solutionsData?.categories.map((category) => (
              <div key={category.id}>
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {category.name}
                  </h3>
                  <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/solutions/${category.id}/${product.id}`}
                      className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {product.description}
                        </p>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:text-blue-700 dark:group-hover:text-blue-300">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsTabs;
