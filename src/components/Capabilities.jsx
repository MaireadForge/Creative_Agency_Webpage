import React from 'react';

export default function Capabilities() {
  return (
    <section id="services" className="py-24 px-6 bg-[#fafafa] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative border-2 border-red-400 rounded-2xl p-8 lg:p-0 lg:flex lg:items-stretch min-h-[480px]">

          {/* ── Left: Circular Image breaking out ── */}
          <div className="relative flex items-center justify-center lg:justify-start lg:w-1/2 mb-10 lg:mb-0">
            {/* Orange Triangle accent */}
            <div className="hidden lg:block absolute bottom-0 left-12 z-0">
              <svg width="90" height="90" viewBox="0 0 90 90">
                <polygon points="0,90 90,90 45,0" fill="#fb923c" opacity="0.9" />
              </svg>
            </div>

            {/* Circle image — breaks out of the red border box */}
            <div className="relative z-10 lg:-ml-12 lg:-my-8">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop&crop=center"
                  alt="Professionals working on laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Small floating badge */}
            <div className="absolute top-4 right-4 lg:right-8 bg-white rounded-xl shadow-lg px-4 py-2 animate-float z-20">
              <p className="text-xs text-gray-400">Satisfaction rate</p>
              <p className="text-xl font-extrabold text-emerald-600">98%</p>
            </div>
          </div>

          {/* ── Right: Text Block ── */}
          <div className="lg:w-1/2 flex flex-col justify-center lg:p-12">
            <p className="section-tag">Our Capabilities</p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              <span className="sage-pill">See</span> how we can
              <br />
              help you{' '}
              <span className="orange-underline">progress</span>
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8 text-sm sm:text-base">
              From brand strategy to digital product design, our capabilities span
              the full creative spectrum. We partner deeply with our clients, embedding
              ourselves in their world to understand what truly moves their audiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Brand Strategy', 'UX Design', 'Digital Marketing', 'Product Development'].map((cap) => (
                <div key={cap} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  {cap}
                </div>
              ))}
            </div>

            <a href="#contact" className="read-more-link">
              <span className="read-more-line" />
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
