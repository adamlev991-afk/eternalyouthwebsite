import React from 'react';

const painPoints = [
  {
    id: "01",
    title: "avoiding mirrors & photos.",
    desc: "You avoid mirrors and photos because you don't like what you see anymore—and it's killing your confidence.",
    image: "https://picsum.photos/seed/mirror/600/400"
  },
  {
    id: "02",
    title: "wasted hundreds on products.",
    desc: "You've spent hundreds (maybe thousands) on creams, serums, and facials that promised results but barely made a difference.",
    image: "https://picsum.photos/seed/products/600/400"
  },
  {
    id: "03",
    title: "used to be proud, now invisible.",
    desc: "You used to feel proud of how you looked—now you feel invisible like you've aged 10 years overnight.",
    image: "https://picsum.photos/seed/crowd/600/400"
  },
  {
    id: "04",
    title: "feel like there's no options left.",
    desc: "You're tired of choosing between expensive treatments you can't afford and cheap products that don't work.",
    image: "https://picsum.photos/seed/money/600/400"
  },
];

export const PainPoints: React.FC = () => {
  return (
    <section className="bg-brand-dark py-24 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-b border-neutral-800 pb-8 flex justify-between items-end">
          <h2 className="font-serif text-3xl italic text-neutral-400 lowercase tracking-tight">tell me if this sounds familiar ↓</h2>
        </div>

        <div className="grid grid-cols-1 gap-0">
          {painPoints.map((item) => (
            <div key={item.id} className="group border-b border-neutral-900 py-12 md:py-20 flex flex-col md:flex-row md:items-center justify-between transition-colors hover:bg-neutral-900/30 px-4">
              
              {/* Text Side */}
              <div className="md:w-1/2 pr-10">
                <div className="flex items-baseline space-x-4 mb-4">
                  <span className="font-serif italic text-neutral-600 text-xl tracking-tight">({item.id})</span>
                  <h3 className="text-xl md:text-2xl font-light tracking-wide text-brand-cream">{item.title}</h3>
                </div>
                <p className="pl-12 text-neutral-500 font-light leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>

              {/* Image Side (Revealed/Accented) */}
              <div className="md:w-1/3 mt-8 md:mt-0 relative overflow-hidden h-48 md:h-64 w-full opacity-60 md:opacity-40 group-hover:opacity-100 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};