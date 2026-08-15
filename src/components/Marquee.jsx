"use client";

import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="bg-slate-900 text-white py-3">
      <Marquee speed={60} pauseOnHover={true}>
        📚 New Arrivals: Atomic Habits &nbsp;&nbsp;&nbsp;
        ⭐ Special Membership Discount Available &nbsp;&nbsp;&nbsp;
        🔥 Trending: The Psychology of Money &nbsp;&nbsp;&nbsp;
        📖 Borrow Books Anytime, Anywhere &nbsp;&nbsp;&nbsp;
      </Marquee>
    </div>
  );
};

export default MarqueeSection;