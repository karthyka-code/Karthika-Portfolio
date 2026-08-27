import React from 'react';
import { Home, User, Code2, GraduationCap, Briefcase, FolderKanban, Mail, Download, Sparkles } from 'lucide-react';

interface StickyLeftPhotoProps {
  imageSrc: string;
  resumeUrl?: string;
  isShrunk?: boolean;
  activeSection?: string;
}

export const StickyLeftPhoto: React.FC<StickyLeftPhotoProps> = ({
  imageSrc,
  resumeUrl = '#',
  isShrunk = false,
  activeSection = 'hero',
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative md:sticky md:top-0 flex-shrink-0 z-30 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between overflow-visible ${
        isShrunk
          ? 'w-full md:w-[24%] lg:w-[20%] xl:w-[18%] bg-[#9B273D] text-white p-4 sm:p-6 shadow-2xl md:h-screen'
          : 'w-full md:w-[42%] lg:w-[45%] h-[450px] sm:h-[550px] md:h-screen bg-[#FAF0F0] text-[#3D2529] p-0 shadow-none md:shadow-2xl'
      }`}
    >
      {/* ================= BACKGROUND PORTRAIT IMAGE LAYER ================= */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden pointer-events-none z-0 ${
          isShrunk ? 'opacity-90' : 'opacity-100'
        }`}
      >
        <img
          src={imageSrc}
          alt="Karthika S"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_35%] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] scale-105"
        />

        {/* Soft Blending Overlay Gradients */}
        {/* Mode 1: Soft Cream Gradient for Full Mode - Fades 100% seamlessly into #FAF0F0 */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isShrunk ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 md:h-48 bg-gradient-to-t from-[#FAF0F0] via-[#FAF0F0]/85 via-40% to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#FAF0F0] via-[#FAF0F0]/40 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-rose-950/5 to-transparent" />
        </div>

        {/* Mode 2: Unified Color Blend Overlay for Shrunk Sidebar Mode (100% Seamless #9B273D) */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isShrunk ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Multiply tint to harmonize image tones with sidebar #9B273D */}
          <div className="absolute inset-0 bg-[#9B273D]/30 mix-blend-multiply" />
          {/* Gentle top gradient */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#9B273D]/60 via-[#9B273D]/20 to-transparent" />
          {/* Smooth full bottom transition into solid #9B273D */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#9B273D] via-[#9B273D]/90 to-transparent" />
          {/* Soft edge blends */}
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#9B273D] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#9B273D] to-transparent" />
        </div>
      </div>

      {/* ================= SHRUNK SIDEBAR CONTENT (LOGO, NAV, RESUME) ================= */}
      {/* Top Header Logo: "Karthika S ✦" */}
      <div
        className={`relative z-10 transition-all duration-700 ease-out delay-100 pt-3 pb-2 px-1 ${
          isShrunk ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <h1 className="font-script text-2xl sm:text-3xl lg:text-4xl text-white font-normal tracking-wide flex items-center gap-1.5 drop-shadow-md">
          <span>Karthika S</span>
          <Sparkles className="w-4 h-4 text-rose-100 animate-pulse" />
        </h1>
        <div className="w-14 h-0.5 bg-rose-200/60 mt-1 rounded-full" />
      </div>

      {/* Floating Sparkles around photo area */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 z-10 ${
          isShrunk ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="absolute top-20 right-3 text-rose-100/90 text-sm animate-bounce">✦</span>
        <span className="absolute top-40 right-6 text-rose-200/80 text-xs">✦</span>
        <span className="absolute top-52 left-2 text-rose-200/80 text-xs">✦</span>
      </div>

      {/* Sidebar Navigation Menu */}
      <nav
        aria-label="Sidebar navigation"
        className={`relative z-10 space-y-1 py-3 mt-auto transition-all duration-700 ease-out delay-150 ${
          isShrunk ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <button
          onClick={() => scrollTo('hero')}
          className={`flex items-center gap-2.5 text-xs sm:text-sm font-light transition-all cursor-pointer group py-1.5 w-full text-left rounded-lg px-2.5 ${
            activeSection === 'hero' ? 'bg-white/20 text-white font-medium shadow-sm' : 'text-rose-100/90 hover:text-white hover:bg-white/10'
          }`}
        >
          <Home className="w-4 h-4 text-rose-200 group-hover:scale-110 transition-transform" />
          <span>Home</span>
        </button>

        <button
          onClick={() => scrollTo('about')}
          className={`flex items-center gap-2.5 text-xs sm:text-sm font-light transition-all cursor-pointer group py-1.5 w-full text-left rounded-lg px-2.5 ${
            activeSection === 'about' ? 'bg-white/20 text-white font-medium shadow-sm' : 'text-rose-100/90 hover:text-white hover:bg-white/10'
          }`}
        >
          <User className="w-4 h-4 text-rose-200 group-hover:scale-110 transition-transform" />
          <span>About</span>
        </button>

        <button
          onClick={() => scrollTo('skills')}
          className={`flex items-center gap-2.5 text-xs sm:text-sm font-light transition-all cursor-pointer group py-1.5 w-full text-left rounded-lg px-2.5 ${
            activeSection === 'skills' ? 'bg-white/20 text-white font-medium shadow-sm' : 'text-rose-100/90 hover:text-white hover:bg-white/10'
          }`}
        >
          <Code2 className="w-4 h-4 text-rose-200 group-hover:scale-110 transition-transform" />
          <span>Skills</span>
        </button>

        <button
          onClick={() => scrollTo('education')}
          className={`flex items-center gap-2.5 text-xs sm:text-sm font-light transition-all cursor-pointer group py-1.5 w-full text-left rounded-lg px-2.5 ${
            activeSection === 'education' ? 'bg-white/20 text-white font-medium shadow-sm' : 'text-rose-100/90 hover:text-white hover:bg-white/10'
          }`}
        >
          <GraduationCap className="w-4 h-4 text-rose-200 group-hover:scale-110 transition-transform" />
          <span>Education</span>
        </button>

        <button
          onClick={() => scrollTo('experience')}
          className={`flex items-center gap-2.5 text-xs sm:text-sm font-light transition-all cursor-pointer group py-1.5 w-full text-left rounded-lg px-2.5 ${
            activeSection === 'experience' ? 'bg-white/20 text-white font-medium shadow-sm' : 'text-rose-100/90 hover:text-white hover:bg-white/10'
          }`}
        >
          <Briefcase className="w-4 h-4 text-rose-200 group-hover:scale-110 transition-transform" />
          <span>Experience</span>
        </button>

        <button
          onClick={() => scrollTo('projects')}
          className={`flex items-center gap-2.5 text-xs sm:text-sm font-light transition-all cursor-pointer group py-1.5 w-full text-left rounded-lg px-2.5 ${
            activeSection === 'projects' ? 'bg-white/20 text-white font-medium shadow-sm' : 'text-rose-100/90 hover:text-white hover:bg-white/10'
          }`}
        >
          <FolderKanban className="w-4 h-4 text-rose-200 group-hover:scale-110 transition-transform" />
          <span>Projects</span>
        </button>

        <button
          onClick={() => scrollTo('contact')}
          className={`flex items-center gap-2.5 text-xs sm:text-sm font-light transition-all cursor-pointer group py-1.5 w-full text-left rounded-lg px-2.5 ${
            activeSection === 'contact' ? 'bg-white/20 text-white font-medium shadow-sm' : 'text-rose-100/90 hover:text-white hover:bg-white/10'
          }`}
        >
          <Mail className="w-4 h-4 text-rose-200 group-hover:scale-110 transition-transform" />
          <span>Contact</span>
        </button>
      </nav>

      {/* Bottom Angled Resume Download Button */}
      <div
        className={`relative z-10 pt-2 pb-1 transition-all duration-700 ease-out delay-200 ${
          isShrunk ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <a
          href={resumeUrl}
          download
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 border border-white/40 text-white text-xs sm:text-sm font-medium transition-all shadow-md hover:shadow-lg cursor-pointer clip-angled backdrop-blur-xs w-full"
        >
          <Download className="w-4 h-4 stroke-[2.2]" />
          <span>Resume</span>
        </a>
      </div>

      {/* Organic Double S-Curve Right Border Overlay with 3px Accent Parallel Line */}
      <div
        className={`hidden md:block absolute top-0 -right-12 lg:-right-16 bottom-0 h-full w-12 lg:w-16 pointer-events-none z-20 origin-left transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isShrunk ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 pointer-events-none'
        }`}
      >
        <svg
          className="h-full w-full text-[#9B273D]"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
        >
          {/* Lighter Rose Background Extension Curve */}
          <path
            d="M 0,0 C 80,180 10,420 85,680 C 120,820 30,950 0,1000 L 0,1000 L 0,0 Z"
            fill="currentColor"
          />
          {/* Outer Main Solid Cream Curve */}
          <path
            d="M 0,0 C 80,180 10,420 85,680 C 120,820 30,950 0,1000"
            fill="none"
            stroke="#FAF0F0"
            strokeWidth="4.5"
          />
          {/* 3px Parallel Cream Accent Line after the main border */}
          <path
            d="M 12,0 C 92,180 22,420 97,680 C 132,820 42,950 12,1000"
            fill="none"
            stroke="#FAF0F0"
            strokeWidth="3"
            strokeOpacity="0.85"
          />
          {/* Inner Thin Soft Pink Dashed Accent Line */}
          <path
            d="M 5,0 C 85,180 15,420 90,680 C 125,820 35,950 5,1000"
            fill="none"
            stroke="#E0ADB4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Subtle Right Edge Accent for Mode 1 (Unshrunk) */}
      <div
        className={`hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E0ADB4]/50 to-transparent z-20 pointer-events-none transition-opacity duration-700 ${
          isShrunk ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};


