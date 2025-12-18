import React from 'react';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-editorial-white border-t border-black/10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-5xl md:text-7xl text-editorial-black tracking-tighter leading-none mb-2">
            Simple. Effective.
          </h2>
          <h2 className="font-serif text-5xl md:text-7xl text-neutral-400 italic tracking-tighter leading-none">
            10 Minutes a Day.
          </h2>
        </div>
        
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Step 1 */}
          <div className="flex flex-col text-center group">
            <div className="mb-8 overflow-hidden aspect-[4/5] bg-neutral-100">
                <img 
                  src="https://placehold.co/600x750/F5F5F0/1a1a1a?text=Step+1" 
                  alt="Cleanse" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-medium mb-3 text-editorial-black">Step 1: Cleanse Your Face</h3>
            <p className="font-sans text-sm font-light text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Remove makeup and apply your regular skincare (optional). Clean skin = better results.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col text-center group">
            <div className="mb-8 overflow-hidden aspect-[4/5] bg-neutral-100">
                <img 
                  src="https://i.imgur.com/3T2OJH6.jpeg" 
                  alt="Wear Mask" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-medium mb-3 text-editorial-black">Step 2: Wear for 10 Minutes</h3>
            <p className="font-sans text-sm font-light text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Place mask on face, secure neck piece, press start. Hands-free—read, scroll, relax.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col text-center group">
            <div className="mb-8 overflow-hidden aspect-[4/5] bg-neutral-100">
                <img 
                  src="https://placehold.co/600x750/F5F5F0/1a1a1a?text=Step+3" 
                  alt="Go About Your Day" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-medium mb-3 text-editorial-black">Step 3: Go About Your Day</h3>
            <p className="font-sans text-sm font-light text-neutral-600 leading-relaxed max-w-xs mx-auto">
              That's it. Do it daily for 8 weeks. Results compound with consistency.
            </p>
          </div>

        </div>

        {/* Closing Text */}
        <div className="mt-24 text-center">
            <p className="font-serif text-3xl text-editorial-black mb-2 tracking-tight">
                No creams. No gels. No subscriptions.
            </p>
            <p className="font-serif text-2xl text-neutral-400 italic tracking-tight">
                Just 10 minutes while you exist.
            </p>
        </div>
        
      </div>
    </section>
  );
};