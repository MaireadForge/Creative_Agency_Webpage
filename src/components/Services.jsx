import React, { useState } from 'react';

const SERVICES = [
  {
    id: 1,
    tag: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
    hasCollage: false,
  },
  {
    id: 2,
    tag: 'Systemic thinking for complex brands',
    title: 'We talk about our weight',
    hasCollage: false,
  },
  {
    id: 3,
    tag: 'End-to-end digital experience',
    title: 'Piloting digital confidence',
    hasCollage: true,
  },
  {
    id: 4,
    tag: 'Research-led creative transformation',
    title: 'Strategy & brand identity',
    hasCollage: false,
  },
  {
    id: 5,
    tag: 'Content systems & editorial design',
    title: 'Storytelling at scale',
    hasCollage: false,
  },
];

const COLLAGE_IMGS = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face',
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-16">
          <p className="section-tag">What We Do</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            What we{' '}
            <span className="sage-pill">can</span>
            {' '}
            <span className="orange-underline">offer</span>
            {' '}you!
          </h2>
        </div>

        {/* Service Rows */}
        <div>
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              onMouseEnter={() => setHovered(svc.id)}
              onMouseLeave={() => setHovered(null)}
              className="service-row"
            >
              {/* Left: tag */}
              <div className="col-span-12 sm:col-span-3">
                <p className="text-xs sm:text-sm text-gray-400 leading-snug">{svc.tag}</p>
              </div>

              {/* Center: title */}
              <div className="col-span-12 sm:col-span-7 flex items-center gap-4">
                <h3
                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight transition-colors duration-200 ${
                    hovered === svc.id ? 'text-emerald-600' : 'text-gray-900'
                  }`}
                >
                  {svc.hasCollage ? (
                    <>
                      Piloting digital{' '}
                      <span className="relative inline-block">
                        confidence
                        {/* Small collage overlay */}
                        <span className="hidden sm:flex absolute -top-8 right-0 -space-x-2">
                          {COLLAGE_IMGS.map((img, i) => (
                            <img
                              key={i}
                              src={img}
                              alt=""
                              className="w-8 h-8 rounded-full border-2 border-white shadow object-cover"
                            />
                          ))}
                        </span>
                      </span>
                    </>
                  ) : (
                    svc.title
                  )}
                </h3>
              </div>

              {/* Right: arrow */}
              <div className="hidden sm:flex col-span-2 justify-end">
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    hovered === svc.id
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-600 translate-x-1'
                      : 'border-gray-200 text-gray-400'
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
          {/* Final bottom border */}
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
}
