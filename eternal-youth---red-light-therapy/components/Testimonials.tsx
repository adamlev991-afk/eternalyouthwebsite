import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    image: "https://i.imgur.com/KfLS98F.jpeg",
    quote: "[Before & After] Two weeks of using red light therapy for hyperpigmentation.",
    name: "Sarah M.",
    age: "42",
    timeline: "2 Weeks • Daily Use"
  },
  {
    image: "https://i.imgur.com/BAwMKtS.jpeg",
    quote: "I’ve had AMAZING results after using my mask for only about 2 weeks. I had really bad melasma and PIH for years that was getting worse with age. I couldn’t believe my eyes how fast it went away with the red light. I ended up buying a panel too after seeing the results on my face, I want the same benefit for the rest of my body! Im a believer",
    name: "Jennifer K.",
    age: "38",
    timeline: "2 Weeks • Daily Use"
  },
  {
    image: "https://i.imgur.com/tPxJbZP.jpeg",
    quote: "I spent two months obsessively researching how to address skin laxity after losing 80 lbs (especially around my nasolabial folds), redness and broken capillaries, brown spots, thin fragile skin from years of chronic illness, and fine lines. For the first 30 days, I used a red light mask and microcurrent daily—about 2½ minutes per side and 2½ minutes front-on, from roughly 14 inches away—and was shocked to see baby hairs sprouting in areas where hair hadn’t grown back in years, even after postpartum loss and extensive treatments. After that, I added short sessions closer to my hairline, then adjusted to a three-days-on, one-day-off schedule after learning about cumulative dose. The results have been genuinely exciting, and I also believe consistency with peptides, glycerin-based hydration, and antioxidant serums before moisturizer played a meaningful supporting role.",
    name: "Michelle R.",
    age: "45",
    timeline: "30 Days • Daily Use"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-editorial-white py-16 md:py-24 px-6 md:px-12 border-t border-black/10">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-6xl mb-4 tracking-tighter">Real Results.</h2>
          <h2 className="font-serif text-4xl md:text-6xl text-neutral-400 italic tracking-tighter">Real Women.</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-[#F5F5F0] p-8 shadow-sm flex flex-col"
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={item.image}
                  alt="Transformation results"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#FDFBF7] px-5 py-2 text-[9px] uppercase tracking-[0.25em] text-[#121212] border border-black/5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] whitespace-nowrap">
                  {item.timeline}
                </div>
              </div>

              {/* Quote */}
              <p className={`font-serif italic text-neutral-800 leading-relaxed mb-4 text-center flex-grow ${item.quote.length > 200 ? 'text-sm md:text-base' : 'text-xl'}`}>
                "{item.quote}"
              </p>

              {/* Stars */}
              <div className="flex justify-center text-amber-400 gap-1 mb-3">
                 {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              {/* Attribution */}
              <p className="text-center text-neutral-600 font-sans">
                <span className="font-semibold">{item.name}</span>, {item.age}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
            <p className="text-sm text-neutral-500 italic max-w-4xl mx-auto leading-relaxed">
                These images represent real results from users of LED devices with identical 
                specifications (633nm + 830nm wavelengths, 30 mW/cm² power output, FDA-cleared). 
                Individual results vary based on age, skin type, usage consistency, and other factors. 
                Most users report visible improvements within 4-8 weeks of daily use.
            </p>
            <a 
              href="#clinical-studies" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('clinical-studies')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block mt-4 text-editorial-black underline hover:no-underline text-sm font-medium hover:text-editorial-red transition-colors"
            >
                See the peer-reviewed clinical studies →
            </a>
        </div>
      </div>
    </section>
  );
};