'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image'; // यह इम्पोर्ट पहले से मौजूद है, बहुत अच्छा!

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  const isActive = (path: string) => pathname === path;
  const isCoursesActive = () => pathname?.startsWith('/courses');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* h-16 को h-20 से बदला */}
          {/* Logo और नाम */}
          <Link
            href="/"
            className="flex items-center gap-3 text-primary hover:text-primary-dark transition-colors"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.png" // अगर आपकी फाइल का नाम अलग है, तो यहाँ बदलें
              alt="Siksha And Diksha Classes Logo"
              width={40} // आप इसे अपनी पसंद के अनुसार बदल सकते हैं
              height={40} // आप इसे अपनी पसंद के अनुसार बदल सकते हैं
            />
            <span className="text-xl md:text-2xl font-bold">
              SIKSHA AND DIKSHA CLASSES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`text-gray-700 hover:text-primary transition-colors ${
                isActive('/') ? 'text-primary font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-gray-700 hover:text-primary transition-colors ${
                isActive('/about') ? 'text-primary font-semibold' : ''
              }`}
            >
              About
            </Link>

            {/* Courses Dropdown */}
            <div className="relative group">
              <button
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isCoursesActive() ? 'text-primary font-semibold' : ''
                }`}
              >
                Courses ▾
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/courses"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  All Courses
                </Link>
                <Link
                  href="/courses/academic"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Academic Classes
                </Link>
                <Link
                  href="/courses/english"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  English Courses
                </Link>
                <Link
                  href="/courses/spoken-english"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Spoken English
                </Link>
                <Link
                  href="/courses/polytechnic"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Polytechnic
                </Link>
              </div>
            </div>

            <Link
              href="/gallery"
              className={`text-gray-700 hover:text-primary transition-colors ${
                isActive('/gallery') ? 'text-primary font-semibold' : ''
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/testimonials"
              className={`text-gray-700 hover:text-primary transition-colors ${
                isActive('/testimonials') ? 'text-primary font-semibold' : ''
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="/admissions"
              className={`text-gray-700 hover:text-primary transition-colors ${
                isActive('/admissions') ? 'text-primary font-semibold' : ''
              }`}
            >
              Admissions
            </Link>
            <Link
              href="/contact"
              className={`text-gray-700 hover:text-primary transition-colors ${
                isActive('/contact') ? 'text-primary font-semibold' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isActive('/') ? 'text-primary font-semibold' : ''
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isActive('/about') ? 'text-primary font-semibold' : ''
                }`}
                onClick={closeMobileMenu}
              >
                About
              </Link>

              {/* Courses Section */}
              <div>
                <button
                  onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                  className={`w-full text-left text-gray-700 hover:text-primary transition-colors ${
                    isCoursesActive() ? 'text-primary font-semibold' : ''
                  }`}
                >
                  Courses {coursesDropdownOpen ? '▴' : '▾'}
                </button>
                {coursesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/courses"
                      className="block text-gray-600 hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      All Courses
                    </Link>
                    <Link
                      href="/courses/academic"
                      className="block text-gray-600 hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      Academic Classes
                    </Link>
                    <Link
                      href="/courses/english"
                      className="block text-gray-600 hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      English Courses
                    </Link>
                    <Link
                      href="/courses/spoken-english"
                      className="block text-gray-600 hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      Spoken English
                    </Link>
                    <Link
                      href="/courses/polytechnic"
                      className="block text-gray-600 hover:t ext-primary"
                      onClick={closeMobileMenu}
                    >
                      Polytechnic
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/gallery"
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isActive('/gallery') ? 'text-primary font-semibold' : ''
                }`}
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
              <Link
                href="/testimonials"
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isActive('/testimonials') ? 'text-primary font-semibold' : ''
                }`}
                onClick={closeMobileMenu}
              >
                Testimonials
              </Link>
              <Link
                href="/admissions"
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isActive('/admissions') ? 'text-primary font-semibold' : ''
                }`}
                onClick={closeMobileMenu}
              >
                Admissions
              </Link>
              <Link
                href="/contact"
                className={`text-gray-700 hover:text-primary transition-colors ${
                  isActive('/contact') ? 'text-primary font-semibold' : ''
                }`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
