import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-neutral-500 py-20 border-t border-neutral-900">
      <div className="container mx-auto px-8 lg:px-12">
        
        {/* Top Section: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Column 1: The Signature */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-serif text-white mb-4 tracking-tighter">
              Itodo dominic <span className="italic font-light">olumide</span>
            </h2>
            <p className="text-[10px] uppercase tracking-[0.4em] leading-relaxed max-w-xs">
              Architectural Interiors & Spatial Design Studio. 
              Bridging heritage and contemporary minimalism.
            </p>
          </div>

          {/* Column 2: Navigation Map */}
          <div className="md:col-span-2">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-neutral-300 mb-8 font-bold">Studio</h3>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest">
              <li><a href="#portfolio" className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Expertise</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Inquire</a></li>
            </ul>
          </div>

          {/* Column 3: Locales */}
          <div className="md:col-span-3">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-neutral-300 mb-8 font-bold">Locales</h3>
            <div className="space-y-6 text-[10px] uppercase tracking-widest leading-loose">
              <div>
                <p className="text-neutral-300">Lagos HQ</p>
                <p>Victoria Island, Lagos, NG</p>
              </div>
              <div>
                <p className="text-neutral-300">London Office</p>
                <p>Mayfair, London, UK</p>
              </div>
            </div>
          </div>

          {/* Column 4: Back to top / Interaction */}
          <div className="md:col-span-2 flex md:justify-end">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-neutral-300"
            >
              Top
              <span className="w-8 h-[1px] bg-neutral-700 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
            </button>
          </div>
        </div>

        {/* Bottom Section: Legal & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-neutral-900 gap-8">
          <div className="text-[9px] uppercase tracking-[0.5em]">
            © {currentYear} Itodo dominic olumide Design Studio
          </div>
          
          <div className="flex gap-12 text-[9px] uppercase tracking-[0.5em]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <span className="text-neutral-700">Built for the future</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;