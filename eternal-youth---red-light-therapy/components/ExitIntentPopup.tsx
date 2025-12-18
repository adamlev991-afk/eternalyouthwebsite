import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if previously shown
    const shownInStorage = localStorage.getItem('exitPopupShown');
    if (shownInStorage) {
        setHasShown(true);
        return;
    }

    let timeOnPage = 0;
    const timer = setInterval(() => {
      timeOnPage += 1;
    }, 1000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (
        !hasShown && 
        !isVisible && 
        e.clientY <= 0 && // Mouse leaves top of viewport
        timeOnPage >= 5 && // Show after 5 seconds for easier testing/impact
        window.scrollY > 100 // User has engaged slightly
      ) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Only run on desktop
    if (window.innerWidth > 1024) {
        document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(timer);
    };
  }, [hasShown, isVisible]);

  const closeModal = () => {
    setIsVisible(false);
    localStorage.setItem('exitPopupShown', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem('exitPopupShown', 'true');
    setTimeout(() => {
        setIsVisible(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-editorial-white shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]"
          >
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 text-black/20 hover:text-editorial-red transition-colors"
            >
              <X size={24} strokeWidth={1} />
            </button>

            {/* Left Column: Image */}
            <div className="w-full md:w-5/12 relative h-48 md:h-auto overflow-hidden">
               <img 
                 src="https://i.imgur.com/0fhRHLs.jpeg" 
                 alt="Eternal Youth Glow" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-black/10 mix-blend-multiply" />
               <div className="absolute bottom-4 left-4 text-white md:hidden">
                  <p className="font-serif text-2xl italic">Don't fade away.</p>
               </div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full md:w-7/12 p-8 md:p-16 flex flex-col justify-center relative bg-editorial-white">
               
               {!submitted ? (
                 <>
                    <div className="mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-editorial-red animate-pulse"></span>
                        <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-editorial-red font-medium">Wait</span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl text-editorial-black mb-4 leading-[0.9] tracking-tight">
                        Unlock Your <br/>
                        <span className="italic text-neutral-500">True Potential</span>
                    </h2>

                    <p className="font-sans text-neutral-600 font-light mb-8 leading-relaxed max-w-sm">
                        Join our list for clinical skin tips and receive <strong className="font-medium text-editorial-black">10% off</strong> your first Eternal Youth System order.
                    </p>

                    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                        <div className="relative group">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                required
                                className="w-full bg-transparent border-b border-black/20 py-3 text-editorial-black placeholder:text-neutral-400 focus:outline-none focus:border-editorial-black transition-colors font-sans font-light"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-editorial-black text-white py-4 px-6 text-[11px] uppercase tracking-[0.25em] hover:bg-editorial-red transition-colors duration-300 flex items-center justify-center gap-2 group"
                        >
                            <span>Unlock 10% Off</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="mt-6 text-[9px] uppercase tracking-widest text-neutral-400">
                        Limited time offer. Unsubscribe anytime.
                    </p>
                 </>
               ) : (
                 <div className="text-center py-12 animate-in fade-in duration-500">
                    <div className="w-16 h-16 rounded-full bg-[#F5F5F0] flex items-center justify-center mx-auto mb-6">
                        <Sparkle size={24} className="text-editorial-black" />
                    </div>
                    <h3 className="font-serif text-3xl mb-2 text-editorial-black">Welcome to the Club.</h3>
                    <p className="font-sans text-neutral-500 font-light mb-6">Check your inbox for your code.</p>
                    <button onClick={closeModal} className="text-[10px] uppercase tracking-widest border-b border-black/20 hover:border-editorial-black pb-0.5 transition-colors">
                        Continue Shopping
                    </button>
                 </div>
               )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};