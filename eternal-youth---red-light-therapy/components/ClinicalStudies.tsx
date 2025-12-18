import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

interface Study {
  title: string;
  journal?: string;
  type?: string;
  results: string;
  link: string;
  why: string;
  extraLinks?: { title: string; url: string }[];
}

const tier1: Study[] = [
  {
    title: "The \"36% Reduction\" Study (Lee et al., 2007)",
    journal: "Journal of Photochemistry and Photobiology B",
    type: "Randomized, placebo-controlled, double-blind, split-face trial",
    results: "36% wrinkle reduction, 19% elasticity increase",
    link: "https://pubmed.ncbi.nlm.nih.gov/17566756/",
    why: "This is THE study. Gold standard methodology. Peer-reviewed. Published in a respected journal."
  },
  {
    title: "Combination Therapy Study (Russell et al., 2005)",
    journal: "Journal of Cosmetic & Laser Therapy",
    type: "Clinical efficacy study",
    results: "633nm + 830nm combination effective for facial rejuvenation",
    link: "https://pubmed.ncbi.nlm.nih.gov/16414908/",
    why: "Specifically tested 633nm + 830nm combination (Exact EternalYouth mask wavelengths)."
  },
  {
    title: "Collagen Density Study (Weiss et al., 2014)",
    journal: "Photomedicine and Laser Surgery",
    type: "Controlled trial",
    results: "Increased intradermal collagen density, reduced wrinkles and roughness",
    link: "https://pubmed.ncbi.nlm.nih.gov/24286286/",
    why: "Proved actual collagen increase (not just surface improvement)."
  },
  {
    title: "Combined Wavelength Study (Shim et al., 2006)",
    journal: "Lasers in Surgery and Medicine",
    type: "Clinical study",
    results: "633nm + 830nm combo effective for photodamaged skin",
    link: "https://pubmed.ncbi.nlm.nih.gov/16989189/",
    why: "Validated combination therapy specifically."
  }
];

const tier2: Study[] = [
  {
    title: "NASA LED Wound Healing Study (Whelan et al., 2001)",
    journal: "Journal of Clinical Laser Medicine & Surgery",
    type: "Funded by NASA Marshall Space Flight Center",
    results: "140-200% cell growth increase. 40% improvement in musculoskeletal injuries.",
    link: "https://pubmed.ncbi.nlm.nih.gov/11776448/",
    why: "This is where it all started. NASA-funded. Military-validated. Proved LEDs work for healing.",
    extraLinks: [
      { title: "NASA Spinoff Article (2005)", url: "https://spinoff.nasa.gov/Spinoff2005/hm_1.html" },
      { title: "NASA Spinoff Article (Updated)", url: "https://spinoff.nasa.gov/NASA-Research-Illuminates-Medical-Uses-of-Light" },
      { title: "NASA Technical Report", url: "https://ntrs.nasa.gov/citations/20030001599" },
      { title: "NASA Press Release (2000)", url: "https://www.sciencedaily.com/releases/2000/12/001219195848.htm" }
    ]
  }
];

const tier3And4: Study[] = [
  {
    title: "Collagen & Elastin Expression Study (Kim et al., 2021)",
    journal: "International Journal of Molecular Sciences",
    type: "In vitro and tissue study",
    results: "Red + NIR light combination increased collagen and elastin production",
    link: "https://pubmed.ncbi.nlm.nih.gov/33594706/",
    why: "Shows the actual mechanism (fibroblasts producing more collagen)."
  },
  {
    title: "Photobiomodulation Review (Couturaud et al., 2023)",
    journal: "Skin Research and Technology",
    type: "Recent comprehensive review",
    results: "Red light photobiomodulation reverses skin aging signs",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/srt.13391",
    why: "Most recent (2023) validation of the science."
  },
  {
    title: "Orthopedic Review of NASA Discovery (Cotler et al., 2015)",
    journal: "Current Orthopaedic Practice (PMC)",
    type: "Medical review article",
    results: "Medical establishment acknowledging NASA research validity",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4272231/",
    why: "Medical establishment acknowledging NASA research validity."
  }
];

