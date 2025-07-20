'use client'

import { GraduationCap, Brain, TrendingUp, Globe } from 'lucide-react'

export default function About() {
  const interests = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Generative AI",
      description: "Exploring cutting-edge AI technologies and their practical applications"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Machine Learning & Statistics",
      description: "Predictive methods and computational statistics for data-driven insights"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Economic Development",
      description: "Applied econometrics and small area estimation for emerging markets"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Digital Transformation",
      description: "Bridging traditional economics with modern data science approaches"
    }
  ]

  const education = [
    {
      degree: "Dr.rer.pol. in Applied Statistics",
      institution: "Freie Universität Berlin",
      year: "2019 - 2022",
      highlight: true
    },
    {
      degree: "MSc in Economics",
      institution: "Universität Wien",
      year: "2016 - 2018"
    },
    {
      degree: "MA in Development Studies",
      institution: "Universität Wien",
      year: "2016 - 2019"
    },
    {
      degree: "BSc in Statistics",
      institution: "Universität Wien",
      year: "2015 - 2018"
    },
    {
      degree: "BSc in Economics",
      institution: "Universität Wien",
      year: "2013 - 2016"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I am working as a research associate at the Chair of Applied Statistics at Freie Universität Berlin 
            and as a consultant for the statistical consulting unit fu:stat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Interests */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Research Interests
            </h3>
            <div className="grid gap-6">
              {interests.map((interest, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-custom-green-50 hover:to-green-50 dark:hover:from-gray-700 dark:hover:to-custom-green-900/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 p-2 bg-custom-green-100 dark:bg-custom-green-900/30 rounded-lg text-custom-green-700 dark:text-custom-green-400">
                    {interest.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {interest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border-l-4 ${
                    edu.highlight 
                      ? 'bg-custom-green-50 dark:bg-custom-green-900/20 border-custom-green-400 hover:bg-gradient-to-r hover:from-custom-green-100 hover:to-green-100 dark:hover:from-custom-green-900/30 dark:hover:to-custom-green-900/20' 
                      : 'bg-gray-50 dark:bg-gray-800 border-custom-green-200 dark:border-custom-green-300 hover:bg-gradient-to-r hover:from-custom-green-50 hover:to-green-50 dark:hover:from-gray-700 dark:hover:to-custom-green-900/20'
                  } hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className={`text-lg font-semibold ${
                      edu.highlight 
                        ? 'text-custom-green-900 dark:text-custom-green-100' 
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {edu.degree}
                    </h4>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      edu.highlight 
                        ? 'bg-custom-green-100 dark:bg-custom-green-900/50 text-custom-green-800 dark:text-custom-green-200' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}>
                      {edu.year}
                    </span>
                  </div>
                  <p className={`${
                    edu.highlight 
                      ? 'text-custom-green-700 dark:text-custom-green-300' 
                      : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Position */}
        <div className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-custom-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-custom-green-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Current Position
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold">Data Science Consultant</span> at 
              <span className="text-red-700 dark:text-red-400 font-semibold"> Accenture</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Combining statistical expertise with business consulting to drive digital transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
