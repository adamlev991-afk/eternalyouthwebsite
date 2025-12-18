import React from 'react';
import { motion } from 'framer-motion';

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-editorial-black text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-6xl mb-8 italic tracking-tighter">
                Reclaim your confidence.
            </h2>
            <button 
                className="bg-white text-editorial-black px-10 py-6 text-xs uppercase tracking-[0.25em] hover:bg-editorial-red hover:text-white transition-colors duration-300 w-full md:w-auto"
            >
                Get Yours Risk-Free
            </button>
            <p className="mt-8 text-neutral-500 text-xs uppercase tracking-widest">
                Ships Free in 2-3 Business Days
            </p>
        </div>
    </section>
  );
};