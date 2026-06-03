import React from 'react';

// Avatar data using Unsplash for realistic diverse faces
const AVATARS = [
  { id: 1, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face', size: 'w-16 h-16', pos: 'left-[4%] top-[30%]', delay: '0s' },
  { id: 2, url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face', size: 'w-12 h-12', pos: 'left-[14%] top-[10%]', delay: '0.8s' },
  { id: 3, url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face', size: 'w-20 h-20', pos: 'left-[22%] top-[55%]', delay: '1.2s' },
  { id: 4, url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face', size: 'w-14 h-14', pos: 'left-[32%] top-[20%]', delay: '0.4s' },
  { id: 5, url: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&h=120&fit=crop&crop=face', size: 'w-24 h-24', pos: 'right-[22%] top-[18%]', delay: '0.6s', purple: true },
  { id: 6, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face', size: 'w-14 h-14', pos: 'right-[10%] top-[50%]', delay: '1s' },
  { id: 7, url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop&crop=face', size: 'w-10 h-10', pos: 'right-[30%] top-[60%]', delay: '1.5s' },
  { id: 8, url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face', size: 'w-16 h-16', pos: 'left-[8%] top-[65%]', delay: '0.3s' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden bg-white">

      {/* ── Decorative: Red Wavy Line (left) ── */}
      <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <svg width="18" height="140" viewBox="0 0 18 140" fill="none">
          <path d="M9 2 Q16 18 9 34 Q2 50 9 66 Q16 82 9 98 Q2 114 9 130 Q16 138 9 138"
            stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* ── Decorative: Purple Semi-circle (right) ── */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10 animate-float-slow">
        <div className="w-16 h-32 bg-purple-400 rounded-l-full opacity-80" />
      </div>

      {/* ── Floating Avatars (desktop only) ── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {AVATARS.map((av) => (
          <div
            key={av.id}
            className={`absolute ${av.pos}`}
            style={{ animation: `float 6s ease-in-out ${av.delay} infinite` }}
          >
            {av.purple ? (
              <div className="relative">
                <div className="absolute -inset-2 border-2 border-purple-500 rounded-lg" />
                <img src={av.url} alt="team member" className={`${av.size} rounded-full object-cover border-4 border-white shadow-xl relative z-10`} />
              </div>
            ) : (
              <img src={av.url} alt="team member" className={`${av.size} rounded-full object-cover border-4 border-white shadow-lg`} />
            )}
          </div>
        ))}
      </div>

      {/* ── Hero Text ── */}
      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <p className="section-tag">Creative Agency — Est. 2018</p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-gray-900 mb-6">
          The{' '}
          <span className="orange-underline">thinkers and doers</span>
          {' '}were{' '}
          <span className="green-border-box">changing</span>
          {' '}the{' '}
          <span className="sage-pill">status</span>
          {' '}Quo with
        </h1>

        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
          We are a team of strategists, designers, communicators, and researchers.
          Together, we believe that progress only happens when you refuse to play things safe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#services" className="bg-gray-900 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-200">
            Explore our work
          </a>
          <a href="#about" className="read-more-link group text-gray-700">
            <span className="read-more-line" />
            Learn more
          </a>
        </div>
      </div>

      {/* ── Mobile Avatar Strip ── */}
      <div className="flex lg:hidden items-center justify-center gap-3 mt-14 flex-wrap">
        {AVATARS.slice(0, 5).map((av) => (
          <img key={av.id} src={av.url} alt="team member"
            className="w-12 h-12 rounded-full object-cover border-3 border-white shadow-md" />
        ))}
        <span className="text-xs text-gray-400 font-medium">+12 more</span>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-400 tracking-widest">SCROLL</span>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <rect x="1" y="1" width="10" height="18" rx="5" stroke="#9ca3af" strokeWidth="1.5"/>
          <circle cx="6" cy="5" r="2" fill="#9ca3af"/>
        </svg>
      </div>
    </section>
  );
}
