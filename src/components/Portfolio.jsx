import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/designerData';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Architecture', 'Interior', 'Commercial'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-12">
        
        {/* Header Section: Left Aligned Editorial Style */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
              Selected <br /> <span className="italic font-light">Works</span>
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed">
              Exploring the intersection of modern minimalism and African spatial heritage.
            </p>
          </div>

          {/* Minimalist Filter: Text-only with active dot */}
          <div className="flex flex-wrap gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className="group relative text-[10px] uppercase tracking-[0.3em] transition-colors"
              >
                <span className={filter === category ? 'text-neutral-900' : 'text-neutral-400 group-hover:text-neutral-900'}>
                  {category}
                </span>
                {filter === category && (
                  <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-neutral-900 transition-all" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: Clean, Unboxed Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-y-20 gap-x-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer ${
                index % 3 === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
              } ${index % 2 !== 0 ? 'lg:mt-24' : ''}`}
            >
              {/* Image Container: Sharp corners, no shadow */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-6">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Minimalist Hover Overlay */}
                <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ArrowUpRight size={20} className="text-neutral-900" />
                  </div>
                </div>
              </div>
              
              {/* Project Details: Simple Typography */}
              <div className="flex justify-between items-start border-b border-neutral-100 pb-6">
                <div>
                  <h3 className="text-xl font-serif text-neutral-900 mb-1">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400">{project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-200"></span>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400">{project.location}</span>
                  </div>
                </div>
                <span className="text-[10px] font-light text-neutral-400 italic">{project.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="mt-32 text-center">
          <button className="group relative text-xs uppercase tracking-[0.4em] text-neutral-900 pb-2">
            Explore All Projects
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-900 transition-all duration-500 group-hover:w-full" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;