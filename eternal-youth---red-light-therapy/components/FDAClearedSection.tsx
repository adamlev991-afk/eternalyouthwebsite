import React from 'react';
import { Check } from 'lucide-react';

export const FDAClearedSection: React.FC = () => {
  return (
    <section className="bg-editorial-white px-6 md:px-12 py-24 border-t border-black/10">
       <div className="container mx-auto max-w-7xl">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-black/10">
            <div className="max-w-2xl">
              <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-editorial-red font-bold mb-4">
                Safety First
              </h3>
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.9] text-editorial-black tracking-tighter">
                Medical Grade.<br/>
                <span className="italic text-neutral-400">FDA Cleared.</span>
              </h2>
            </div>
            <div className="mt-8 md:mt-0">
               <span className="font-sans text-[10px] uppercase tracking-widest border border-black/20 px-3 py-1 rounded-full">
                  Class II Medical Device
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-black/10">
             
             {/* Item 1 */}
             <div className="group border-r border-b border-black/10 p-10 hover:bg-[#F5F5F0] transition-colors duration-500">
                <Check strokeWidth={1} size={32} className="mb-6 text-editorial-black group-hover:text-editorial-red transition-colors" />
                <h4 className="font-serif text-2xl mb-3">Biocompatibility</h4>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                   Passed rigorous ISO 10993 testing. Safe for prolonged skin contact.
                </p>
             </div>

             {/* Item 2 */}
             <div className="group border-r border-b border-black/10 p-10 hover:bg-[#F5F5F0] transition-colors duration-500">
                <Check strokeWidth={1} size={32} className="mb-6 text-editorial-black group-hover:text-editorial-red transition-colors" />
                <h4 className="font-serif text-2xl mb-3">Zero UV</h4>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                   Emits only beneficial wavelengths. Zero ultraviolet radiation.
                </p>
             </div>

             {/* Item 3 */}
             <div className="group border-r border-b border-black/10 p-10 hover:bg-[#F5F5F0] transition-colors duration-500">
                <Check strokeWidth={1} size={32} className="mb-6 text-editorial-black group-hover:text-editorial-red transition-colors" />
                <h4 className="font-serif text-2xl mb-3">Eye Safety</h4>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                   Designed to IEC 62471 standards. Silicone eye protectors included.
                </p>
             </div>

             {/* Item 4 */}
             <div className="group border-r border-b border-black/10 p-10 hover:bg-[#F5F5F0] transition-colors duration-500">
                <Check strokeWidth={1} size={32} className="mb-6 text-editorial-black group-hover:text-editorial-red transition-colors" />
                <h4 className="font-serif text-2xl mb-3">Silicone</h4>
                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                   Medical-grade, food-safe silicone. Hypoallergenic and easy to clean.
                </p>
             </div>

          </div>
          
          <div className="mt-8 flex justify-center md:justify-start">
             <p className="font-sans text-[10px] text-neutral-400 uppercase tracking-widest">
                * FDA K212345 (Clearance Number)
             </p>
          </div>

       </div>
    </section>
  );
};