const FormatResults: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\d+(?:[.,]\d+)?%?)/);
  return (
    <>
      {parts.map((part, i) =>
        /\d/.test(part) ? (
          <span key={i} className="italic font-light">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

const FeaturedStudy: React.FC<{ study: Study }> = ({ study }) => (
  <div className="flex flex-col h-full border-black/10 px-6 lg:px-10 md:first:pl-0 md:last:pr-0 md:border-r md:last:border-r-0 border-t md:border-t-0 first:border-t-0 py-16 md:py-0 first:pt-0">
    
    <div className="mb-8">
       <div className="flex justify-between items-start mb-4">
         <span className="text-[10px] uppercase tracking-widest text-neutral-400 border border-neutral-200 px-2 py-1 rounded-sm">
            Clinical Trial
         </span>
         <a href={study.link} target="_blank" rel="noopener noreferrer" className="hover:text-editorial-red transition-colors group">
            <ArrowUpRight size={16} strokeWidth={1} className="text-neutral-400 group-hover:text-editorial-red transition-colors" />
         </a>
       </div>
       
       <a href={study.link} target="_blank" rel="noopener noreferrer" className="group block">
          <h3 className="font-serif text-2xl leading-tight text-editorial-black mb-1 group-hover:text-editorial-red transition-colors">
            {study.title.split('(')[0]}
          </h3>
          <p className="text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-neutral-600 transition-colors">
            {study.journal}
          </p>
       </a>
    </div>

    <p className="font-serif text-lg leading-relaxed text-neutral-500 mb-12 italic flex-1">
      "{study.why}"
    </p>
    
    <div className="mt-auto pt-6 border-t border-black/5">
      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3 font-bold">
        Observed Results
      </p>
      <p className="font-serif text-3xl md:text-4xl leading-[0.95] tracking-tighter text-editorial-black">
        <FormatResults text={study.results} />
      </p>
    </div>
  </div>
);

const StudyItem: React.FC<{ study: Study }> = ({ study }) => (
  <div className="border-t border-black/10 py-16 md:py-24 group hover:bg-neutral-50 transition-colors px-6 md:px-8">
    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-8">
      <div className="md:w-3/5">
        <a 
          href={study.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-serif text-2xl md:text-3xl leading-tight hover:text-editorial-red transition-colors inline-flex items-baseline gap-2 tracking-tight group-hover:underline decoration-1 underline-offset-4"
        >
          {study.title}
          <ArrowUpRight size={16} className="opacity-40" />
        </a>
        <div className="mt-3 text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 font-medium">
          {study.journal}
        </div>
      </div>
      <div className="md:w-2/5 md:text-right">
        <p className="font-sans text-xs text-neutral-600 mb-1 italic">
          {study.type}
        </p>
      </div>
    </div>
    
    <div className="grid md:grid-cols-12 gap-8 mt-4">
       <div className="md:col-span-8">
          <p className="font-sans text-sm md:text-base font-medium text-editorial-black mb-4">
            <span className="opacity-50 uppercase text-[10px] tracking-widest mr-2">Results:</span> 
            {study.results}
          </p>
          <p className="font-serif text-xl italic text-neutral-500 leading-relaxed tracking-tight">
            "{study.why}"
          </p>
       </div>
       
       {study.extraLinks && (
         <div className="md:col-span-12 flex flex-wrap gap-3 mt-4">
           {study.extraLinks.map((link, idx) => (
             <a 
               key={idx}
               href={link.url}
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[10px] uppercase tracking-widest border border-neutral-200 px-3 py-1 hover:border-editorial-black hover:bg-editorial-black hover:text-white transition-all"
             >
               {link.title}
             </a>
           ))}
         </div>
       )}
    </div>
  </div>
);

export const ClinicalStudies: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const totalStudies = tier1.length + tier2.length + tier3And4.length;

  return (
    <section id="clinical-studies" className="bg-editorial-white text-editorial-black py-24 px-6 md:px-12 border-t border-black/10">
      <div className="container mx-auto max-w-7xl">
        
        <div className="max-w-3xl mb-32">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 tracking-tighter">
            Peer-Reviewed. <br/>
            <span className="italic text-neutral-500">Clinical Validation.</span>
          </h2>
          <p className="font-sans text-lg font-light leading-relaxed max-w-2xl">
            This isn't marketing fluff. This is 40 years of research from NASA, dermatologists, and photobiology labs. 
            We use the exact wavelengths referenced in these studies.
          </p>
        </div>

        {/* Initially Visible: Top 3 Studies (Columns) */}
        <div className="mb-20">
           <div className="mb-12 flex items-baseline gap-4">
             <h3 className="font-serif text-2xl italic tracking-tight">Gold Standard Clinical Trials</h3>
             <div className="h-[1px] bg-black/10 flex-1"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0">
            {tier1.slice(0, 3).map((study, idx) => (
              <FeaturedStudy key={idx} study={study} />
            ))}
          </div>
        </div>

        {/* Collapsible Content */}
        {isExpanded && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500 border-t border-black/10 mt-20 pt-12">
             
             {/* Remainder of Tier 1 */}
             <div className="flex flex-col">
                {tier1.slice(3).map((study, idx) => (
                  <StudyItem key={idx + 3} study={study} />
                ))}
             </div>

             {/* Tier 2 */}
             <div className="mt-20 mb-20">
                <div className="mb-12">
                  <h3 className="font-serif text-2xl italic tracking-tight">NASA Research (The Origin)</h3>
                </div>
                <div className="flex flex-col">
                  {tier2.map((study, idx) => (
                    <StudyItem key={idx} study={study} />
                  ))}
                </div>
             </div>

             {/* Tier 3 & 4 */}
             <div>
                <div className="mb-12">
                  <h3 className="font-serif text-2xl italic tracking-tight">Mechanisms & Medical Reviews</h3>
                </div>
                <div className="flex flex-col">
                  {tier3And4.map((study, idx) => (
                    <StudyItem key={idx} study={study} />
                  ))}
                </div>
             </div>
          </div>
        )}

        {/* Toggle Button */}
        <div className="mt-20 flex justify-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-3 px-8 py-4 border border-black/10 hover:border-editorial-black hover:bg-editorial-black hover:text-white transition-all uppercase text-[10px] tracking-[0.2em]"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp size={14} className="group-hover:stroke-white" />
              </>
            ) : (
              <>
                View All {totalStudies} Studies <ChevronDown size={14} className="group-hover:stroke-white" />
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};