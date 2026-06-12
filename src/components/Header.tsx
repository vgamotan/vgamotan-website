import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Micro-Influencer', href: '#influencer' },
    { label: 'Resume / CV', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1B2A]/95 backdrop-blur-md border-b border-[#1B263B]/50 py-4 shadow-xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="logo-brand-link"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col group"
          >
            <div className="flex items-baseline">
              <span className="font-display text-2xl font-bold tracking-tight text-white group-hover:text-[#00C9A7] transition-colors duration-200">
                Verge
              </span>
              <span className="text-[#00C9A7] text-2xl font-black">.</span>
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#415A77] group-hover:text-white transition-colors duration-200">
              MarTech Solutions Architect
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  id={`nav-link-${item.href.substring(1)}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#00C9A7] bg-[#1B263B]/40'
                      : 'text-[#415A77] hover:text-white hover:bg-[#1B263B]/20'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#00C9A7] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              id="cta-nav-book-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#00C9A7] to-[#1B263B] border border-[#00C9A7]/30 hover:border-[#00C9A7] shadow-lg shadow-[#00C9A7]/10 hover:shadow-[#00C9A7]/30 hover:-translate-y-0.5 transition-all duration-300 transform"
            >
              Book a free audit
              <ArrowUpRight className="ml-1.5 h-4 w-4 text-[#00C9A7] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-[#415A77] hover:text-white hover:bg-[#1B263B]/50 transition-colors focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Open Drawer/Dropdown */}
      <div
        id="mobile-menu-drawer"
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 border-b border-[#1B263B]/80' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-[#0D1B2A]`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                id={`mobile-nav-link-${item.href.substring(1)}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-[#00C9A7] bg-[#1B263B]'
                    : 'text-gray-300 hover:text-white hover:bg-[#1B263B]/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-4 px-4">
            <a
              id="mobile-cta-nav-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center w-full px-5 py-3 rounded-lg text-center font-bold text-white bg-[#00C9A7] hover:bg-[#00b395] transition-colors"
            >
              Book a call
              <ArrowUpRight className="ml-1 z-10 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
