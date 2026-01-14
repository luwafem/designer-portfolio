import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { designerInfo } from '../data/designerData';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-neutral-50 flex flex-col justify-center overflow-hidden">
      
      {/* 1. Vertical Brand Element (Left Side) */}
      <div className="absolute left-10 bottom-24 hidden xl:block">
        <p className="rotate-[-90deg] origin-left text-[10px] uppercase tracking-[0.5em] text-neutral-400 whitespace-nowrap">
          ESTABLISHED — {new Date().getFullYear() - 15} • CURATED INTERIORS
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative">
        <div className="relative z-10">
          
          {/* 2. Headline: Large, Elegant, and Overlapping */}
          <div className="mb-[-4rem] lg:mb-[-6rem] relative z-20">
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-serif leading-none text-neutral-900 tracking-tighter">
              African <br />
              <span className="pl-12 lg:pl-32 italic font-light text-neutral-800">Futures</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-end gap-12">
            
            {/* 3. Main Visual: Large & Minimalist */}
            <div className="w-full lg:w-3/5 relative">
              <div className="aspect-[16/10] overflow-hidden grayscale-[30%] hover:grayscale-0 transition-all duration-1000">
                <img
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200"
                  alt="Minimalist Interior"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                />
              </div>
              {/* Subtle architectural caption */}
              <div className="mt-4 flex justify-between items-center border-t border-neutral-200 pt-4">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">Project 01 / Lagos Sky Villa</span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">Residential</span>
              </div>
            </div>

            {/* 4. Bio & Action: Floating on the right */}
            <div className="w-full lg:w-1/3 mb-12">
              <div className="max-w-xs">
                <p className="text-neutral-500 text-sm leading-relaxed mb-8 font-light">
                  {designerInfo.bio}
                </p>
                
                <div className="flex flex-col gap-6">
                  
                  <button className="group flex items-center justify-between w-full py-4 border-b border-neutral-300 hover:border-neutral-900 transition-colors">
                    <span className="text-xs uppercase tracking-widest font-medium">View Portfolio</span>
                    <ArrowUpRight size={18} className="text-neutral-400 group-hover:text-neutral-900 transition-all" />
                  </button>
                  
                  <button className="group flex items-center justify-between w-full py-4 border-b border-neutral-300 hover:border-neutral-900 transition-colors">
                    <span className="text-xs uppercase tracking-widest font-medium">Inquire</span>
                    <ArrowUpRight size={18} className="text-neutral-400 group-hover:text-neutral-900 transition-all" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative Geometry */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white -z-10" />
    </section>
  );
};

export default Hero;