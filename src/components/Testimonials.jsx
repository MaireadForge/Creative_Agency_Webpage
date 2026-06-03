import React, { useState } from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Elementum delivered the site within the timeline and budget. Since launch, we found a 50% increase in organic traffic. Their strategic approach to brand storytelling completely transformed how our customers perceive us.',
    author: 'Sarah Mitchell',
    role: 'CEO, Nexora Labs',
    metric: '+50%',
    metricLabel: 'Traffic growth',
  },
  {
    id: 2,
    quote:
      'Working with Elementum was a seamless experience from start to finish. Their team understood our vision immediately and translated it into a design language that resonated deeply with our audience.',
    author: 'James Okafor',
    role: 'Creative Director, Vivid Co.',
    metric: '3x',
    metricLabel: 'Conversion rate',
  },
  {
    id: 3,
    quote:
      'The rebrand Elementum crafted gave us the confidence to enter new markets. Within six months we closed two enterprise deals that had been stalled for years. The ROI speaks for itself.',
    author: 'Priya Sharma',
    role: 'VP Marketing, Horizon SaaS',
    metric: '2 deals',
    metricLabel: 'Enterprise closed',
  },
];

const FLOAT_AVATARS = [
  { url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face', size: 'w-14 h-14', pos: 'top-6 left-[8%]', delay: '0s' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face', size: 'w-10 h-10', pos: 'top-16 left-[22%]', delay: '0.7s' },
  { url: 'https://images.unsplash.com/photo-1546961342-ea5f60b193cc?w=80&h=80&fit=crop&crop=face', size: 'w-16 h-16', pos: 'bottom-8 left-[14%]', delay: '1.2s' },
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face', size: 'w-12 h-12', pos: 'top-10 right-[18%]', delay: '0.4s' },
  { url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face', size: 'w-14 h-14', pos: 'bottom-12 right-[8%]', delay: '1s' },
  { url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face', size: 'w-10 h-10', pos: 'top-4 right-[32%]', delay: '0.2s' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section id="contact" className="relative py-28 px-6 bg-white overflow-hidden">

      {/* Floating avatars */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {FLOAT_AVATARS.map((av, i) => (
          <div
            key={i}
            className={`absolute ${av.pos}`}
            style={{ animation: `float 7s ease-in-out ${av.delay} infinite` }}
          >
            <img src={av.url} alt="" className={`${av.size} rounded-full object-cover border-4 border-white shadow-lg`} />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Heading */}
        <p className="section-tag">Testimonials</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-14">
          <span className="sage-pill">What</span> our customers
          <br />
          say{' '}
          <span className="orange-underline">About Us</span>
        </h2>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/80 border border-gray-100 px-8 sm:px-12 py-10 relative">

          {/* Quote mark */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
              <path d="M0 18V10.8C0 4.8 4 1.2 12 0l1.8 2.4C9.6 3.6 7.4 5.6 7 9h4V18H0ZM12 18V10.8C12 4.8 16 1.2 24 0l1.8 2.4C21.6 3.6 19.4 5.6 19 9h4V18H12Z" fill="white"/>
            </svg>
          </div>

          {/* Metric badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xl font-extrabold text-emerald-600">{t.metric}</span>
            <span className="text-xs text-emerald-700 font-medium">{t.metricLabel}</span>
          </div>

          {/* Quote */}
          <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium mb-8 italic">
            "{t.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm">
              {t.author.charAt(0)}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">{t.author}</p>
              <p className="text-xs text-gray-400">{t.role}</p>
            </div>
          </div>
        </div>

        {/* Carousel dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active ? 'w-8 h-2.5 bg-emerald-500' : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
