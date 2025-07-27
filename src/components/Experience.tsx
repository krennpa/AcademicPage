'use client'

import { Briefcase, Building, Calendar, ExternalLink } from 'lucide-react'
import DynatraceLogo from './DynatraceLogo'
import AccentureLogo from './AccentureLogo'
import FUBLogo from './FUBLogo'

export default function Experience() {
  const pastExperiences = [
    {
      title: "PhD Researcher & Statistical Consultant",
      company: "Freie Universität Berlin & fu:stat",
      location: "Berlin, Germany",
      period: "2019 - 2022",
      type: "Academic / Consulting",
      description: "Conducted doctoral research in applied statistics and provided specialized statistical consulting through the fu:stat unit to researchers, institutions, and businesses.",
      highlights: [
        "Conducted research in small area estimation techniques",
        "Published peer-reviewed papers on computational statistics",
        "Applied econometric methods to real-world problems",
        "Designed and analyzed surveys and experiments",
        "Developed custom statistical solutions for clients",
        "Supervised and trained students and clients"
      ],
      url: "https://www.fu-berlin.de/",
      current: false
    }
  ]

  const skills = [
    { category: "Data Science", skills: ["Python", "R", "Machine Learning", "Deep Learning", "Statistical Modeling"] },
    { category: "Analytics", skills: ["Econometrics", "Time Series Analysis", "Causal Inference", "A/B Testing"] },
    { category: "AI/ML", skills: ["Generative AI", "NLP", "Computer Vision", "MLOps", "Model Deployment"] },
    { category: "Tools", skills: ["SQL", "Git", "Docker", "Cloud Platforms", "Jupyter", "Tableau"] }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in data science, statistics, and consulting spanning academia and industry
          </p>
        </div>

        <div className="space-y-8">
          {/* Current Position */}
          <div 
            className="rounded-2xl p-6 shadow-lg"
            style={{
              background: 'linear-gradient(to bottom right, #bfdbfe, #f9fafb, #b8e6c8)',
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <DynatraceLogo className="h-20 w-20" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Briefcase className="w-5 h-5 text-custom-blue-500 dark:text-custom-blue-400 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Data Scientist and Team Lead</h3>
                  <span className="ml-3 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
                    Current
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Building className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-lg font-medium text-custom-blue-500 dark:text-custom-blue-400">Dynatrace</span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    July 2025 - Present
                  </div>
                  <span>•</span>
                  <span>Vienna, Austria</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                    Full-time
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  My background spans research, consulting, and team leadership at the intersection of technology and global development.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Leading a Generative AI development team',
                      'Managing a medium-sized team with a focus on Generative AI',
                      'Applying an interdisciplinary mindset to solve complex AI challenges',
                      'Combining statistical expertise with business consulting to drive digital transformation'
                    ].map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-custom-blue-500 dark:bg-custom-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Accenture Experience */}
          <div 
            className="rounded-2xl p-6 shadow-lg"
            style={{
              background: 'linear-gradient(to bottom right, #e9d5ff, #f9fafb, #e9d5ff)',
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <AccentureLogo className="h-20 w-20" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Briefcase className="w-5 h-5 text-custom-purple-500 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Data Science Consultant</h3>
                </div>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Building className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-lg font-medium text-custom-purple-500">Accenture</span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    2022 - June 2025
                  </div>
                  <span>•</span>
                  <span>Vienna, Austria</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                    Full-time
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Leading data science initiatives and digital transformation projects for enterprise clients. Specializing in machine learning implementation, statistical analysis, and AI strategy consulting.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Implementing generative AI solutions for business processes',
                      'Developing predictive models for operational optimization',
                      'Leading cross-functional teams in digital transformation projects',
                      'Providing statistical consulting for strategic decision making'
                    ].map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-custom-purple-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FUB Experience */}
          <div 
            className="rounded-2xl p-6 shadow-lg"
            style={{
              background: 'linear-gradient(to bottom right, #dbeafe, #f9fafb, #dbeafe)',
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <FUBLogo className="h-20 w-20" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Briefcase className="w-5 h-5 text-custom-blue-500 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{pastExperiences[0].title}</h3>
                </div>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Building className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-lg font-medium text-custom-blue-500">{pastExperiences[0].company}</span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {pastExperiences[0].period}
                  </div>
                  <span>•</span>
                  <span>{pastExperiences[0].location}</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                    {pastExperiences[0].type}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {pastExperiences[0].description}
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {pastExperiences[0].highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-custom-blue-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* The rest of the experiences can be mapped here if there are any left */}

        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h4>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-custom-green-100 dark:bg-custom-green-900/30 text-custom-green-800 dark:text-custom-green-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
