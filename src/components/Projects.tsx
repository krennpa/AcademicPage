'use client'

import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      title: "Generative AI for Business Process Automation",
      description: "Developed and implemented generative AI solutions to automate complex business processes at Accenture, resulting in 40% efficiency improvements for client operations.",
      category: "AI/ML",
      technologies: ["Python", "OpenAI API", "LangChain", "FastAPI", "Docker"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      date: "2024"
    },
    {
      title: "Small Area Estimation Framework",
      description: "Research project developing advanced statistical methods for small area estimation in emerging markets, with applications to poverty mapping and economic development.",
      category: "Research",
      technologies: ["R", "Statistical Modeling", "Bayesian Methods", "MCMC"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      featured: true,
      date: "2022"
    },
    {
      title: "Economic Development Analytics Platform",
      description: "Built a comprehensive analytics platform for monitoring economic development indicators across emerging markets using modern data science techniques.",
      category: "Analytics",
      technologies: ["Python", "Dash", "PostgreSQL", "Plotly", "AWS"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      date: "2023"
    },
    {
      title: "Predictive Models for Market Analysis",
      description: "Developed machine learning models for market trend prediction and risk assessment, integrating econometric methods with modern ML techniques.",
      category: "ML",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Jupyter"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      featured: false,
      date: "2023"
    },
    {
      title: "fu:stat Consulting Portal",
      description: "Created a web portal for the statistical consulting unit at Freie Universität Berlin, streamlining client interactions and project management.",
      category: "Web Development",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      date: "2021"
    },
    {
      title: "Digital Transformation Assessment Tool",
      description: "Consulting tool for assessing digital maturity and transformation readiness across different business domains and industries.",
      category: "Consulting",
      technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
      image: "/api/placeholder/400/250",
      liveUrl: "#",
      featured: false,
      date: "2024"
    }
  ]

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in data science, machine learning, and statistical consulting
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Highlighted Work
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-custom-green-50 to-green-50 dark:from-gray-800 dark:to-custom-green-900/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-custom-green-100 dark:bg-custom-green-900/50 text-custom-green-800 dark:text-custom-green-300 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h4>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-custom-green-700 dark:text-custom-green-400 hover:text-custom-green-800 dark:hover:text-custom-green-300 font-medium"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-custom-green-800 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <div className="text-gray-500 dark:text-gray-400 text-center">
                  <Tag className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm font-medium">{project.category}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-custom-green-100 dark:bg-custom-green-900/30 text-custom-green-800 dark:text-custom-green-300 rounded text-xs font-medium">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.date}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-custom-green-700 dark:group-hover:text-custom-green-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-custom-green-700 dark:text-custom-green-400 hover:text-custom-green-800 dark:hover:text-custom-green-300 text-sm font-medium"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm font-medium"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-custom-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-custom-green-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new projects, consulting opportunities, or research collaborations.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-custom-green-800 hover:bg-custom-green-900 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
