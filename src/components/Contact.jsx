import React from 'react';
import { designerInfo } from '../data/designerData';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. We will reach out to discuss your vision.');
  };

  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-20">
          
          {/* Left Side: Direct Contact & Socials */}
          <div className="lg:col-span-5 space-y-20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-8 block font-medium">
                Inquiries
              </span>
              <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
                Let's define your <br />
                <span className="italic font-light text-neutral-400">space.</span>
              </h2>
              <p className="text-neutral-400 font-light max-w-sm leading-relaxed">
                Currently accepting select residential and heritage-driven commercial commissions for {new Date().getFullYear() + 1}.
              </p>
            </div>

            <div className="space-y-12">
              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Email</p>
                <a href={`mailto:${designerInfo.contact.email}`} className="text-xl font-serif hover:text-neutral-400 transition-colors border-b border-neutral-800 pb-2 block w-max">
                  {designerInfo.contact.email}
                </a>
              </div>

              <div className="group">
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Studio</p>
                <p className="text-xl font-serif text-neutral-300">
                  {designerInfo.contact.address}
                </p>
              </div>

              <div className="pt-8">
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-6">Digital Presence</p>
                <div className="flex gap-8">
                  {['Instagram', 'LinkedIn', 'Twitter'].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 hover:text-white transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Architectural Form */}
          <div className="lg:col-span-7 bg-neutral-900/50 p-8 md:p-16 border border-neutral-800">
            <h3 className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-12">Project Brief</h3>
            
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                    id="name"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-neutral-500 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-white pointer-events-none">
                    Full Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-white transition-colors peer placeholder-transparent"
                    id="email"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-neutral-500 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-white pointer-events-none">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group">
                <select className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-white transition-colors appearance-none text-neutral-400 text-sm">
                  <option className="bg-neutral-900" value="">Select Interest</option>
                  <option className="bg-neutral-900">Residential</option>
                  <option className="bg-neutral-900">Commercial</option>
                  <option className="bg-neutral-900">Consultation</option>
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none text-[10px] text-neutral-500">↓</div>
              </div>

              <div className="relative group">
                <textarea
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-neutral-700 py-3 focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none"
                  id="message"
                  placeholder="Message"
                />
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-neutral-500 text-[10px] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-white pointer-events-none">
                  The Vision
                </label>
              </div>

              <button
                type="submit"
                className="group flex items-center gap-4 bg-white text-black px-12 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-all duration-300"
              >
                Submit Brief
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </form>
          </div>

        </div>

        {/* Footer Minimalist Credits */}
        <div className="mt-32 pt-16 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-600">
            © {new Date().getFullYear()} Itodo dominic olumide STUDIO. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-600">
            LAGOS — LONDON
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;