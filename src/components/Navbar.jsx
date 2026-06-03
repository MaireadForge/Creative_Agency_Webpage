import React, { useState } from 'react';

const NAV_LINKS = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-tight text-gray-900">
          Element<span className="text-emerald-500">um</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center border border-emerald-400 rounded-full px-6 py-2 gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200">
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-600 transition-colors duration-300"
        >
          Get in touch
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-4 h-0.5 bg-gray-900 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2 w-6' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-64' : 'max-h-0'}`}>
        <nav className="px-6 pb-4 flex flex-col gap-4 bg-white border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 py-1 transition-colors"
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center justify-center bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-600 transition-colors">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
