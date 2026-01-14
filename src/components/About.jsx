import React from 'react';
import { designerInfo } from '../data/designerData';

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Biography & Pedigree */}
          <div className="lg:col-span-6">
            <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400 mb-8 block font-medium">
              The Philosophy
            </span>
            
            <h2 className="text-5xl md:text-7xl font-serif text-neutral-900 mb-10 leading-[1.1]">
              Itodo dominic<br />
              <span className="italic font-light text-neutral-800 text-4xl md:text-6xl">olumide</span>
            </h2>
            
            <div className="space-y-8 max-w-lg">
              <p className="text-lg text-neutral-600 font-light leading-relaxed">
                {designerInfo.bio}
              </p>
              
              <div className="h-[1px] w-20 bg-neutral-900" />
              
              {/* Pedigree & Recognition Grid */}
              <div className="grid sm:grid-cols-2 gap-12 pt-4">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-neutral-900 font-bold mb-6">Pedigree</h3>
                  <ul className="space-y-4">
                    {designerInfo.qualifications.map((qual, index) => (
                      <li key={index} className="text-xs text-neutral-500 font-light leading-relaxed uppercase tracking-wider">
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-neutral-900 font-bold mb-6">Recognition</h3>
                  <ul className="space-y-4">
                    {designerInfo.awards.map((award, index) => (
                      <li key={index} className="text-xs text-neutral-500 font-light leading-relaxed italic">
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Portrait & Minimal Stats */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Sharp, Minimalist Portrait */}
              <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000"
                  alt="Itodo dominic olumide"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                />
              </div>

              {/* Stats: Minimalist Floating Bar */}
              <div className="absolute -bottom-10 -left-10 bg-neutral-900 text-white p-10 hidden xl:block">
                <div className="grid grid-cols-1 gap-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-serif italic">15+</span>
                    <span className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1">Years in Craft</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-serif italic">50+</span>
                    <span className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1">Global Spaces</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 lg:mt-24 text-right">
              <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 italic">
                “Space is the breath of art.”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;