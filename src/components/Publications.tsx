'use client'

import { BookOpen, ExternalLink, Calendar, FileText, Users } from 'lucide-react'
import { useState } from 'react'

export default function Publications() {
  const [selectedType, setSelectedType] = useState('All')

  const publications = [
    {
      title: "Advanced Methods in Small Area Estimation for Economic Development",
      authors: ["Patrick Krennmair", "Co-Author Name"],
      journal: "Journal of Applied Statistics",
      year: "2022",
      type: "Journal Article",
      status: "Published",
      description: "Novel statistical methods for small area estimation with applications to poverty mapping and economic development indicators in emerging markets.",
      abstract: "This paper introduces advanced Bayesian methods for small area estimation, specifically designed for economic development applications. We demonstrate significant improvements in estimation accuracy for regions with limited data availability.",
      doi: "10.1080/example.doi",
      pdfUrl: "#",
      citationCount: 15,
      keywords: ["Small Area Estimation", "Bayesian Methods", "Economic Development", "Poverty Mapping"],
      featured: true
    },
    {
      title: "Machine Learning Applications in Econometric Analysis",
      authors: ["Patrick Krennmair", "Research Team"],
      journal: "Computational Economics",
      year: "2023",
      type: "Journal Article",
      status: "Published",
      description: "Comprehensive survey and empirical analysis of machine learning techniques applied to econometric problems.",
      abstract: "We systematically evaluate machine learning methods for econometric analysis, providing practical guidelines for researchers and practitioners in economics and finance.",
      doi: "10.1007/example.doi",
      pdfUrl: "#",
      citationCount: 8,
      keywords: ["Machine Learning", "Econometrics", "Predictive Modeling", "Economic Analysis"],
      featured: true
    },
    {
      title: "Digital Transformation in Statistical Consulting: Lessons from fu:stat",
      authors: ["Patrick Krennmair", "Consulting Team"],
      venue: "International Conference on Statistical Computing",
      year: "2021",
      type: "Conference Paper",
      status: "Published",
      description: "Analysis of digital transformation impacts on statistical consulting practices, with case studies from the fu:stat consulting unit.",
      abstract: "We examine how digital tools and methodologies have transformed statistical consulting, improving efficiency and client satisfaction in academic consulting environments.",
      pdfUrl: "#",
      citationCount: 5,
      keywords: ["Digital Transformation", "Statistical Consulting", "Academic Services"],
      featured: false
    },
    {
      title: "Generative AI in Business Process Optimization",
      authors: ["Patrick Krennmair", "Industry Partners"],
      venue: "AI & Business Conference 2024",
      year: "2024",
      type: "Conference Paper",
      status: "Accepted",
      description: "Practical applications of generative AI for business process automation and optimization in enterprise environments.",
      abstract: "This study presents real-world applications of generative AI technologies in business process optimization, demonstrating measurable improvements in operational efficiency.",
      pdfUrl: "#",
      citationCount: 2,
      keywords: ["Generative AI", "Business Process", "Automation", "Enterprise Solutions"],
      featured: false
    },
    {
      title: "Causal Inference Methods for Economic Development Research",
      authors: ["Patrick Krennmair"],
      journal: "Development Economics Review",
      year: "2023",
      type: "Journal Article",
      status: "Under Review",
      description: "Novel approaches to causal inference in development economics research with focus on emerging market applications.",
      abstract: "We propose new methodological approaches for establishing causal relationships in development economics, with particular attention to data limitations in emerging markets.",
      keywords: ["Causal Inference", "Development Economics", "Research Methods", "Emerging Markets"],
      featured: false
    }
  ]

  const publicationTypes = ['All', ...Array.from(new Set(publications.map(p => p.type)))]

  const filteredPublications = selectedType === 'All' 
    ? publications 
    : publications.filter(p => p.type === selectedType)

  const featuredPublications = publications.filter(p => p.featured)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
      case 'Accepted':
        return 'bg-custom-green-100 dark:bg-custom-green-900/30 text-custom-green-800 dark:text-custom-green-300'
      case 'Under Review':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
    }
  }

  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Publications & Research
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic contributions to statistical methods, machine learning, and economic development
          </p>
        </div>

        {/* Featured Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Publications
          </h3>
          <div className="space-y-8">
            {featuredPublications.map((pub, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <BookOpen className="w-5 h-5 text-custom-green-700 dark:text-custom-green-400 mr-2" />
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(pub.status)}`}>
                        {pub.status}
                      </span>
                      <span className="ml-3 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        {pub.type}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                      {pub.title}
                    </h4>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{pub.authors.join(', ')}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">
                        {pub.journal || pub.venue} • {pub.year}
                      </span>
                      {pub.citationCount && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="text-sm">{pub.citationCount} citations</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {pub.description}
                </p>
                
                {pub.abstract && (
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Abstract:
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {pub.abstract}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.keywords.map((keyword, idx) => (
                    <span key={idx} className="px-3 py-1 bg-custom-green-100 dark:bg-custom-green-900/30 text-custom-green-800 dark:text-custom-green-300 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {pub.pdfUrl && (
                    <a
                      href={pub.pdfUrl}
                      className="flex items-center text-custom-green-700 dark:text-custom-green-400 hover:text-custom-green-800 dark:hover:text-custom-green-300 font-medium"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      PDF
                    </a>
                  )}
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      DOI
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {publicationTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedType === type
                  ? 'bg-custom-green-800 text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* All Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(pub.status)}`}>
                      {pub.status}
                    </span>
                    <span className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      {pub.type}
                    </span>
                    <span className="ml-2 text-gray-500 dark:text-gray-400 text-xs">
                      {pub.year}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                    {pub.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {pub.authors.join(', ')}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    <span className="font-medium">{pub.journal || pub.venue}</span>
                    {pub.citationCount && (
                      <span className="ml-2">• {pub.citationCount} citations</span>
                    )}
                  </p>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {pub.description}
                  </p>
                </div>
                
                <div className="flex space-x-3 mt-4 md:mt-0 md:ml-6">
                  {pub.pdfUrl && (
                    <a
                      href={pub.pdfUrl}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      PDF
                    </a>
                  )}
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      DOI
                    </a>
                  )}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {pub.keywords.slice(0, 4).map((keyword, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                    {keyword}
                  </span>
                ))}
                {pub.keywords.length > 4 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-500 rounded text-xs">
                    +{pub.keywords.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Research Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-custom-green-700 dark:text-custom-green-400 mb-2">
              {publications.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Total Publications
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {publications.reduce((sum, pub) => sum + (pub.citationCount || 0), 0)}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Total Citations
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {Math.round(publications.reduce((sum, pub) => sum + (pub.citationCount || 0), 0) / publications.filter(pub => pub.citationCount).length) || 0}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Avg. Citations per Paper
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
