import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  name: string;
  resumeUrl: string;
  isShrunk?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  name,
  resumeUrl,
  isShrunk = false,
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    // Close menu first, then scroll after animation settles
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Measure real navbar height dynamically + 12px breathing room
        const navbarEl = document.querySelector('header');
        const navbarHeight = navbarEl
          ? navbarEl.getBoundingClientRect().bottom + 12
          : 80;
        const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 250);
  };

  return (
    <>
      {/* Click outside backdrop when mobile curtain menu is open */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-rose-950/25 backdrop-blur-xs sm:hidden"
          />
        )}
      </AnimatePresence>

      {/* Top Floating Glassmorphism Pill Navbar with curtain drop on mobile */}
      <motion.header
        initial={false}
        animate={{
          y: (isShrunk && isDesktop) ? -110 : 0,
          opacity: (isShrunk && isDesktop) ? 0 : 1,
          scale: (isShrunk && isDesktop) ? 0.94 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 160,
          damping: 30,
          mass: 1.1,
        }}
        className={`fixed top-3 sm:top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-5 sm:px-4 ${
          (isShrunk && isDesktop) ? 'pointer-events-none' : 'pointer-events-auto'
        }`}
      >
        <motion.div
          layout
          transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`w-full max-w-[88vw] sm:w-auto sm:max-w-none backdrop-blur-2xl border transition-colors duration-300 shadow-lg/5 overflow-hidden ${
            mobileMenuOpen
              ? 'bg-white/95 border-rose-200/90 rounded-3xl sm:rounded-full shadow-2xl'
              : scrolled
              ? 'bg-white/80 border-white/90 rounded-full shadow-rose-900/10'
              : 'bg-white/55 border-white/70 rounded-full shadow-rose-900/5'
          }`}
        >
          {/* Main Navbar Capsule Bar */}
          <div className="flex items-center justify-between gap-3 md:gap-6 px-5 md:px-6 py-3 md:py-3">
            {/* Logo Name */}
            <button
              onClick={() => scrollTo('hero')}
              className="font-script text-2xl md:text-3xl text-[#801B30] hover:text-[#B3314B] transition-colors tracking-wide font-normal px-1 cursor-pointer flex items-center gap-1"
            >
              {name}
            </button>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden sm:block h-4 w-px bg-[#E2B2B8]/80" />

            {/* Desktop Nav Links */}
            <nav className="hidden sm:flex items-center gap-4 md:gap-6 text-sm font-medium text-[#5C3840]">
              <button
                onClick={() => scrollTo('about')}
                className={`transition-all duration-300 hover:text-[#B3314B] cursor-pointer relative py-0.5 ${
                  activeSection === 'about' ? 'text-[#B3314B] font-semibold' : ''
                }`}
              >
                About
                {activeSection === 'about' && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B3314B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => scrollTo('skills')}
                className={`transition-all duration-300 hover:text-[#B3314B] cursor-pointer relative py-0.5 ${
                  activeSection === 'skills' ? 'text-[#B3314B] font-semibold' : ''
                }`}
              >
                Skills
                {activeSection === 'skills' && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B3314B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => scrollTo('education')}
                className={`transition-all duration-300 hover:text-[#B3314B] cursor-pointer relative py-0.5 ${
                  activeSection === 'education' ? 'text-[#B3314B] font-semibold' : ''
                }`}
              >
                Education
                {activeSection === 'education' && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B3314B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => scrollTo('experience')}
                className={`transition-all duration-300 hover:text-[#B3314B] cursor-pointer relative py-0.5 ${
                  activeSection === 'experience' ? 'text-[#B3314B] font-semibold' : ''
                }`}
              >
                Experience
                {activeSection === 'experience' && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B3314B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className={`transition-all duration-300 hover:text-[#B3314B] cursor-pointer relative py-0.5 ${
                  activeSection === 'projects' ? 'text-[#B3314B] font-semibold' : ''
                }`}
              >
                Projects
                {activeSection === 'projects' && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B3314B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className={`transition-all duration-300 hover:text-[#B3314B] cursor-pointer relative py-0.5 ${
                  activeSection === 'contact' ? 'text-[#B3314B] font-semibold' : ''
                }`}
              >
                Contact
                {activeSection === 'contact' && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B3314B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </nav>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden sm:block h-4 w-px bg-[#E2B2B8]/80" />

            {/* Right Action Controls */}
            <div className="flex items-center gap-2">
              {/* Desktop Resume Link ONLY (Hidden on mobile) */}
              <a
                href={resumeUrl || '#'}
                download
                className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[#B3314B] hover:text-[#801B30] transition-colors px-3.5 py-1.5 rounded-full hover:bg-rose-100/60 cursor-pointer"
              >
                <Download className="w-4 h-4 stroke-[2.2]" />
                <span>Resume</span>
              </a>

              {/* Mobile Menu Trigger Icon */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="sm:hidden p-1.5 text-[#801B30] hover:bg-rose-100/60 rounded-full cursor-pointer transition-transform active:scale-95"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Curtain Falling Mobile Navigation Section */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] },
                  opacity: { duration: 0.15, ease: 'easeOut' },
                }}
                className="sm:hidden border-t border-rose-100/80 px-4 pt-2.5 pb-4 space-y-1"
              >
                {[
                  { id: 'hero', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'education', label: 'Education' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full text-left py-2 px-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-rose-100/70 text-[#B3314B] font-semibold'
                        : 'text-[#5C3840] hover:bg-rose-50/80 hover:text-[#B3314B]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile Download Resume inside curtain */}
                <div className="pt-2 mt-2 border-t border-rose-100/80">
                  <a
                    href={resumeUrl || '#'}
                    download
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#B3314B] hover:bg-[#96233B] text-white font-medium text-xs sm:text-sm transition-colors shadow-xs cursor-pointer"
                  >
                    <Download className="w-4 h-4 stroke-[2.2]" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>
    </>
  );
};

