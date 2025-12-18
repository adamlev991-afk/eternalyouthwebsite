import React from 'react';
import { X } from 'lucide-react';

export const EmotionalHook: React.FC = () => {
  return (
    <section className="bg-editorial-white text-editorial-black py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* --- Section 1: The Hook (Swapped to top) --- */}
        <div className="flex flex-col items-center text-center mb-32 md:mb-40">
            <div className="w-[1px] h-24 bg-black/10 mb-12"></div>
            <p className="font-serif text-5xl md:text-8xl leading-[0.9] tracking-tighter mb-8">
              Your skin isn't aging. <br/>
              <span className="italic text-neutral-400">It's exhausted.</span>
            </p>
            <p className="font-sans text-sm md:text-base uppercase tracking-[0.2em] font-medium opacity-60">
              And you need more than another cream.
            </p>
        </div>

        {/* --- Section 2: The Truth (Swapped to bottom) --- */}
        <div className="grid md:grid-cols-12 gap-12">
           <div className="md:col-span-4">
              <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-bold text-neutral-400 sticky top-32">
                 The Dermatologist's Secret
              </h3>
           </div>
           <div className="md:col-span-8">
              <p className="font-serif text-3xl mb-12">Here's what they didn't tell you:</p>
              <ul className="space-y-12">
               <li className="flex items-start gap-6 group">
                 <div className="mt-2 shrink-0 opacity-30 group-hover:opacity-100 transition-opacity">
                    <X size={20} className="text-editorial-red" strokeWidth={2} />
                 </div>
                 <div>
                   <span className="block font-serif text-2xl mb-4">Topicals can't reach where collagen lives.</span>
                   <div className="font-sans text-base font-light text-neutral-600 leading-relaxed space-y-4">
                     <p>Your $200 serum sits on the surface. Collagen production happens 4mm deep in the dermis—no cream can penetrate that far.</p>
                     <p className="font-medium text-editorial-black">Only specific wavelengths of light can reach the actual damage.</p>
                   </div>
                 </div>
               </li>
               <li className="flex items-start gap-6 group">
                  <div className="mt-2 shrink-0 opacity-30 group-hover:opacity-100 transition-opacity">
                    <X size={20} className="text-editorial-red" strokeWidth={2} />
                 </div>
                 <div>
                   <span className="block font-serif text-2xl mb-4">The gap between "pretty lights" and "actually works" is precise.</span>
                   <div className="font-sans text-base font-light text-neutral-600 leading-relaxed space-y-4">
                     <p>Most LED masks look impressive but miss the mark: wrong wavelengths (±15nm tolerance) and weak power (&lt;15 mW/cm²).</p>
                     <p>Clinical devices hit 633-635nm (±5nm) at 30 mW/cm². This specificity is why in-office treatments cost $700/session.</p>
                   </div>
                 </div>
               </li>
               <li className="flex items-start gap-6 group">
                  <div className="mt-2 shrink-0 opacity-30 group-hover:opacity-100 transition-opacity">
                    <X size={20} className="text-editorial-red" strokeWidth={2} />
                 </div>
                 <div>
                   <span className="block font-serif text-2xl mb-4">Dermatologists charge $700/session for the same technology.</span>
                   <div className="font-sans text-base font-light text-neutral-600 leading-relaxed space-y-4">
                     <p>In-office LED therapy uses identical wavelengths and power density. You're paying for the device plus their time, per visit, forever.</p>
                     <p className="font-medium text-editorial-black">Or you can own the device once.</p>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
        </div>

      </div>
    </section>
  );
};