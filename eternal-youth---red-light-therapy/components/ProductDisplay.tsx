import React, { useState } from 'react';
import { Star, Minus, Plus, ChevronDown, ShieldCheck, RefreshCw, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://i.imgur.com/dYtDAKJ.jpeg", // Front
  "https://i.imgur.com/38SGvHf.jpeg", // Side/Detail
  "https://i.imgur.com/IJkvbn0.jpeg", // In Use
  "https://i.imgur.com/qjqRCj6.jpeg", // Glow
  "https://placehold.co/550x550/F5F5F0/2C2C2C?text=Packaging",
  "https://placehold.co/550x550/F5F5F0/2C2C2C?text=Accessories"
];

const accordionData = [
  {
    title: "Device Specifications",
    content: [
      { label: "LED Count", value: "234 LEDs total\n├─ Face: 114 LEDs (342 chips)\n└─ Neck: 120 LEDs (360 chips)" },
      { label: "Wavelengths", value: "633nm (Red), 830nm (NIR)" },
      { label: "Irradiance", value: "30mW/cm² (anti-aging)" },
      { label: "Timer Range", value: "1-30 minutes adjustable" },
      { label: "Frequency", value: "0-10,000Hz pulse options" },
      { label: "Dimensions", value: "Face: 320×210mm | Neck: 330×210mm" },
      { label: "Weight", value: "395g (0.87 lbs)" },
      { label: "Power Output", value: "Max 12W" }
    ]
  },
  {
    title: "Battery & Charging",
    content: [
      { label: "Battery Type", value: "Lithium-ion 4000mAh" },
      { label: "Charge Time", value: "~3 hours (full charge)" },
      { label: "Runtime", value: "Up to 3.5 hours per charge" },
      { label: "Charging Port", value: "USB-C (cable included)" },
      { label: "Auto Shutoff", value: "Yes, timer-based" },
      { label: "Battery Indicator", value: "LED display on controller" }
    ]
  },
  {
    title: "Materials & Safety",
    content: [
      { label: "Mask Material", value: "Medical-grade silicone (FDA approved)" },
      { label: "LED Type", value: "Medical-grade LEDs" },
      { label: "Biocompatibility", value: "ISO 10993 certified" },
      { label: "Certifications", value: "FDA 510K, CE, FCC, RoHS" },
      { label: "Eye Protection", value: "2 pairs silicone protectors included" },
      { label: "Usability Testing", value: "IEC 62366-1 compliant" },
      { label: "Safe for", value: "All skin types (clinical tested)" }
    ]
  },
  {
    title: "What's Included",
    isList: true,
    items: [
      "LED Face Mask",
      "LED Neck + Décolleté Piece",
      "Remote Controller (with display)",
      "USB-C Charging Cable",
      "2 Pairs Velcro Straps",
      "2 Pairs Silicone Eye Protectors",
      "User Manual",
      "Quick Start Guide",
      "Warranty Card"
    ]
  },
  {
    title: "Warranty & Support",
    content: [
      { label: "Warranty Period", value: "2 years manufacturer warranty" },
      { label: "Coverage", value: "Manufacturing defects, LED failure, battery issues" },
      { label: "Money-Back", value: "30-day full refund guarantee" },
      { label: "Return Shipping", value: "Free within USA & Canada" },
      { label: "Support Hours", value: "Mon-Fri 9AM-6PM EST" },
      { label: "Contact Methods", value: "Email, Live Chat, Phone" },
      { label: "Replacement Parts", value: "Available for purchase" },
      { label: "Extended Warranty", value: "Optional 3-year plan ($79)" }
    ]
  },
  {
    title: "Shipping & Delivery",
    content: [
      { label: "Processing Time", value: "2-3 business days" },
      { label: "Delivery (USA)", value: "3-5 business days (free)" },
      { label: "Delivery (Canada)", value: "4-7 business days (free)" },
      { label: "Express Option", value: "1-2 days ($19.99)" },
      { label: "Tracking", value: "Provided via email" },
      { label: "Packaging", value: "Discreet, premium box" },
      { label: "International", value: "Email for quote" }
    ]
  },
  {
    title: "Payment Options",
    content: [
      { label: "Credit Cards", value: "Visa, Mastercard, Amex, Discover" },
      { label: "Digital Wallets", value: "PayPal, Apple Pay, Google Pay" },
      { label: "Buy Now Pay Later", value: "Affirm: 4 payments of $119.75 (0% APR)\nKlarna: 4 interest-free payments" },
      { label: "Currency", value: "USD, CAD accepted" },
      { label: "Secure Checkout", value: "256-bit SSL encryption" }
    ]
  }
];

