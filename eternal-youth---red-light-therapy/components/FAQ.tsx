import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    question: "How is this different from Omnilux and CurrentBody?",
    answer: "Same clinical specs (633nm + 830nm wavelengths, 30 mW/cm² power, FDA-cleared). The difference: we include face + neck + décolleté coverage in one integrated system for $479. Omnilux sells face ($395) and neck ($395) separately for $790 total. CurrentBody's Series 2 ($469) doesn't include neck coverage. We built what should have existed from the start."
  },
  {
    question: "How long until I see results?",
    answer: "Clinical studies show 36% wrinkle reduction in 8 weeks with daily use. Most users report subtle improvements (smoother texture, better glow) within 2-3 weeks. Significant visible changes (reduced fine lines, firmer skin) typically appear around week 4-6. Results compound—the longer you use it, the better your skin gets."
  },
  {
    question: "Is this safe for sensitive skin?",
    answer: "Yes. The device uses non-invasive LED light therapy (not lasers) and medical-grade silicone materials. It's FDA-cleared and passed biocompatibility testing. Red and near-infrared light actually reduce inflammation, making this suitable for sensitive skin, rosacea, and eczema. Blue light treats acne without harsh chemicals. Start with shorter sessions (5-10 min) if concerned."
  },
  {
    question: "Can I use this with retinol or other actives?",
    answer: "Yes. LED therapy complements topical skincare. Many users apply serums before treatment for enhanced absorption. However, if you're using prescription retinoids (tretinoin), be cautious around eyes—retinoids can increase photosensitivity. Use the included eye protectors and avoid combining on the same day if skin feels irritated."
  },
  {
    question: "Do I need to buy replacement parts or gels?",
    answer: "No. Unlike some devices (NuFace requires proprietary gel, Omnilux recommends serums), this works on clean, bare skin. No consumables. No subscription. LEDs last 50,000+ hours (decades of daily use). The only ongoing cost is electricity to charge (negligible—about $2/year)."
  },
  {
    question: "What if it doesn't work for me?",
    answer: "30-day money-back guarantee. Use it consistently for 4 weeks. If you're not satisfied, email us at support@eternalyouth.com for a full refund. You only pay return shipping. No questions asked. We're confident in the clinical data—this works when used correctly."
  },
  {
    question: "How often should I use it?",
    answer: "Daily for best results (10 minutes/day). Clinical studies used 5x/week minimum. Think of it like working out—consistency matters more than intensity. Missing a few days won't ruin progress, but regular use compounds results. Most users build it into their morning or nighttime routine."
  },
  {
    question: "Does it hurt? Is there downtime?",
    answer: "No pain, no downtime. LED therapy feels like gentle warmth on your skin (some people feel nothing). No redness, no peeling, no recovery period. You can use it before work, before events, anytime. Unlike lasers, microneedling, or chemical peels, there's zero recovery needed."
  },
  {
    question: "Will this work on dark skin tones?",
    answer: "Yes. Red and near-infrared light penetrate all skin tones safely. Unlike some laser treatments (which can cause hyperpigmentation on darker skin), LED therapy works by stimulating cellular processes, not targeting melanin. Safe for all Fitzpatrick skin types (I-VI)."
  },
  {
    question: "What's your return/warranty policy?",
    answer: "• 30-day money-back guarantee (full refund if unsatisfied)\n• 1-year manufacturer warranty (covers defects)\n• Free shipping on all US orders\n• Easy returns—email us and we'll send instructions\n• Response within 24 hours"
  },
  {
    question: "What are your shipping options?",
    answer: "We offer free standard shipping on all US orders. Your order ships within 2-3 business days. International shipping is available—rates calculated at checkout based on your location. All orders include tracking information sent to your email."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-editorial-white border-t border-black/10">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 tracking-tight text-editorial-black">
          Frequently Asked <span className="italic text-neutral-400">Questions</span>
        </h2>
        
        <div className="grid grid-cols-1 border-b border-black/10">
          {faqItems.map((item, idx) => (
            <div key={idx} className="border-t border-black/10">
              <button 
                onClick={() => toggle(idx)}
                className="w-full py-8 flex justify-between items-center text-left hover:bg-neutral-50 transition-colors group px-2 md:px-4"
              >
                <span className="font-sans text-xs md:text-sm uppercase tracking-[0.15em] font-medium text-editorial-black pr-8 leading-relaxed">
                  {item.question}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`text-neutral-400 shrink-0 transition-transform duration-300 group-hover:text-editorial-black ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 px-2 md:px-4 pt-2">
                        <p className="text-neutral-600 font-light leading-relaxed whitespace-pre-line text-base max-w-3xl">
                            {item.answer}
                        </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-16 text-neutral-400 font-sans text-xs uppercase tracking-widest">
          Still have questions? <a href="mailto:support@eternalyouth.com" className="text-editorial-black underline hover:text-editorial-red transition-colors">Email us</a>
        </p>
        
      </div>
    </section>
  );
};