'use client'

import { BookOpen, ExternalLink, Calendar, FileText, Users, BarChart2, Star, Hash } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Publication {
  title: string;
  authors: string;
  venue: string;
  citedBy: number;
  year: string;
}

interface ScholarStats {
  citations: number;
  hIndex: number;
  i10Index: number;
}

export default function Publications() {
  const [data, setData] = useState<{ stats: ScholarStats; publications: Publication[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchScholarData() {
      try {
        const response = await fetch('/api/scholar');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const scholarData = await response.json();
        setData(scholarData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }
    fetchScholarData();
  }, []);

  if (loading) {
    return (
      <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loading Publications...
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Fetching latest data from Google Scholar.
          </p>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-600 dark:text-red-400 mb-4">
            Error
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Could not load publications data. Please try again later.
          </p>
        </div>
      </section>
    );
  }

  const { stats, publications } = data;

  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Publications & Research
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic contributions, automatically updated from my Google Scholar profile.
          </p>
        </div>

        {/* Research Metrics */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <BarChart2 className="w-10 h-10 mx-auto text-custom-green-700 dark:text-custom-green-400 mb-3" />
            <div className="text-3xl font-bold text-custom-green-700 dark:text-custom-green-400 mb-2">
              {stats.citations}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Total Citations
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <Star className="w-10 h-10 mx-auto text-green-600 dark:text-green-400 mb-3" />
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {stats.hIndex}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              h-index
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <Hash className="w-10 h-10 mx-auto text-purple-600 dark:text-purple-400 mb-3" />
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {stats.i10Index}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              i10-index
            </div>
          </div>
        </div>

        {/* All Publications List */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                    {pub.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {pub.authors}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    <span className="font-medium">{pub.venue}</span>
                  </p>
                </div>
                
                <div className="flex items-center mt-4 md:mt-0 md:ml-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center mr-6">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    <span>{pub.citedBy}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{pub.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://scholar.google.com/citations?hl=de&user=1NgPLREAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-custom-green-700 dark:text-custom-green-400 hover:text-custom-green-800 dark:hover:text-custom-green-300 font-medium"
          >
            View on Google Scholar
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}