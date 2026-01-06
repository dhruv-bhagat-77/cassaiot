'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Tab {
  id: string;
  name: string;
  content: string;
}

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface SolutionsData {
  tabs: Tab[];
  categories: Category[];
  products: {
    [key: string]: Product[];
  };
}

const SolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [activeCategory, setActiveCategory] = useState('vision-sensors');
  const [solutionsData, setSolutionsData] = useState<SolutionsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSolutionsData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/solutions');
        if (!response.ok) {
          throw new Error('Failed to fetch solutions data');
        }
        const data = await response.json();
        setSolutionsData(data);
      } catch (err) {
        console.error('Error fetching solutions data:', err);
        setError('Failed to load solutions. Please try again later.');
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

  const { tabs, categories, products } = solutionsData;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Machine Vision</h2>
          
          {/* Category Navigation - Horizontal Tabs */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 pb-2">
              {categories.map((category) => {
                const categorySlug = category.id.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={category.id}
                    href={`/solutions/${categorySlug}`}
                    className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Vertical Tabs - Left Side */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-6 py-4 transition-colors border-l-4 ${
                      activeTab === tab.id
                        ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300'
                        : 'border-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <span className="flex items-center">
                      <span className="font-medium">{tab.name}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content - Right Side */}
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-4">
                  {tabs.find(tab => tab.id === activeTab)?.name}
                </h2>
                
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {tabs.find(tab => tab.id === activeTab)?.content}
                  </p>
                  
                  {activeCategory === 'vision-sensors' && (
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Featured Products</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {products['vision-sensors'].map((product) => (
                          <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gray-100 dark:bg-gray-700 relative">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                {product.name}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SolutionsTabs;
