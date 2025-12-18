import React, { useRef, useState, useEffect } from 'react';
import { Check, X, Minus, Sparkle, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ProblemSection: React.FC = () => {
  const [isImageInView, setIsImageInView] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsImageInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-editorial-white text-editorial-black py-12 md:py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        
        {/* --- Header Section matching screenshot --- */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
        >
           {/* Title */}
           <h2 className="font-serif text-6xl md:text-[7rem] lg:text-[9rem] leading-[0.85] tracking-tighter text-editorial-black mb-12">
             The Science <br/>
             <span className="italic text-editorial-red">of Glow.</span>
           </h2>

           {/* Subtitles / Meta */}
           <div className="flex flex-row items-end justify-between border-transparent py-4 gap-6">
              <div className="font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-900 max-w-xs leading-relaxed">
                 Eternal Youth Est.<br/>2024
              </div>
              
              <div className="w-12 h-[1px] bg-neutral-300 md:hidden"></div>

              <div className="font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-900 leading-relaxed text-right">
                 Clinical Grade<br/>Phototherapy
              </div>
           </div>
           
           {/* Main Divider */}
           <div className="w-full h-[1px] bg-black/10 mt-8 mb-12"></div>
        </motion.div>

        {/* --- Large Editorial Image with Overlays --- */}
        <div className="w-full mb-24 md:mb-32 relative group">
          <div className="overflow-hidden relative">
             <motion.img 
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               src="https://i.imgur.com/ijuQ9eC.jpeg" 
               alt="Red Light Therapy Cellular Activation" 
               className="w-full h-[50vh] md:h-[85vh] object-cover object-center"
             />
             
             {/* Gradient Overlay for Text Readability */}
             <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none"></div>

             {/* Specification Overlays */}
             <div className="absolute top-[20%] left-6 md:left-12 lg:left-24 flex flex-col gap-12 z-20 pointer-events-none">
                
                {/* Spec 1: Wavelengths */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex items-center gap-4"
                >
                    <div className="flex flex-col items-start md:items-end text-left md:text-right">
                        <span className="font-serif text-3xl md:text-4xl text-white italic drop-shadow-lg tracking-tight">633nm + 830nm</span>
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/90 drop-shadow-md font-medium">Precise Wavelengths</span>
                    </div>
                    <div className="hidden md:block w-16 h-[1px] bg-white/60"></div>
                    <div className="hidden md:block w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
                </motion.div>

                {/* Spec 2: Power */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex items-center gap-4 md:translate-x-12"
                >
                    <div className="flex flex-col items-start md:items-end text-left md:text-right">
                        <span className="font-serif text-3xl md:text-4xl text-white italic drop-shadow-lg tracking-tight">30 mW/cm²</span>
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/90 drop-shadow-md font-medium">Clinical Power Density</span>
                    </div>
                    <div className="hidden md:block w-16 h-[1px] bg-white/60"></div>
                    <div className="hidden md:block w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
                </motion.div>

                {/* Spec 3: Stimulation */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="flex items-center gap-4"
                >
                    <div className="flex flex-col items-start md:items-end text-left md:text-right">
                        <span className="font-serif text-3xl md:text-4xl text-white italic drop-shadow-lg tracking-tight">Collagen</span>
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/90 drop-shadow-md font-medium">Deep Cellular Stimulation</span>
                    </div>
                    <div className="hidden md:block w-16 h-[1px] bg-white/60"></div>
                    <div className="hidden md:block w-2 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
                </motion.div>

             </div>
          </div>
          {/* Caption */}
          <div className="mt-4 flex justify-between items-start border-b border-black/10 pb-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
               Fig 01.
            </span>
            <span className="font-serif italic text-neutral-500 text-lg tracking-tight">
               633nm + 830nm red light targeted wavelength precision.
            </span>
          </div>
        </div>

        {/* --- Header Narrative (Rest of the content) --- */}
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-7xl leading-[0.95] mb-12 tracking-tighter"
          >
            Red Light Therapy Works. <br/>
            <span className="italic text-neutral-500 tracking-tighter">But Only If The Specs Are Right.</span>
          </motion.h2>
          <div className="font-sans font-light text-lg md:text-xl leading-relaxed text-neutral-800 space-y-6 pl-0 md:pl-12 border-l-0 md:border-l border-black/10">
             <p>
               <span 
                 onClick={() => document.getElementById('clinical-studies')?.scrollIntoView({ behavior: 'smooth' })} 
                 className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-editorial-red transition-colors"
               >
                 Clinical studies
               </span> showed <strong className="font-medium">36% wrinkle reduction in 8 weeks</strong>.
             </p>
             <p>
               The catch? It only works with the exact right wavelengths at the exact right power. 
               Most masks get it wrong. Cheap ones use random LEDs with the wrong frequencies that don’t reach your collagen layer. Expensive ones charge $400 for the same tech.
             </p>
          </div>
        </div>

        {/* --- Comparison Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Card 1: Cheap Masks */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="border border-neutral-200 p-8 md:p-12 flex flex-col grayscale opacity-60 hover:opacity-100 transition-all duration-300 ease-out"
          >
             <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-bold mb-2">Cheap Masks</h3>
             <p className="font-serif text-2xl mb-8 text-neutral-500 tracking-tight">$50 - $200</p>
             
             <ul className="space-y-4 font-sans text-sm font-light flex-1">
                <li className="flex items-start">
                   <X size={16} className="mr-3 mt-1 shrink-0" />
                   <span>Wrong wavelengths</span>
                </li>
                <li className="flex items-start">
                   <X size={16} className="mr-3 mt-1 shrink-0" />
                   <span>Too weak to do anything</span>
                </li>
                <li className="flex items-start">
                   <Minus size={16} className="mr-3 mt-1 shrink-0" />
                   <span className="italic">Waste of money</span>
                </li>
             </ul>
          </motion.div>

          {/* Card 2: Luxury Masks */}
          <motion.div 
             whileHover={{ y: -5 }}
             transition={{ duration: 0.3, ease: "easeOut" }}
             className="border border-neutral-200 p-8 md:p-12 flex flex-col bg-white"
          >
             <div className="mb-2 flex flex-wrap items-baseline gap-2">
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-bold">OVERPRICED BRAND MASKS</h3>
             </div>
             <p className="font-serif text-2xl mb-2 text-neutral-500 tracking-tight">$790+</p>
             <p className="font-sans text-[10px] text-neutral-400 italic mb-8">Face + Neck sold separately</p>
             
             <ul className="space-y-4 font-sans text-sm font-light flex-1">
                <li className="flex items-start">
                   <Check size={16} className="mr-3 mt-1 shrink-0" />
                   <span>Right wavelengths</span>
                </li>
                <li className="flex items-start">
                   <Check size={16} className="mr-3 mt-1 shrink-0" />
                   <span>Right power</span>
                </li>
                <li className="flex items-start text-neutral-500">
                   <Minus size={16} className="mr-3 mt-1 shrink-0" />
                   <span className="italic">Works—but overpriced</span>
                </li>
             </ul>
          </motion.div>

          {/* Card 3: This Mask */}
          <motion.div 
             onClick={() => document.getElementById('product-display')?.scrollIntoView({ behavior: 'smooth' })}
             whileHover={{ y: -8 }}
             transition={{ duration: 0.3, ease: "easeOut" }}
             className="cursor-pointer border border-editorial-black bg-white p-8 md:p-12 flex flex-col relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(208,0,0,0.15)] transition-shadow duration-300 ease-out"
          >
             <div className="absolute top-0 right-0 bg-editorial-black text-white text-[10px] uppercase tracking-widest px-3 py-1 flex items-center gap-2">
                <Sparkle size={12} fill="currentColor" />
                THE SMART OPTION
             </div>
             <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-bold mb-2 text-editorial-red">ETERNAL YOUTH SYSTEM</h3>
             <p className="font-serif text-2xl mb-2 tracking-tight">$479</p>
             <p className="font-sans text-[10px] text-editorial-red font-medium italic mb-8">Face + Neck + Décolleté Included</p>
             
             <ul className="space-y-4 font-sans text-sm font-light flex-1">
                <li className="flex items-start">
                   <Check size={16} className="mr-3 mt-1 shrink-0 text-editorial-red" />
                   <span>633nm + 830nm</span>
                </li>
                <li className="flex items-start">
                   <Check size={16} className="mr-3 mt-1 shrink-0 text-editorial-red" />
                   <span>30 mW/cm²</span>
                </li>
                <li className="flex items-start">
                   <Check size={16} className="mr-3 mt-1 shrink-0 text-editorial-red" />
                   <span>FDA-cleared</span>
                </li>
                <li className="flex items-start font-medium mt-6 pt-6 border-t border-neutral-100">
                   <Check size={16} className="mr-3 mt-1 shrink-0 text-editorial-red" />
                   <span>Same specs. Fair price.</span>
                </li>
             </ul>
          </motion.div>
        </div>

        {/* --- Lifestyle Image (Scroll Transition) --- */}
        <div ref={imageRef} className="w-full mb-12 md:mb-24 relative border-t border-black/10 pt-12 md:pt-24">
          <div className="relative w-full h-[50vh] md:h-[70vh]">
             {/* Image 1: Default State */}
             <img 
               src="https://i.imgur.com/IJkvbn0.jpeg" 
               alt="Woman relaxing with mask" 
               className="absolute inset-0 w-full h-full object-cover object-center"
             />
             {/* Image 2: Scroll State (Fades in) */}
             <motion.img 
               src="https://i.imgur.com/qjqRCj6.jpeg" 
               alt="Mask activation and glow" 
               initial={{ opacity: 0 }}
               animate={{ opacity: isImageInView ? 1 : 0 }}
               transition={{ duration: 1.5 }}
               className="absolute inset-0 w-full h-full object-cover object-center"
             />
          </div>
        </div>

        {/* --- Bottom Narrative & CTA --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
           <div className="md:col-span-7">
              <p className="font-sans font-light text-lg leading-relaxed mb-6">
                 10 minutes a day. Hands-free. No creams, no gels, no subscriptions.
              </p>
              <p className="font-serif text-3xl md:text-5xl leading-tight italic text-editorial-black tracking-tight">
                 633nm + 830nm Red light penetrates 4mm deep where your collagen lives. Tells your cells to rebuild what stress destroyed, and gives you back your glow.
              </p>
              <p className="font-sans text-sm uppercase tracking-widest mt-8 text-neutral-500">
                 Results in 4-8 weeks. Keeps getting better.
              </p>
           </div>
           
           <div className="md:col-span-5 flex justify-center md:justify-end">
              <button 
                 className="bg-editorial-black text-white px-8 py-6 text-xs uppercase tracking-[0.25em] hover:bg-editorial-red transition-colors duration-300 w-full md:w-auto text-center shadow-xl flex flex-col items-center justify-center"
              >
                 <span className="block">Save $311 vs Overpriced Brands</span>
                 <span className="normal-case opacity-50 text-[10px] tracking-normal block mt-2">30-Day Money-Back Guarantee</span>
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};