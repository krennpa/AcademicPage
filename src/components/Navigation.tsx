'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check for dark mode preference
    const storedDarkMode = localStorage.getItem('darkMode')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDarkMode = storedDarkMode === 'true' || (!storedDarkMode && systemPrefersDark)
    
    setIsDark(isDarkMode)
    
    // Apply both class and data-theme approaches on initial load
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.removeAttribute('data-theme')
      document.body.classList.remove('dark')
    }
    
    // Set color scheme
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light'
    
    console.log('Initial dark mode:', isDarkMode)
    console.log('Initial HTML classes:', document.documentElement.className)
    console.log('Initial body classes:', document.body.className)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    
    // Apply both class and data-theme approaches
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.removeAttribute('data-theme')
      document.body.classList.remove('dark')
    }
    
    // Force a style recalculation
    document.documentElement.style.colorScheme = newDarkMode ? 'dark' : 'light'
    
    // Debug logging
    console.log('Dark mode toggled:', newDarkMode)
    console.log('HTML classes:', document.documentElement.className)
    console.log('Body classes:', document.body.className)
    console.log('Data theme:', document.documentElement.getAttribute('data-theme'))
  }

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-green-700 dark:bg-green-800 backdrop-blur-md shadow-lg" style={{ backgroundColor: isDark ? '#2d5a47' : '#40826D' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
            >
              Patrick Krennmair
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-100 hover:bg-custom-green-800 dark:hover:bg-custom-green-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-md text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-100 hover:bg-custom-green-800 dark:hover:bg-custom-green-900 transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-100 hover:bg-custom-green-800 dark:hover:bg-custom-green-900 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-100 hover:bg-custom-green-800 dark:hover:bg-custom-green-900 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700 dark:bg-green-800 rounded-lg shadow-lg mt-2 border border-green-600 dark:border-green-600" style={{ backgroundColor: isDark ? '#2d5a47' : '#40826D' }}>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-100 hover:bg-custom-green-800 dark:hover:bg-custom-green-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
