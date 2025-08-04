'use client'

import { ExternalLink, Calendar, ChevronDown, BarChart2, Star, Hash } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'

interface Publication {
  title: string;
  authors: string;
  venue: string;
  citedBy: number;
  year: string;
  abstract?: string;
  publicationUrl: string; 
  directUrl?: string;
  tags: string[]; // Added for the new tags
}

interface ScholarStats {
  citations: number;
  hIndex: number;
  i10Index: number;
}

// Function to add tags based on user-defined rules
const addTagsToPublications = (publications: Omit<Publication, 'tags'>[]): Publication[] => {
  return publications.map(pub => {
    const tags: string[] = [];
    const lowerTitle = pub.title.toLowerCase();

    // Rule 1: Topic based on author
    if (!pub.authors.toLowerCase().includes('thalhammer')) {
      tags.push('Statistics');
    } else {
      tags.push('Economics');
    }

    // Rule 2: Peer-reviewed Journal
    if (
      lowerTitle.includes('flexible domain prediction') ||
      lowerTitle.includes('tree-based machine learning') ||
      (lowerTitle.includes('analysing opportunity cost') && pub.year === '2025') ||
      (lowerTitle.includes('macht der schulden') && pub.year === '2020')
    ) {
      tags.push('Peer-reviewed Journal');
    }

    // Rule 3: Programming Package
    if (lowerTitle.includes('r-package')) {
      tags.push('Programming Package');
    }

    // Rule 4: Dissertation
    if (lowerTitle.includes('a framework for the estimation')) {
      tags.push('Dissertation');
    }

    // Rule 5: Working Paper
    if (
      (lowerTitle.includes('flexible domain prediction') && pub.year === '2022') ||
      (lowerTitle.includes('analysing opportunity') && pub.year === '2022') ||
      (lowerTitle.includes('macht der schulden') && pub.year !== '2020')
    ) {
      tags.push('Working Paper');
    }
    
    // Rule 6: Remove 'Peer-reviewed Journal' if it's a 'Dissertation'
    if (tags.includes('Dissertation') && tags.includes('Peer-reviewed Journal')) {
        const index = tags.indexOf('Peer-reviewed Journal');
        if (index > -1) {
            tags.splice(index, 1);
        }
    }


    return { ...pub, tags };
  });
};


export default function Publications() {
  const [data, setData] = useState<{ stats: ScholarStats; publications: Publication[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('citations');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchScholarData() {
      try {
        const response = await fetch('/api/scholar');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to fetch data');
        }
        const scholarData = await response.json();
        // Add tags to the fetched data
        const taggedPublications = addTagsToPublications(scholarData.publications);
        setData({ ...scholarData, publications: taggedPublications });

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }
    fetchScholarData();
  }, []);

  const sortedPublications = useMemo(() => {
    if (!data?.publications) return [];
    return [...data.publications].sort((a, b) => {
      if (sortBy === 'citations') {
        return b.citedBy - a.citedBy;
      }
      return parseInt(b.year) - parseInt(a.year);
    });
  }, [data?.publications, sortBy]);

  const handleToggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  const getTagColor = (tag: string) => {
    const lowerTag = tag.toLowerCase();
    if (lowerTag.includes('peer-reviewed')) return 'bg-green-200 text-green-900 dark:bg-green-800/70 dark:text-green-100';
    if (lowerTag.includes('dissertation')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200';
    if (lowerTag.includes('package')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200';
    if (lowerTag.includes('working paper')) return 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    if (lowerTag.includes('economics')) return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200';
    if (lowerTag.includes('statistics')) return 'bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200';
    return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
  };


  if (loading) {
    return (
      <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Loading Publications...
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Fetching latest data from Google Scholar. This may take a moment.
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
            Error Loading Publications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {error || 'Could not load publications data. Please try again later.'}
          </p>
        </div>
      </section>
    );
  }

  const { stats } = data;

  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Publications & Research
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            My academic contributions, automatically updated from my Google Scholar profile.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <BarChart2 className="w-10 h-10 mx-auto text-custom-green-700 dark:text-custom-green-400 mb-3" />
            <div className="text-3xl font-bold text-custom-green-700 dark:text-custom-green-400 mb-2">{stats.citations}</div>
            <div className="text-gray-600 dark:text-gray-400">Total Citations</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <Star className="w-10 h-10 mx-auto text-green-600 dark:text-green-400 mb-3" />
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{stats.hIndex}</div>
            <div className="text-gray-600 dark:text-gray-400">h-index</div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <Hash className="w-10 h-10 mx-auto text-purple-600 dark:text-purple-400 mb-3" />
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{stats.i10Index}</div>
            <div className="text-gray-600 dark:text-gray-400">i10-index</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <a href="https://scholar.google.com/citations?hl=de&user=1NgPLREAAAAJ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-custom-green-500 hover:bg-custom-green-600 shadow-sm transition-transform transform hover:scale-105">
            View Profile on Google Scholar
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</span>
            <button onClick={() => setSortBy('citations')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${sortBy === 'citations' ? 'bg-custom-green-500 text-white shadow-sm' : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600'}`}>
              Citations
            </button>
            <button onClick={() => setSortBy('year')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${sortBy === 'year' ? 'bg-custom-green-500 text-white shadow-sm' : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600'}`}>
              Year
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {sortedPublications.map((pub, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-6 cursor-pointer" onClick={() => handleToggleExpand(index)}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {pub.tags.map(tag => (
                        <span key={tag} className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${getTagColor(tag)}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">{pub.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{pub.authors}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      <span className="font-medium">{pub.venue}</span>
                    </p>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0 md:ml-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center mr-6">
                      <BarChart2 className="w-4 h-4 mr-1.5 text-custom-green-700 dark:text-custom-green-400" />
                      <span>{pub.citedBy}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      <span>{pub.year}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 transform transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </div>
              {expandedIndex === index && (
                <div className="px-6 pb-6 bg-gray-50 dark:bg-gray-800/50">
                  <div className="pt-4">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Abstract</h5>
                    <p className="publication-abstract text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {pub.abstract}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-x-6">
                    <a href={pub.publicationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-custom-green-700 dark:text-white dark:hover:text-gray-300 font-medium text-sm transition-colors duration-200 hover:underline">
                      View on Google Scholar
                      <ExternalLink className="w-4 h-4 ml-1.5" />
                    </a>
                    {pub.directUrl && (
                       <a href={pub.directUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-custom-green-700 dark:text-white dark:hover:text-gray-300 font-medium text-sm transition-colors duration-200 hover:underline">
                        View on Publisher/PDF
                        <ExternalLink className="w-4 h-4 ml-1.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
