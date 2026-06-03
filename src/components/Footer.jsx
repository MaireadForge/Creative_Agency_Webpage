import React, { useState } from 'react';

const FOOTER_LINKS = {
  Company: ['Home', 'Studio', 'Service', 'Blog'],
  'Terms & Policies': ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  'Follow Us': ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); }
  };

  return (
    <footer id="faqs" className="bg-white">

      {/* ── Newsletter Section ── */}
      <div className="relative bg-[#eaf2ec] overflow-hidden py-24 px-6">

        {/* Decorative: wireframe rect + purple circle */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border-2 border-gray-400/40 rounded-lg rotate-12 scale-110" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-500 rounded-full opacity-80" />
          </div>
        </div>

        {/* Left decorative */}
        <div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-14 h-14 border-2 border-emerald-400/50 rounded-full" />
          <div className="w-6 h-6 bg-orange-400 rounded-sm mt-4 ml-8 rotate-12" />
        </div>

        <div className="max-w-xl mx-auto text-center relative z-10">
          <p className="section-tag">Stay Connected</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Subscribe to our
            <br />
            <span className="orange-underline">newsletter</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-10 leading-relaxed">
            To make your stay special and even more memorable. Get the latest
            insights, case studies, and inspiration directly in your inbox.
          </p>

          {submitted ? (
            <div className="bg-emerald-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg inline-block">
              🎉 You're subscribed! Welcome aboard.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 max-w-xs border border-gray-300 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 bg-white"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-200 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Footer Links Grid ── */}
      <div className="bg-gray-950 text-gray-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-extrabold text-white mb-4">
                Element<span className="text-emerald-500">um</span>
              </h3>
              <p className="text-sm leading-relaxed mb-6">
                A creative agency built on the belief that progress demands courage.
              </p>
              <div className="flex gap-3">
                {['IG', 'LI', 'YT', 'TW'].map(s => (
                  <button key={s} className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-xs font-bold hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-white font-semibold text-sm mb-5">{heading}</h4>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm hover:text-emerald-400 transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Column */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-5">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="leading-snug">1498w Fluton St, STE 2D<br />Chicago, IL 60667</li>
                <li>
                  <a href="tel:+13125550192" className="hover:text-emerald-400 transition-colors">+1 (312) 555-0192</a>
                </li>
                <li>
                  <a href="mailto:hello@elementum.co" className="hover:text-emerald-400 transition-colors">hello@elementum.co</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">©2023 Elementum. All rights reserved.</p>
            <div className="flex gap-6 text-xs">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
