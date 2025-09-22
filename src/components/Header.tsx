'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -20]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);
  const headerBlur = useTransform(scrollYProgress, [0, 0.1], ['blur(0px)', 'blur(10px)']);

  const navItems = [
    {
      name: 'Rooms',
      href: '/rooms',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'Facilities',
      href: '/facilities',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: 'Offers',
      href: '/offers',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      )
    },
    {
      name: 'About',
      href: '/about',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Gallery',
      href: '/gallery',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Elegant Navigation */}
      <motion.header
        style={{
          y: headerY,
          opacity: headerOpacity,
          backdropFilter: headerBlur
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
  
        <div className="container relative z-10">
          <div className="flex justify-between items-center h-24">
            {/* Logo with Creative Animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <motion.div
                  className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  L
                </motion.div>
                <div>
                  <span className="text-xl font-bold text-gray-900">
                    Luxe
                  </span>
                  <span className="block text-xs text-gray-600 -mt-1">Hotel</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Icon Only Design */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem('')}
                >
                  <Link
                    href={item.href}
                    className="relative p-3 group"
                    title={item.name}
                  >
                    {/* Animated Background */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        activeItem === item.name
                          ? 'bg-gray-100'
                          : 'bg-transparent group-hover:bg-gray-50'
                      }`}
                      layoutId="navBackground"
                    />

                    {/* Icon */}
                    <motion.span
                      className="relative z-10 block text-gray-700"
                      animate={{
                        scale: activeItem === item.name ? 1.2 : 1,
                        y: activeItem === item.name ? -2 : 0
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.span>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded-md text-xs whitespace-nowrap opacity-0 pointer-events-none"
                      animate={{
                        opacity: activeItem === item.name ? 1 : 0,
                        y: activeItem === item.name ? 0 : 5
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Book Now Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block"
            >
              <Link
                href="/contact"
                className="relative px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium overflow-hidden group"
              >
                <span className="relative z-10">Book Now</span>
              </Link>
            </motion.div>

            {/* Creative Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden relative w-10 h-10 rounded-lg bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                className="absolute inset-0 rounded-lg bg-gray-900 opacity-0"
                animate={{ opacity: isMenuOpen ? 0.1 : 0 }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center space-y-1.5">
                <motion.div
                  className="w-5 h-0.5 bg-gray-700 rounded-full"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0
                  }}
                />
                <motion.div
                  className="w-5 h-0.5 bg-gray-700 rounded-full"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1
                  }}
                />
                <motion.div
                  className="w-5 h-0.5 bg-gray-700 rounded-full"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0
                  }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
        className="fixed inset-0 z-40 lg:hidden"
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <motion.div
          className="absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-2xl shadow-2xl"
          initial={{ x: '100%' }}
          animate={{ x: isMenuOpen ? 0 : '100%' }}
          transition={{ type: 'spring', damping: 25 }}
        >
          <div className="p-8">
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-2xl">×</span>
            </motion.button>

            {/* Logo */}
            <div className="mb-12">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  L
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    Luxe
                  </span>
                  <span className="block text-xs text-gray-500 -mt-1">Hotel</span>
                </div>
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{
                    x: isMenuOpen ? 0 : 50,
                    opacity: isMenuOpen ? 1 : 0
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span
                      className="text-gray-700"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item.name}
                    </span>
                    <motion.div
                      className="ml-auto w-0 h-0.5 bg-gray-400 rounded-full"
                      animate={{
                        width: '0%',
                      }}
                      whileHover={{ width: '40%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Book Now Button */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: isMenuOpen ? 0 : 50,
                opacity: isMenuOpen ? 1 : 0
              }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <Link
                href="/contact"
                className="block w-full py-3 bg-gray-900 text-white text-center rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Your Stay
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}