export const ProductDisplay: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordions, setOpenAccordions] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleAccordion = (index: number) => {
    setOpenAccordions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleQuantity = (type: 'inc' | 'dec') => {
    if (type === 'dec' && quantity > 1) setQuantity(q => q - 1);
    if (type === 'inc') setQuantity(q => q + 1);
  };

  return (
    <>
      <section id="product-display" className="max-w-[1200px] mx-auto my-12 md:my-24 px-6 md:px-12 text-editorial-black">
        
        {/* Top Section: Gallery + Buy Box */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-48">
          
          {/* LEFT: Image Gallery */}
          <div className="flex-1 flex gap-4 md:gap-6">
            {/* Vertical Thumbnails */}
            <div className="flex-shrink-0 w-16 md:w-20 flex flex-col gap-3 md:gap-4">
              {images.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square w-full cursor-pointer object-cover transition-all duration-300 border ${
                    activeImage === idx ? 'border-editorial-black opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative aspect-square bg-[#F9F9F9]">
                <img 
                  src={images[activeImage]} 
                  alt="Eternal Youth Red Light Therapy System" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-black/5 text-editorial-black text-[9px] uppercase tracking-[0.2em] px-3 py-1.5">
                  Free Shipping
                </div>
            </div>
          </div>

          {/* RIGHT: Product Info (Buy Box) */}
          <div className="w-full lg:w-[420px] flex-shrink-0 flex flex-col pt-2">
            
            {/* Title & Rating */}
            <h2 className="font-serif text-4xl md:text-5xl text-editorial-black mb-4 leading-[0.9] tracking-tight">
              Eternal Youth <br/><span className="italic text-neutral-500">Red Light Therapy System</span>
            </h2>
            
            <div className="flex items-center gap-3 mb-8 border-b border-black/10 pb-8">
              <div className="flex text-editorial-black">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
              </div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">4.9/5 (127 reviews)</span>
            </div>

            {/* Price Block */}
            <div className="mb-10 flex items-end gap-6">
               <span className="font-serif text-5xl text-editorial-black leading-none">$479</span>
               <div className="flex flex-col mb-1">
                 <span className="text-sm text-neutral-400 line-through decoration-1">$799</span>
                 <span className="text-[10px] uppercase tracking-wider text-editorial-red font-medium">
                   Save $320
                 </span>
               </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center border border-black/20">
                    <button 
                      onClick={() => handleQuantity('dec')}
                      className="w-10 h-10 flex items-center justify-center hover:bg-neutral-100 transition-colors text-editorial-black"
                    >
                      <Minus size={14} />
                    </button>
                    <div className="w-12 text-center text-sm font-medium font-sans">{quantity}</div>
                    <button 
                      onClick={() => handleQuantity('inc')}
                      className="w-10 h-10 flex items-center justify-center hover:bg-neutral-100 transition-colors text-editorial-black"
                    >
                      <Plus size={14} />
                    </button>
                 </div>
                 <div className="text-[10px] uppercase tracking-widest text-neutral-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-editorial-red animate-pulse"></span>
                    In stock, ships today
                 </div>
              </div>

              <button className="w-full h-[56px] bg-editorial-black text-white text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-editorial-red transition-colors duration-300">
                Add to Cart
              </button>
              <button className="w-full h-[56px] border border-black/20 text-editorial-black text-[11px] uppercase tracking-[0.25em] font-medium hover:border-editorial-black hover:bg-transparent transition-colors">
                Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-black/10 pt-6 mb-8">
               <div className="flex flex-col items-center text-center gap-2">
                  <ShieldCheck size={20} strokeWidth={1} className="text-editorial-black" />
                  <span className="text-[9px] uppercase tracking-widest text-neutral-600">FDA 510K<br/>Cleared</span>
               </div>
               <div className="flex flex-col items-center text-center gap-2 border-l border-r border-black/10">
                  <RefreshCw size={20} strokeWidth={1} className="text-editorial-black" />
                  <span className="text-[9px] uppercase tracking-widest text-neutral-600">30-Day<br/>Returns</span>
               </div>
               <div className="flex flex-col items-center text-center gap-2">
                  <ShieldCheck size={20} strokeWidth={1} className="text-editorial-black" />
                  <span className="text-[9px] uppercase tracking-widest text-neutral-600">2-Year<br/>Warranty</span>
               </div>
            </div>

             {/* Payment Icons */}
            <div className="flex gap-2 opacity-40 justify-center lg:justify-start">
               {['VISA', 'MC', 'AMEX', 'PAYPAL', 'KLARNA'].map((pay) => (
                 <div key={pay} className="h-6 w-10 border border-black/30 rounded-[2px] flex items-center justify-center text-[7px] font-sans text-editorial-black bg-transparent">
                   {pay}
                 </div>
               ))}
            </div>

          </div>
        </div>

        {/* Bottom Section: Full Width Accordions */}
        <div className="w-full border-t border-black/10 mt-20 md:mt-32 pt-12">
            <h3 className="font-serif text-3xl md:text-4xl mb-12 text-editorial-black text-center md:text-left">
              Technical Specifications <span className="italic text-neutral-400">& Details</span>
            </h3>
            <div className="grid grid-cols-1 border-b border-black/10">
              {accordionData.map((item, idx) => (
                <div key={idx} className="border-t border-black/10">
                  <button 
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-6 flex justify-between items-center text-left hover:bg-neutral-50 transition-colors group px-2"
                  >
                    <span className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-editorial-black">{item.title}</span>
                    <ChevronDown 
                      size={16} 
                      className={`text-neutral-400 transition-transform duration-300 group-hover:text-editorial-black ${openAccordions[idx] ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {openAccordions[idx] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pt-2 px-2 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
                          {item.isList ? (
                            <ul className="space-y-3 col-span-2">
                              {item.items?.map((li, i) => (
                                <li key={i} className="flex items-start gap-4 text-sm font-light text-neutral-600">
                                  <span className="w-1.5 h-1.5 rounded-full bg-editorial-red mt-2 shrink-0"></span>
                                  <span>{li}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            item.content?.map((row: any, i: number) => (
                                <div key={i} className="flex flex-col border-b border-black/5 last:border-0 pb-3">
                                  <span className="font-sans text-[10px] uppercase tracking-wider text-neutral-400 mb-1">{row.label}</span>
                                  <span className="font-serif text-lg text-editorial-black whitespace-pre-line">{row.value}</span>
                                </div>
                            ))
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
        </div>

      </section>

      {/* MOBILE STICKY ADD TO CART */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-black/10 p-4 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex items-center gap-4">
          <div className="flex flex-col">
             <span className="text-[10px] uppercase text-neutral-400 line-through decoration-1">$799</span>
             <span className="font-serif text-xl text-editorial-black">$479</span>
          </div>
          <button className="flex-1 h-[48px] bg-editorial-black text-white text-[11px] uppercase tracking-[0.2em] hover:bg-editorial-red transition-colors">
            Add to Cart
          </button>
      </div>
    </>
  );
};