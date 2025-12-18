import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row bg-[#FDFBF7] overflow-hidden">
      {/* LEFT: Image (Desktop) / TOP: Image (Mobile) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 h-[50vh] lg:h-auto lg:min-h-screen relative order-1 lg:order-1"
      >
        <img
          src="https://i.imgur.com/dYtDAKJ.jpeg"
          alt="Eternal Youth Red Light Therapy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.1 }} 
            transition={{ delay: 1, duration: 1 }}
            className="absolute inset-0 bg-black pointer-events-none" 
        />
      </motion.div>

      {/* RIGHT: Content (Desktop) / BOTTOM: Content (Mobile) */}
      <div className="w-full lg:w-1/2 order-2 lg:order-2 flex flex-col justify-center px-6 py-16 md:px-12 lg:px-24 xl:px-32 bg-[#FDFBF7]">
        <div className="max-w-[600px] mx-auto lg:mx-0 w-full">
            
            {/* 1. BRAND LOGO */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
                <img 
                  src="https://i.imgur.com/RGyYGEW.png" 
                  alt="Eternal Youth" 
                  className="h-8 w-auto brightness-0" 
                />
            </motion.div>

            {/* 2. EYEBROW */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6"
            >
                Clinical Grade Phototherapy
            </motion.h2>

            {/* 3. HEADLINE */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-[48px] md:text-[60px] lg:text-[72px] leading-[0.9] text-[#1a1a1a] mb-8 tracking-tight"
            >
                Rebuild What <br/>
                <span className="italic text-[#a3a3a3] font-light">Stress Destroyed</span>
            </motion.h1>

            {/* 4. SUBHEADLINE */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-[18px] md:text-[20px] font-light text-[#404040] mb-10 leading-relaxed"
            >
                Complete face + neck + décolleté system. Clinically proven to reduce wrinkles <span className="font-medium text-black">36% in 8 weeks</span>—without needles, downtime, or $700 spa visits.
            </motion.p>

            {/* 5. DIVIDER */}
            <motion.div 
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-12 h-[1px] bg-black/10 mb-10"
            ></motion.div>

            {/* 6. SPECS LIST */}
            <motion.ul 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 mb-12"
            >
                {[
                    { text: "633nm + 830nm wavelengths", sub: "(exact clinical specs)" },
                    { text: "Face + neck + décolleté coverage", sub: "(all in one device)" },
                    { text: "FDA-cleared Class II medical device", sub: "" },
                    { text: "10 minutes/day, hands-free", sub: "" }
                ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-start text-base font-light text-[#404040]"
                    >
                        <Check size={20} className="text-[#D00000] mr-4 mt-0.5 shrink-0" strokeWidth={2} />
                        <span>
                            {item.text} <span className="text-neutral-400">{item.sub}</span>
                        </span>
                    </motion.li>
                ))}
            </motion.ul>

            {/* 7. FULL WIDTH DIVIDER */}
            <div className="w-full h-[1px] bg-black/10 mb-10"></div>

            {/* 8. PRICE SECTION */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-8 mb-4"
            >
                <div className="flex flex-col items-center">
                    <span className="font-serif text-[64px] leading-none text-[#1a1a1a]">$479</span>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-[#1a1a1a] mt-6 font-medium text-center">
                        3-IN-1 FACE + NECK + DÉCOLLETÉ
                    </span>
                </div>
                
                {/* Vertical Divider */}
                <div className="h-24 w-[1px] bg-black/10"></div>
                
                <div className="flex flex-col items-start justify-center">
                    <span className="font-sans text-[10px] uppercase tracking-[0.1em] text-[#525252] font-semibold mb-1">
                        OTHER OVERPRICED BRANDS CHARGE
                    </span>
                    <span className="font-sans text-3xl text-[#a3a3a3] line-through font-light">$790+</span>
                    <span className="font-sans text-[10px] text-[#737373] italic mt-1 leading-tight max-w-[160px]">
                        (Face + Neck sold separately)
                    </span>
                </div>
            </motion.div>
            
            {/* Shipping Info */}
            <div className="mb-10 text-center md:text-left md:pl-2">
                <p className="font-sans text-xs text-neutral-500 font-light">
                   Free Shipping (US) • Ships within 2-3 business days
                </p>
            </div>

            {/* 9. CTA */}
            <button 
                className="w-full bg-[#1a1a1a] text-white py-5 px-6 text-[11px] uppercase tracking-[0.3em] hover:bg-[#D00000] transition-colors duration-300 mb-4 flex items-center justify-center gap-3"
            >
               Try Risk-Free for 30 Days
               <ArrowRight size={14} />
            </button>

            {/* 10. TRUST LINE */}
            <p className="text-center font-sans text-sm font-light text-[#737373] mb-8">
                30-Day Money-Back Guarantee • Free Shipping
            </p>

            {/* 11. SOCIAL PROOF */}
            <div className="flex items-center justify-center gap-3">
                <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                </div>
                <span className="font-sans text-xs text-[#a3a3a3]">
                    4.9/5 from red light therapy users
                </span>
            </div>

        </div>
      </div>
    </section>
  );
};