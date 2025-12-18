import React from 'react';

export const AnnouncementBanner: React.FC = () => {
  return (
    <div className="bg-[#DC2626] text-white overflow-hidden h-[36px] flex items-center relative z-[60]">
      <div className="animate-scroll whitespace-nowrap flex items-center">
        {/* Repeating content for seamless loop */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <span key={i} className="inline-block px-4 text-sm font-sans font-semibold">
            Complete face + neck + décolleté system - $479 (competitors charge $950+) • Free skincare guide included •
          </span>
        ))}
      </div>
    </div>
  );
};