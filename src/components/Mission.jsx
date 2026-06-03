import React from 'react';

export default function Mission() {
  return (
    <section id="studio" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left Column ── */}
        <div className="order-2 lg:order-1">
          <p className="section-tag">Our Mission</p>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
            <span className="green-border-box block w-fit mb-2">
              <span className="orange-underline">Tomorrow</span> should be
            </span>
            better than{' '}
            <span className="sage-pill">today</span>
          </h2>

          <p className="text-gray-500 leading-relaxed text-base sm:text-lg mb-8 max-w-lg">
            We exist to push boundaries. Our multidisciplinary team fuses strategy,
            design, and technology to craft experiences that don't just look good —
            they move people, shift culture, and drive measurable results.
          </p>

          <div className="flex items-center gap-4 mb-10">
            {[
              { number: '150+', label: 'Projects Delivered' },
              { number: '12yr', label: 'Industry Experience' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4 border-r border-gray-200 last:border-r-0">
                <p className="text-2xl font-extrabold text-gray-900">{stat.number}</p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <a href="#services" className="read-more-link group">
            <span className="read-more-line" />
            Read more about us
          </a>
        </div>

        {/* ── Right Column: Circular Image ── */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          {/* Coral Rectangle Accent */}
          <div className="hidden lg:block absolute -right-6 top-10 w-16 h-24 bg-coral rounded-sm z-0" />
          <div className="hidden lg:block absolute -right-2 top-20 w-10 h-10 bg-orange-400 opacity-60 rotate-45 z-0" />

          {/* Main Circle Image */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white z-10">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&crop=center"
              alt="Team collaboration workshop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating small accent circle */}
          <div className="absolute -bottom-6 left-8 lg:left-16 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 animate-float">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
              alt="team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating tag card */}
          <div className="absolute -left-4 lg:-left-10 top-16 bg-white rounded-2xl shadow-xl px-4 py-3 z-20 animate-float-fast">
            <p className="text-xs text-gray-400">Current projects</p>
            <p className="text-lg font-bold text-gray-900">47 Active</p>
            <div className="flex -space-x-2 mt-1">
              {[0,1,2].map(i => (
                <div key={i} className="w-6 h-6 rounded-full bg-emerald-400 border-2 border-white" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
