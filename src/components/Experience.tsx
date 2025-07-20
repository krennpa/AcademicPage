'use client'

import { Briefcase, Building, Calendar, ExternalLink } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: "Data Science Consultant",
      company: "Accenture",
      location: "Vienna, Austria",
      period: "Current Position",
      type: "Full-time",
      description: "Leading data science initiatives and digital transformation projects for enterprise clients. Specializing in machine learning implementation, statistical analysis, and AI strategy consulting.",
      highlights: [
        "Implementing generative AI solutions for business processes",
        "Developing predictive models for operational optimization",
        "Leading cross-functional teams in digital transformation projects",
        "Providing statistical consulting for strategic decision making"
      ],
      url: "https://www.accenture.com/at-de",
      current: true
    },
    {
      title: "Research Associate",
      company: "Chair of Applied Statistics, Freie Universität Berlin",
      location: "Berlin, Germany",
      period: "2019 - 2022",
      type: "Academic",
      description: "Conducted advanced research in applied statistics while pursuing doctoral studies. Contributed to statistical consulting unit fu:stat, providing expertise to various research projects.",
      highlights: [
        "Conducted research in small area estimation techniques",
        "Published peer-reviewed papers on computational statistics",
        "Provided statistical consulting through fu:stat unit",
        "Supervised undergraduate and graduate students"
      ],
      current: false
    },
    {
      title: "Statistical Consultant",
      company: "fu:stat - Statistical Consulting Unit",
      location: "Berlin, Germany",
      period: "2019 - 2022",
      type: "Consulting",
      description: "Provided specialized statistical consulting services to researchers, institutions, and businesses. Focused on econometric analysis and methodological guidance.",
      highlights: [
        "Applied econometric methods to real-world problems",
        "Designed and analyzed surveys and experiments",
        "Developed custom statistical solutions",
        "Trained clients in statistical software and methodology"
      ],
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in data science, statistics, and consulting spanning academia and industry
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="w-5 h-5 text-red-700 dark:text-red-400 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      {exp.current && (
                        <span className="ml-3 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center mb-2">
                      <Building className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
                      <span className="text-lg font-medium text-red-700 dark:text-red-400">
                        {exp.company}
                      </span>
                      {exp.url && (
                        <a 
                          href={exp.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-2 text-gray-400 hover:text-red-700 dark:hover:text-red-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-red-700 dark:bg-red-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
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
                      className="inline-block bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
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
