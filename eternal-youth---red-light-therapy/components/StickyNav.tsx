import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';

export const StickyNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      // Banner height is 36px. Once we scroll past 36px, nav becomes fixed at top.
      setIsSticky(scrollY > 36);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`w-full z-50 transition-all duration-500 ease-out mix-blend-difference text-white ${
        isSticky ? 'fixed top-0' : 'absolute top-[36px]'
      } ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <img 
          src="https://i.imgur.com/RGyYGEW.png" 
          alt="Eternal Youth" 
          className="h-8 w-auto brightness-0 invert" 
        />
        
        {/* Desktop CTA with Vertical Rotation Animation - Wider to fit text */}
        <div className="hidden md:flex items-center gap-8">
            <button className="text-[10px] uppercase tracking-[0.2em] group relative overflow-hidden h-4 w-60 text-center">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                    Order Now
                </div>
                <div className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
                    Bring Back Your Glow
                </div>
            </button>
        </div>

        <button className="md:hidden">
          <Menu size={24} strokeWidth={1} />
        </button>
      </div>
    </nav>
  );
};