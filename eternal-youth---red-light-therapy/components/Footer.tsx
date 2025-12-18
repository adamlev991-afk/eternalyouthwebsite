import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-editorial-black border-t border-black py-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end">
        
        <div>
           <img 
             src="https://i.imgur.com/RGyYGEW.png" 
             alt="Eternal Youth" 
             className="h-10 w-auto mb-6 brightness-0" 
           />
           <p className="text-[10px] uppercase tracking-widest opacity-50">Medical Grade Light Therapy</p>
        </div>

        <div className="mt-12 md:mt-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12 text-xs font-medium uppercase tracking-widest">
           {['Science', 'Reviews', 'Warranty', 'Contact'].map((item) => (
             <a key={item} href="#" className="relative group overflow-hidden inline-block pb-1">
               <span className="relative z-10 group-hover:text-editorial-red transition-colors duration-300">{item}</span>
               <span className="absolute bottom-0 left-0 w-full h-[1px] bg-editorial-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
             </a>
           ))}
        </div>

      </div>
      <div className="container mx-auto px-6 md:px-12 mt-24 text-[10px] opacity-40 flex justify-between">
         <span>© 2024 Eternal Youth.</span>
         <span>Designed with precision.</span>
      </div>
    </footer>
  );
};