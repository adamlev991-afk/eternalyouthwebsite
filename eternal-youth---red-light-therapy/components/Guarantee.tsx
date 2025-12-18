import React from 'react';
import { ArrowRight, ShieldCheck, RefreshCw, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-editorial-white py-24 px-6 md:px-12 border-t border-black/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left: Typographic Visual */}
          <div className="relative border border-black/10 p-12 md:p-16 flex flex-col items-center justify-center text-center aspect-square md:aspect-auto h-full min-h-[400px]">
             <div className="absolute inset-4 border border-black/5 pointer-events-none"></div>
             
             {/* Seal Container */}
             <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 flex items-center justify-center">
                 {/* Rotating Text Ring */}
                 <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 rounded-full border border-black/10"
                 >
                    <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                        <defs>
                            <path
                                id="circlePath"
                                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                            />
                        </defs>
                        <text fontSize="8" className="uppercase tracking-[0.28em] fill-neutral-400 font-medium font-sans">
                            <textPath href="#circlePath" startOffset="0%" textLength="228">
                                 Risk Free Trial • 30 Day Guarantee • Satisfaction •
                            </textPath>
                        </text>
                    </svg>
                 </motion.div>
                 
                 {/* Static Number */}
                 <div className="font-serif text-6xl md:text-8xl text-editorial-black relative z-10 pb-6">30</div>
             </div>
             
             <h3 className="font-serif text-3xl italic text-neutral-400">Days to Decide</h3>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-editorial-red"></div>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-editorial-red font-bold">The Promise</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl text-editorial-black mb-8 leading-[0.9] tracking-tight">
              Love your glow,<br/>or it's free.
            </h2>
            
            <p className="font-sans font-light text-lg text-neutral-600 mb-10 leading-relaxed">
              We know buying skincare devices online can be scary. That's why we remove the risk. 
              Use the Eternal Youth System for 30 days. If you don't see the results you want, send it back for a full refund.
            </p>

            <div className="space-y-8 mb-12">
                <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 flex items-center justify-center border border-black/10 shrink-0 group-hover:border-editorial-black transition-colors">
                        <ShieldCheck strokeWidth={1} className="text-editorial-black" />
                    </div>
                    <div>
                        <h4 className="font-serif text-xl mb-1 group-hover:text-editorial-red transition-colors">Use it daily.</h4>
                        <p className="font-sans text-xs text-neutral-500 font-light leading-relaxed">
                            Don't keep it in the box. We want you to use it. Real results take consistency.
                        </p>
                    </div>
                </div>
                
                <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 flex items-center justify-center border border-black/10 shrink-0 group-hover:border-editorial-black transition-colors">
                        <Mail strokeWidth={1} className="text-editorial-black" />
                    </div>
                    <div>
                        <h4 className="font-serif text-xl mb-1 group-hover:text-editorial-red transition-colors">Easy Returns.</h4>
                        <p className="font-sans text-xs text-neutral-500 font-light leading-relaxed">
                           Not satisfied? Email support@eternalyouth.com. We'll guide you through the return.
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 flex items-center justify-center border border-black/10 shrink-0 group-hover:border-editorial-black transition-colors">
                        <RefreshCw strokeWidth={1} className="text-editorial-black" />
                    </div>
                    <div>
                        <h4 className="font-serif text-xl mb-1 group-hover:text-editorial-red transition-colors">Full Refund.</h4>
                        <p className="font-sans text-xs text-neutral-500 font-light leading-relaxed">
                           Once we receive the device, we refund 100% of the product price. No hidden fees.
                        </p>
                    </div>
                </div>
            </div>

            <button className="group bg-editorial-black text-white px-8 py-5 text-[11px] uppercase tracking-[0.25em] hover:bg-editorial-red transition-colors duration-300 w-full md:w-auto flex items-center justify-center gap-4">
               Start Your Trial
               <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
          </div>

        </div>
      </div>
    </section>
  );
};