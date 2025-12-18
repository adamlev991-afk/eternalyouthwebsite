import React from 'react';

export const Narrative: React.FC = () => {
  return (
    <section className="bg-brand-cream text-brand-dark py-24 md:py-36 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="font-serif text-2xl md:text-3xl leading-relaxed tracking-tight">
          Two years ago, I felt confident—present, radiant, and like myself. 
          But stress, sleepless nights, and the pressure of keeping everything together slowly erased the woman I recognized.
        </p>
        <div className="my-8 flex justify-center">
           <span className="text-red-600 text-xl">✦</span>
        </div>
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-neutral-600 italic tracking-tight">
          It wasn't just wrinkles or dark circles; it felt like I'd lost my spark. 
          I threw money at serums, vitamin C, retinol, and monthly facials, but nothing worked. 
          Then one night, scrolling through research papers at 2 am, I stumbled across a technology dermatologists had used for years...
        </p>
      </div>
    </section>
  );
};