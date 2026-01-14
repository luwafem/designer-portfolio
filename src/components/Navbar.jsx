import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle background change on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Collection', href: '#portfolio' },
    { label: 'Philosophy', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Journal', href: '#journal' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo: Architectural & Spaced */}
          <div className="flex flex-col leading-none">
            <span className="text-xl font-serif tracking-tighter text-neutral-900">
              GREAT<span className="italic">MIND</span>
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-neutral-400 mt-1">
              CONSTRUCT
            </span>
          </div>

          {/* Desktop Navigation: Editorial Style */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* CTA: Ghost Button */}
            <button className="border border-neutral-900 px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300">
              Inquire
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-neutral-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Navigation: Full Screen Overlay */}
      </div>
    </nav>
  );
};

export default Navbar;