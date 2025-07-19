'use client'

import { ArrowDown, MapPin, Briefcase } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-900 dark:to-red-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Left Side */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Minimalist Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-red-100 to-rose-100 dark:from-gray-800 dark:to-red-900/20 rounded-2xl transform rotate-1"></div>
              <div className="absolute -inset-2 bg-white dark:bg-gray-900 rounded-xl transform -rotate-1 shadow-lg"></div>
              
              {/* Photo Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-br from-red-800 to-red-900 rounded-xl flex items-center justify-center text-white text-6xl sm:text-7xl font-bold shadow-2xl">
                PK
              </div>
              
              {/* Gallery-style accent */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-red-800 rounded-full"></div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Patrick Krennmair
            </h1>

            {/* Role */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Briefcase className="w-5 h-5 text-red-700 dark:text-red-400 mr-2" />
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Data Science Consultant
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
              <p className="text-gray-600 dark:text-gray-400">
                Vienna, Austria
              </p>
            </div>

            {/* Bio */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Research associate specializing in <span className="text-red-700 dark:text-red-400 font-semibold">Generative AI</span>, 
              <span className="text-red-700 dark:text-red-400 font-semibold"> Machine Learning</span>, and 
              <span className="text-red-700 dark:text-red-400 font-semibold"> Applied Econometrics</span>. 
              Currently working at Accenture and passionate about digital transformation and emerging markets.
            </p>

            {/* Key Interests */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
              {[
                'Generative AI',
                'Machine Learning',
                'Applied Econometrics',
                'Digital Transformation'
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToAbout}
                className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
              >
                Learn More About Me
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-red-800 text-red-800 dark:text-red-400 dark:border-red-400 hover:bg-red-800 hover:text-white dark:hover:bg-red-400 dark:hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </button>
            </div>

            {/* Scroll Indicator */}
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-gray-400 hover:text-red-700 dark:hover:text-red-400 transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
