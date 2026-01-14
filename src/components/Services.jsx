import React from 'react';
import { services } from '../data/designerData';

const Services = () => {
  return (
    <section id="services" className="py-32 bg-neutral-50">
      <div className="container mx-auto px-8 lg:px-12">
        
        {/* Header: Minimalist and Structural */}
        <div className="flex flex-col lg:flex-row gap-12 mb-24 border-b border-neutral-200 pb-16">
          <div className="lg:w-1/3">
            <h2 className="text-sm uppercase tracking-[0.4em] text-neutral-400 font-medium">
              Expertise
            </h2>
          </div>
          <div className="lg:w-2/3">
            <p className="text-3xl md:text-4xl font-serif text-neutral-900 leading-snug">
              Creating curated environments that balance <span className="italic font-light text-neutral-500">cultural narrative</span> with modern functionality.
            </p>
          </div>
        </div>

        {/* Services List: Clean, Row-based Layout */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative border-b border-neutral-200 py-16 transition-all duration-500 hover:bg-white"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                
                {/* 01. Index Number */}
                <div className="lg:w-1/4">
                  <span className="text-xs font-serif italic text-neutral-300 group-hover:text-neutral-900 transition-colors">
                    0{index + 1} —
                  </span>
                </div>

                {/* 02. Title & Description */}
                <div className="lg:w-2/4">
                  <h3 className="text-3xl font-serif text-neutral-900 mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 font-light max-w-md leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* 03. Features: Clean list with no bullets */}
                <div className="lg:w-1/4">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Subtle Action Link */}
                  <button className="mt-8 text-[10px] uppercase tracking-[0.3em] font-semibold border-b border-neutral-900 pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    Inquire
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Services */}
        <div className="mt-24 flex justify-end">
          <p className="text-neutral-400 text-xs font-light max-w-xs text-right italic">
            All services are tailored to individual project scales, from private residences to heritage-driven commercial spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;