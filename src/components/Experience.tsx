'use client'

import { Briefcase, Building, Calendar } from 'lucide-react'
import DynatraceLogo from './DynatraceLogo'
import AccentureLogo from './AccentureLogo'
import FUBLogo from './FUBLogo'
import { useTheme } from '../hooks/useTheme'

export default function Experience() {
  const theme = useTheme();
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
    { category: "AI/ML & Advanced Analytics", skills: ["Generative AI", "Deep Learning", "Neural Networks", "Machine Learning", "Predictive Analytics", "Monte Carlo Simulation"] },
    { category: "Programming & Data Engineering", skills: ["Python", "R", "Data Processing", "Data Engineering", "ETL Tools", "Big Data", "Scientific Programming"] },
    { category: "Research & Statistical Methods", skills: ["Applied Research", "Statistical Data Analysis", "Geo-Spatial Statistics", "Data Modeling", "Data Visualization", "Economic Research"] },
    { category: "Professional & Consulting", skills: ["Stakeholder Management", "Project Management", "Consultancy Services", "Public Speaking", "Scientific Writing", "University Teaching"] }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey in data science, statistics, and consulting spanning academia and industry
          </p>
        </div>

        <div className="space-y-8">
          {/* Current Position */}
          <div 
            className="rounded-2xl p-6 shadow-lg"
            style={{
              background: theme === 'dark' 
                ? 'linear-gradient(to bottom right, #1e3a8a, #1f2937, #14532d)' 
                : 'linear-gradient(to bottom right, #bfdbfe, #f9fafb, #b8e6c8)',
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <DynatraceLogo className="h-20 w-20" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Briefcase className="w-5 h-5 text-custom-blue-500 dark:text-custom-blue-300 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Senior Data Scientist and Team Lead</h3>
                  <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                    Current
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Building className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-lg font-medium text-custom-blue-500 dark:text-custom-blue-300">Dynatrace</span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    July 2025 - Present
                  </div>
                  <span>•</span>
                  <span>Vienna, Austria</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">
                    Full-time
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                  I lead a high-impact team focused on advancing Generative AI capabilities within Dynatrace CoPilot. My work combines hands-on data science with leadership and mentoring. I drive the deployment of LLM-powered applications into production, ensuring scalable and reliable performance in cloud environments. Collaboration across product and engineering and research teams is central to aligning our technical innovation with business goals.
                </p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      'Team Leadership & Mentoring',
                      'Generative AI & LLMs',
                      'Cloud-native Deployment',
                      'Agile Collaboration'
                    ].map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-custom-blue-500 dark:bg-custom-blue-300 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
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
              background: theme === 'dark' 
                ? 'linear-gradient(to bottom right, #6b7280, #374151, #5d6374)' 
                : 'linear-gradient(to bottom right, #e5e7eb, #f9fafb, #d1d5db)',
            }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <AccentureLogo className="h-20 w-20 opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Briefcase className="w-5 h-5 text-custom-purple-500 dark:text-custom-purple-300 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Data Science Consultant</h3>
                </div>
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <Building className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-lg font-medium text-custom-purple-500 dark:text-custom-purple-300">Accenture</span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    2022 - June 2025
                  </div>
                  <span>•</span>
                  <span>Vienna, Austria</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">
                    Full-time
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
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
                        <span className="w-1.5 h-1.5 bg-custom-purple-500 dark:bg-custom-purple-300 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
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
          {pastExperiences.map((exp, index) => (
            <div 
              key={index}
              className="rounded-2xl p-6 shadow-lg"
              style={{
                background: theme === 'dark' 
                  ? 'linear-gradient(to bottom right, #5d6374, #374151, #4b5563)' 
                  : 'linear-gradient(to bottom right, #d1d5db, #f9fafb, #f3f4f6)',
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <FUBLogo className="h-20 w-20 opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <Briefcase className="w-5 h-5 text-custom-blue-500 dark:text-custom-blue-300 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  </div>
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <Building className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                    <span className="text-lg font-medium text-custom-blue-500 dark:text-custom-blue-300">{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <span>•</span>
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-custom-blue-500 dark:bg-custom-blue-300 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
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
          ))}

        </div>

        {/* Skills Section - Bento Grid Layout */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Technical Expertise
          </h3>
          
          {/* Bento Grid Container - Balanced 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            
            {/* Top Row */}
            {/* AI/ML & Advanced Analytics - Top Left */}
            <div className="expertise-card bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-custom-green-900 dark:via-gray-900 dark:to-black rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg text-gray-600 dark:text-gray-300">🤖</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-400 dark:group-hover:text-green-300 transition-colors">
                    {skills[0].category}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    Core AI & Machine Learning
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[0].skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs mr-1 mb-1 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming & Data Engineering - Top Right */}
            <div className="expertise-card bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-custom-green-900 dark:via-gray-900 dark:to-black rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg text-gray-600 dark:text-gray-300">💻</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-400 dark:group-hover:text-green-300 transition-colors">
                    {skills[1].category}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    Languages & Infrastructure
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[1].skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs mr-1 mb-1 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Row */}
            {/* Research & Statistical Methods - Bottom Left */}
            <div className="expertise-card bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-custom-green-900 dark:via-gray-900 dark:to-black rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-400 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg text-gray-600 dark:text-gray-300">📊</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-400 dark:group-hover:text-green-300 transition-colors">
                    {skills[2].category}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    Statistical Analysis
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[2].skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs mr-1 mb-1 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional & Consulting - Bottom Right */}
            <div className="expertise-card bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-custom-green-900 dark:via-gray-900 dark:to-black rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-400 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg text-gray-600 dark:text-gray-300">🎯</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-green-400 dark:group-hover:text-green-300 transition-colors">
                    {skills[3].category}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    Leadership & Communication
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[3].skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs mr-1 mb-1 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
