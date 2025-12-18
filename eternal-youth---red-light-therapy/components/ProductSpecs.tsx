import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const specs = [
  {
    title: "Device Specifications",
    content: [
      "Total LEDs: 234 (114 face + 120 neck)",
      "Wavelengths: 633nm (red), 830nm (near-infrared), 415nm (blue)",
      "Power Output: 30 mW/cm² (clinical-grade intensity)",
      "Max Power Consumption: 12W",
      "4 Treatment Modes: Red, Blue, Pink (Red+Blue), Near-Infrared",
      "Timer: Adjustable 1-30 minutes (10 min recommended)"
    ]
  },
  {
    title: "Battery & Charging",
    content: [
      "Battery Capacity: 4000mAh rechargeable lithium-ion",
      "Charge Time: 3 hours to full charge",
      "Usage Time: 3.5 hours per full charge (20+ sessions)",
      "Charging: Micro-USB cable (included)"
    ]
  },
  {
    title: "Materials & Safety",
    content: [
      "Material: Medical-grade silicone (hypoallergenic)",
      "Weight: 395g (14 oz) - lightweight and comfortable",
      "FDA-cleared Class II medical device",
      "Certifications: 510K, FDA, CE, FCC, RoHS",
      "Passed biocompatibility testing"
    ]
  },
  {
    title: "What's Included",
    content: [
      "Face mask with 114 LEDs",
      "Neck piece with 120 LEDs",
      "Wireless remote control",
      "2 pairs adjustable velcro straps",
      "Micro-USB charging cable",
      "User manual",
      "2 pairs silicone eye protectors",
      "Free LED skincare guide (digital)",
      "1-year manufacturer warranty"
    ]
  },
  {
    title: "Warranty & Support",
    content: [
      "1-Year Limited Warranty: Covers manufacturing defects",
      "30-Day Money-Back Guarantee: Full refund if unsatisfied",
      "Email Support: support@eternalyouth.com",
      "Response Time: Within 24 hours"
    ]
  }
];

export const ProductSpecs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 px-8 bg-white border-t border-black/10">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="font-serif text-4xl text-center mb-12 tracking-tight">Technical Specifications</h2>
        
        <div className="border-t border-gray-200">
          {specs.map((spec, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button 
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center text-left py-6 group hover:text-editorial-red transition-colors"
              >
                <h3 className="font-sans font-semibold text-lg">{spec.title}</h3>
                <span className="text-xl font-light">
                    {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
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
                        <div className="pb-6">
                            <ul className="text-neutral-600 font-light space-y-2 pl-4">
                            {spec.content.map((item, i) => (
                                <li key={i} className="list-disc pl-2">{item}</li>
                            ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};