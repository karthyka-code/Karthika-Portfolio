import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioData } from '../types';
import {
  Send,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Sparkles,
  CheckCircle2,
  Code2,
  ChevronRight,
  Heart,
  GraduationCap,
  BookOpen,
  Landmark,
  Calendar,
  MoreHorizontal,
  Megaphone,
  Mic,
  MessageSquare,
  Users,
  Star,
  Clapperboard,
  PenTool,
  Camera,
  Flag,
  Box,
  Lightbulb,
  Target,
  Database,
  Layers,
  Handshake,
  Laptop,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  RefreshCw,
  Phone,
  ArrowUp,
  User
} from 'lucide-react';

/* Custom SVG Icons for Tech Pills matching screenshot */
const HtmlIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#E44D26]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.06h9.135l-.352 3.949-2.916.79-2.928-.79-.187-2.102H6.236l.373 4.204 5.368 1.487 5.378-1.487.728-8.169H8.531z" />
  </svg>
);

const CssIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#264DE4]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.06h9.135l-.352 3.949-2.916.79-2.928-.79-.187-2.102H6.236l.373 4.204 5.368 1.487 5.378-1.487.728-8.169H8.531z" />
  </svg>
);

const JsIcon = () => (
  <span className="w-3.5 h-3.5 bg-[#F7DF1E] text-black font-black text-[9px] flex items-center justify-center rounded-xs leading-none">
    JS
  </span>
);

const ReactIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
  </svg>
);

const PythonIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path fill="#3776AB" d="M11.892 0c-5.83 0-5.465 2.533-5.465 2.533l.006 2.622h5.539v.784H4.132S0 5.485 0 11.357c0 5.871 3.601 5.65 3.601 5.65h2.15v-3.023s-.116-3.601 3.542-3.601h6.082s3.397.058 3.397-3.281V3.542S19.23 0 11.892 0zM8.761 1.776a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1z" />
    <path fill="#FFD43B" d="M12.108 24c5.83 0 5.465-2.533 5.465-2.533l-.006-2.622H12.028v-.784h7.836s4.132.454 4.132-5.418c0-5.871-3.601-5.65-3.601-5.65h-2.15v3.023s.116 3.601-3.542 3.601H8.621s-3.397-.058-3.397 3.281v3.738S4.77 24 12.108 24zm3.131-1.776a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
  </svg>
);

interface SectionProps {
  data: PortfolioData;
}

/* ================= HERO SECTION ================= */
export const HeroSection: React.FC<SectionProps> = ({ data }) => {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[calc(100svh-450px)] sm:min-h-[75vh] flex flex-col justify-start pt-5 sm:justify-center sm:pt-0 relative scroll-mt-12 pb-6 sm:py-0"
    >
      <div className="space-y-2 sm:space-y-6 max-w-xl">
        {/* "Hey," Calligraphic Greeting */}
        <div className="relative inline-block pt-2">
          <h2 className="font-script text-6xl sm:text-6xl md:text-7xl text-[#B3314B] tracking-wide font-normal leading-tight flex items-center gap-2 sm:gap-2">
            <span>{data.greeting || "Hey,"}</span>
            <Sparkles className="w-5 h-5 sm:w-5 sm:h-5 text-[#B3314B] inline animate-pulse" />
          </h2>
        </div>

        {/* "I'm" */}
        <p className="text-[#8C3A4C] text-xl sm:text-xl font-light tracking-wide">
          I'm
        </p>

        {/* Main Name Heading with Underline Accent */}
        <div className="relative pt-0.5 sm:pt-1 pb-1 sm:pb-2">
          <h1 className="font-display sm:font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#A02B40] font-normal leading-tight tracking-tight">
            {data.name}
            <span className="inline-block text-[#B3314B] text-3xl sm:text-3xl md:text-4xl ml-2 sm:ml-2 font-sans">✦</span>
          </h1>
          {/* Elegant Underline flourish */}
          <div className="w-52 sm:w-64 h-0.5 bg-gradient-to-r from-[#B3314B] via-[#E2B2B8] to-transparent mt-2 sm:mt-2 rounded-full" />
        </div>

        {/* Subtitle / Education Details */}
        <div className="space-y-1 sm:space-y-2 pt-1 sm:pt-2 text-[#5A2C37] text-base sm:text-lg leading-relaxed font-sans">
          <p className="font-normal text-[#61333F]">
            {data.titleRole}
          </p>
          <p className="font-medium text-[#A02B40] text-base sm:text-xl">
            at{' '}
            <span className="text-[#B3314B] border-b border-[#B3314B]/30 pb-0.5">
              {data.institution}
            </span>
          </p>
        </div>

        {/* Hero Action Buttons - Single line row on mobile */}
        <div className="pt-4 sm:pt-6 flex flex-row items-center gap-3 sm:gap-5">
          {/* Let's Connect Button */}
          <a
            href="#contact"
            className="flex-1 sm:flex-none justify-center group relative inline-flex items-center gap-2 px-4 sm:px-7 py-3.5 sm:py-3.5 bg-[#B3314B] hover:bg-[#96233B] text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-rose-900/15 cursor-pointer clip-angled transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Send className="w-4 h-4 sm:w-4 sm:h-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            <span>Let's Connect</span>
          </a>

          {/* Download Resume Button */}
          <a
            href={data.resumeUrl || '#'}
            download
            onClick={(e) => {
              if (!data.resumeUrl || data.resumeUrl === '#') {
                e.preventDefault();
                alert('Resume ready for download! You can link a custom PDF in settings.');
              }
            }}
            className="flex-1 sm:flex-none justify-center group relative inline-flex items-center gap-2 px-4 sm:px-7 py-3.5 sm:py-3.5 bg-white/60 hover:bg-white text-[#B3314B] border border-[#B3314B]/80 font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer clip-angled transform hover:-translate-y-0.5 backdrop-blur-sm whitespace-nowrap"
          >
            <Download className="w-4 h-4 sm:w-4 sm:h-4 stroke-[2.2] transition-transform duration-300 group-hover:translate-y-0.5" />
            <span><span className="hidden min-[380px]:inline">Download </span>Resume</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

/* ================= ABOUT ME SECTION ================= */
export const AboutSection: React.FC<SectionProps> = ({ data }) => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-20 space-y-8 relative"
    >
      {/* Calligraphic Heading */}
      <div className="relative inline-block">
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#A02B40] font-normal tracking-wide flex items-center gap-2">
          <span>About me</span>
          <span className="text-[#B3314B] text-xl font-sans">✦</span>
        </h2>
        <div className="w-32 h-0.5 bg-gradient-to-r from-[#B3314B] to-transparent mt-1" />
      </div>

      {/* Bio Text Paragraphs */}
      <div className="space-y-4 text-[#5A2C37] text-base sm:text-lg leading-relaxed font-sans font-light">
        <p className="bg-white/50 p-5 rounded-2xl border border-white/70 shadow-xs backdrop-blur-xs">
          {data.aboutText1}
        </p>
        <p className="bg-white/50 p-5 rounded-2xl border border-white/70 shadow-xs backdrop-blur-xs">
          {data.aboutText2}
        </p>
        {data.aboutText3 && (
          <p className="bg-white/50 p-5 rounded-2xl border border-white/70 shadow-xs backdrop-blur-xs">
            {data.aboutText3}
          </p>
        )}
      </div>
    </motion.section>
  );
};

/* ================= TECHNICAL SKILLS & TOOLS SECTION ================= */
export const SkillsSection: React.FC<SectionProps> = () => {
  const pillClass = "px-3.5 py-1.5 bg-white/90 hover:bg-white text-[#5C232E] font-medium text-xs sm:text-sm rounded-full border border-rose-200/80 shadow-2xs hover:shadow-xs hover:border-[#AD394F]/50 hover:text-[#AD394F] transition-all flex items-center gap-2 cursor-default";

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-20 space-y-8"
    >
      {/* SECTION HEADER: Skills & Tools */}
      <div className="space-y-1.5">
        <div className="relative inline-block">
          <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#9E2339] font-normal tracking-wide flex items-center gap-2">
            <span>Skills &amp; Tools</span>
            <span className="text-[#B3314B] text-xl sm:text-2xl font-sans ml-1">✦</span>
          </h2>
          <div className="w-32 h-0.5 bg-gradient-to-r from-[#B3314B] via-[#B3314B]/60 to-transparent rounded-full mt-1" />
        </div>
      </div>

      {/* CATEGORIES STACK */}
      <div className="space-y-5 sm:space-y-6 pt-1">
        {/* ================= CATEGORY 1: TECHNICAL SKILLS ================= */}
        <div className="space-y-3 bg-white/40 p-4 sm:p-5 rounded-2xl border border-rose-100/80 shadow-2xs backdrop-blur-xs">
          {/* Header Row: Round Icon & Title in ONE single line */}
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-11 h-11 rounded-full bg-[#FDE2E4] border border-[#F4C5CD] flex items-center justify-center text-[#AD394F] shadow-2xs">
              <div className="relative flex items-center justify-center">
                <Laptop className="w-5 h-5 text-[#AD394F]" />
                <span className="absolute text-[8px] font-mono font-bold text-[#AD394F] top-0">&lt;/&gt;</span>
              </div>
              <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-rose-300/80 border border-white" />
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#AD394F] tracking-widest uppercase font-sans">
                TECHNICAL SKILLS
              </h3>
              <div className="w-12 h-0.5 bg-rose-300/80 rounded-full mt-0.5" />
            </div>
          </div>

          {/* Pills Grid */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-0.5">
            <span className={pillClass}>
              <HtmlIcon />
              <span>HTML</span>
            </span>
            <span className={pillClass}>
              <CssIcon />
              <span>CSS</span>
            </span>
            <span className={pillClass}>
              <JsIcon />
              <span>JavaScript</span>
            </span>
            <span className={pillClass}>
              <ReactIcon />
              <span>React.js</span>
            </span>
            <span className={pillClass}>
              <Code2 className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>C / C++</span>
            </span>
            <span className={pillClass}>
              <PythonIcon />
              <span>Python</span>
            </span>
            <span className={pillClass}>
              <Layers className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Data Structures &amp; Algorithms (DSA)</span>
            </span>
            <span className={pillClass}>
              <Database className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>SQL</span>
            </span>
            <span className={pillClass}>
              <Github className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Git &amp; GitHub</span>
            </span>
            <span className={pillClass}>
              <Box className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>OOP</span>
            </span>
            <span className={pillClass}>
              <Target className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Problem Solving</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#6E424B] font-light leading-relaxed pt-1">
            Strong foundation in programming, data structures, and web technologies with a problem-solving mindset.
          </p>
        </div>

        {/* ================= CATEGORY 2: COMMUNICATION & SPEAKING ================= */}
        <div className="space-y-3 bg-white/40 p-4 sm:p-5 rounded-2xl border border-rose-100/80 shadow-2xs backdrop-blur-xs">
          {/* Header Row: Round Icon & Title in ONE single line */}
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-11 h-11 rounded-full bg-[#FDE2E4] border border-[#F4C5CD] flex items-center justify-center text-[#AD394F] shadow-2xs">
              <Megaphone className="w-5 h-5 text-[#AD394F]" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-rose-300/80 border border-white" />
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#AD394F] tracking-widest uppercase font-sans">
                COMMUNICATION &amp; SPEAKING
              </h3>
              <div className="w-12 h-0.5 bg-rose-300/80 rounded-full mt-0.5" />
            </div>
          </div>

          {/* Pills Grid */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-0.5">
            <span className={pillClass}>
              <Mic className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Anchoring</span>
            </span>
            <span className={pillClass}>
              <MessageSquare className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Public Speaking</span>
            </span>
            <span className={pillClass}>
              <Users className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Debate</span>
            </span>
            <span className={pillClass}>
              <Users className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Group Discussion</span>
            </span>
            <span className={pillClass}>
              <Lightbulb className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Active Listening</span>
            </span>
            <span className={pillClass}>
              <Star className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Stage Presence</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#6E424B] font-light leading-relaxed pt-1">
            Confident communication and expressive delivery in front of diverse audiences.
          </p>
        </div>

        {/* ================= CATEGORY 3: MEDIA & CONTENT ================= */}
        <div className="space-y-3 bg-white/40 p-4 sm:p-5 rounded-2xl border border-rose-100/80 shadow-2xs backdrop-blur-xs">
          {/* Header Row: Round Icon & Title in ONE single line */}
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-11 h-11 rounded-full bg-[#FDE2E4] border border-[#F4C5CD] flex items-center justify-center text-[#AD394F] shadow-2xs">
              <Clapperboard className="w-5 h-5 text-[#AD394F]" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-rose-300/80 border border-white" />
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#AD394F] tracking-widest uppercase font-sans">
                MEDIA &amp; CONTENT
              </h3>
              <div className="w-12 h-0.5 bg-rose-300/80 rounded-full mt-0.5" />
            </div>
          </div>

          {/* Pills Grid */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-0.5">
            <span className={pillClass}>
              <PenTool className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Content Creation</span>
            </span>
            <span className={pillClass}>
              <Heart className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Social Media</span>
            </span>
            <span className={pillClass}>
              <Camera className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Photography</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#6E424B] font-light leading-relaxed pt-1">
            Creating engaging content and managing social platforms with creativity and consistency.
          </p>
        </div>

        {/* ================= CATEGORY 4: LEADERSHIP & ORGANIZATION ================= */}
        <div className="space-y-3 bg-white/40 p-4 sm:p-5 rounded-2xl border border-rose-100/80 shadow-2xs backdrop-blur-xs">
          {/* Header Row: Round Icon & Title in ONE single line */}
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-11 h-11 rounded-full bg-[#FDE2E4] border border-[#F4C5CD] flex items-center justify-center text-[#AD394F] shadow-2xs">
              <Flag className="w-5 h-5 text-[#AD394F]" />
              <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-rose-300/80 border border-white" />
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#AD394F] tracking-widest uppercase font-sans">
                LEADERSHIP &amp; ORGANIZATION
              </h3>
              <div className="w-12 h-0.5 bg-rose-300/80 rounded-full mt-0.5" />
            </div>
          </div>

          {/* Pills Grid */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-0.5">
            <span className={pillClass}>
              <Calendar className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Event Coordination</span>
            </span>
            <span className={pillClass}>
              <Handshake className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Team Collaboration</span>
            </span>
            <span className={pillClass}>
              <Flag className="w-3.5 h-3.5 text-[#AD394F]" />
              <span>Leadership</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#6E424B] font-light leading-relaxed pt-1">
            Organizing events and leading teams with responsibility and a collaborative approach.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

/* ================= EDUCATION SECTION (MATCHING SCREENSHOT EXACTLY) ================= */
export const EducationSection: React.FC<SectionProps> = ({ data }) => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-20 space-y-8 relative"
    >
      {/* Education Header */}
      <div className="space-y-1.5">
        <div className="relative inline-block">
          <h2 className="font-script text-5xl sm:text-6xl text-[#A02B40] font-normal tracking-wide flex items-center gap-2">
            <span>Education</span>
            <span className="text-[#B3314B] text-2xl font-sans ml-1">✦</span>
          </h2>
          {/* Underline flourish */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#B3314B] via-[#B3314B]/60 to-transparent rounded-full mt-1" />
        </div>
        <p className="text-[#8A3B4C] text-sm sm:text-base font-light pt-1">
          My academic journey through the years.
        </p>
        <div className="flex items-center gap-1 pt-1">
          <div className="w-12 h-0.5 bg-[#AD394F] rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#AD394F]" />
        </div>
      </div>

      {/* Timeline with Education Stage Cards */}
      <div className="relative pt-2 space-y-6 sm:space-y-8">
        {/* Continuous Vertical Timeline Axis */}
        <div className="absolute left-3.5 sm:left-4 top-6 bottom-6 w-[2px] bg-rose-200/90 z-0" />

        {data.education && data.education.map((item) => {
          const years = item.period ? item.period.split(' - ') : ['', ''];
          const startYear = years[0] || '';
          const endYear = years[1] || '';

          return (
            <div key={item.id} className="relative flex items-center z-10 group">
              {/* Timeline Connector Dot Node */}
              <div className="absolute left-3.5 sm:left-4 -translate-x-1/2 flex items-center justify-center z-20">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#AD394F] border-2 border-[#FAF0F0] ring-4 ring-rose-200/60 shadow-xs transition-transform duration-300 group-hover:scale-125" />
              </div>

              {/* Main Stage Card with Top-Right Chamfer Corner & Dark Accent Edge */}
              <div
                className="ml-9 sm:ml-12 flex-1 bg-[#FFF5F5]/90 hover:bg-white p-5 sm:p-7 rounded-2xl border border-rose-200/60 shadow-xs transition-all duration-300 hover:shadow-md relative overflow-hidden"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)',
                }}
              >
                {/* Right Dark Crimson Vertical Accent Bar below corner chamfer */}
                <div className="absolute right-0 top-[24px] bottom-0 w-1.5 bg-[#AD394F] rounded-br-2xl" />

                <div className="flex flex-col sm:flex-row items-stretch gap-6">
                  {/* Left Main Information Area */}
                  <div className="flex-1 space-y-2 pr-2 sm:pr-4">
                    {/* Level Cursive Title */}
                    <div className="space-y-0.5">
                      <h3 className="font-script text-2xl sm:text-3xl text-[#B3314B] font-normal tracking-wide">
                        {item.level},
                      </h3>
                      <div className="w-10 h-0.5 bg-rose-300/80 rounded-full" />
                    </div>

                    {/* Institution Name */}
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#4D1C28] pt-1 leading-snug">
                      {item.institution}
                    </h4>

                    {/* Subtitle / Location with Dash */}
                    <p className="text-xs sm:text-sm font-medium text-[#8A3B4C] flex items-center gap-2">
                      <span className="w-4 h-px bg-[#8A3B4C]/60 inline-block" />
                      <span>{item.location}</span>
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#61333F] font-light leading-relaxed pt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Column: Year Stack with Vertical Dotted Separator */}
                  <div className="sm:w-28 flex flex-row sm:flex-col items-center justify-center border-t sm:border-t-0 sm:border-l border-dashed border-rose-300/80 pt-3 sm:pt-0 sm:pl-6 text-center flex-shrink-0">
                    <div className="flex sm:flex-col items-center justify-center gap-1 sm:gap-0.5">
                      <span className="font-sans text-base sm:text-lg font-bold text-[#B3314B] tracking-wide">
                        {startYear}
                      </span>
                      <span className="text-rose-300 font-light px-1 sm:px-0 sm:my-0.5">—</span>
                      <span className="font-sans text-base sm:text-lg font-bold text-[#4D1C28] tracking-wide">
                        {endYear}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

/* ================= EXPERIENCE SECTION (MATCHING SCREENSHOT EXACTLY) ================= */
export const ExperienceSection: React.FC<SectionProps> = ({ data }) => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-20 space-y-8 relative"
    >
      {/* Experience Header */}
      <div className="space-y-1.5">
        <div className="relative inline-block">
          <h2 className="font-script text-5xl sm:text-6xl text-[#9E2339] font-normal tracking-wide flex items-center gap-2">
            <span>Experience</span>
            <span className="text-[#B3314B] text-2xl font-sans ml-1">✦</span>
          </h2>
        </div>
        <p className="text-[#8A3B4C] text-sm sm:text-base font-light pt-0.5">
          My journey through roles and responsibilities.
        </p>
        <div className="flex items-center gap-1 pt-1">
          <div className="w-12 h-0.5 bg-[#B3314B] rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#B3314B]" />
        </div>
      </div>

      {/* Main Experience Timeline & Cards Stack */}
      <div className="relative pt-4 sm:pt-6 pl-4 sm:pl-8">
        {/* Continuous Left Vertical Line */}
        <div className="absolute left-6 sm:left-10 top-6 bottom-6 w-0.5 bg-[#B3314B]/35 pointer-events-none z-0" />

        {/* Experience Items List */}
        <div className="space-y-8 sm:space-y-10 relative z-10">
          {data.experience && data.experience.map((item, index) => {
            const dates = item.period ? item.period.split(' - ') : ['', ''];
            const startPeriod = dates[0] || '';
            const endPeriod = dates[1] || '';

            return (
              <React.Fragment key={item.id}>
                <div className="relative flex items-start gap-4 sm:gap-8 group">
                  {/* Left Timeline Ring Node */}
                  <div className="relative flex-shrink-0 z-10 pt-5">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#9E2339] ring-4 ring-[#FAF0F0] border-2 border-white shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Main Experience Card */}
                  <div className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-rose-200/60 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden">
                    {/* Top Right Decorative Sparkle */}
                    <span className="absolute top-4 right-5 text-[#B3314B] text-sm font-sans select-none pointer-events-none">✦</span>

                    <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
                      {/* Left / Main Info Column */}
                      <div className="flex-1 space-y-3">
                        {/* Organization Banner / Curved Ribbon Badge */}
                        <div className="relative inline-block">
                          <div className="relative z-10 inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#A82840] via-[#B3314B] to-[#9E2339] text-white font-serif font-bold text-lg sm:text-xl rounded-r-2xl rounded-l-md shadow-md shadow-rose-900/15">
                            <span>{item.organization}</span>
                            <span className="text-white/90 text-sm ml-1 font-sans">✦</span>
                          </div>
                          {/* Curved / Folded Ribbon Tail under left corner */}
                          <div
                            className="absolute -left-2 top-2 w-3 h-full bg-[#6E1223] rounded-l-sm -z-0"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4px))' }}
                          />
                        </div>

                        {/* Role Subtitle */}
                        <h4 className="font-sans text-xs sm:text-sm font-semibold text-[#B3314B] tracking-[0.2em] uppercase pt-1">
                          {item.role}
                        </h4>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#5A2C37] font-light leading-relaxed max-w-xl">
                          {item.description}
                        </p>
                      </div>

                      {/* Right Date Range Column */}
                      <div className="w-full md:w-44 flex flex-col justify-center border-t md:border-t-0 md:border-l border-rose-300/60 pt-4 md:pt-0 md:pl-7 flex-shrink-0">
                        <span className="font-sans text-xs font-semibold text-[#8A3B4C] tracking-widest uppercase mb-1">
                          {startPeriod} {startPeriod ? '–' : ''}
                        </span>
                        <span className="font-serif text-2xl sm:text-3xl font-bold text-[#8C1C30] tracking-wide">
                          {endPeriod}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Intermediate Diamond Node on Timeline between items */}
                {index < (data.experience.length - 1) && (
                  <div className="relative flex items-center justify-start pl-[22px] sm:pl-[38px] my-1 -mt-4 -mb-4 z-10 pointer-events-none">
                    <span className="text-[#B3314B] text-xs font-sans leading-none -translate-x-1/2 select-none">✦</span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

/* ================= PROJECTS SECTION ================= */
export const ProjectsSection: React.FC<SectionProps> = ({ data }) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const heatmapScrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // GitHub URL and profile configuration
  const activeGithubUrl = data.github || 'https://github.com/karthyka-code';

  // Extract GitHub Username from active URL
  const username = useMemo(() => {
    const target = activeGithubUrl;
    const clean = target.trim().replace(/\/$/, '');
    const parts = clean.split('/');
    return parts[parts.length - 1] || 'karthyka-code';
  }, [activeGithubUrl]);

  const [loading, setLoading] = useState<boolean>(true);
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [stats, setStats] = useState({
    repos: 0,
    commits: 0,
    projects: 0,
    contributions: 0,
  });

  // Calendar week interface
  interface ContributionDay {
    date: string;
    count: number;
    level: number;
  }

  interface ContributionWeek {
    monthLabel?: string;
    days: ContributionDay[];
  }

  // Helper to build 52-53 calendar weeks (Sun-Sat) with accurate month labels
  const buildCalendarWeeks = (contribsList: { date: string; count: number; level?: number }[]): ContributionWeek[] => {
    const dateMap = new Map<string, { count: number; level?: number }>();
    contribsList.forEach((c) => {
      if (c.date) dateMap.set(c.date, c);
    });

    const today = new Date();
    const todayDay = today.getDay(); // 0..6
    const endDate = new Date(today);

    // Start date 52 full weeks ago, aligned to preceding Sunday
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (52 * 7 + todayDay));

    const weeks: ContributionWeek[] = [];
    let currentWeekDays: ContributionDay[] = [];

    const curr = new Date(startDate);
    while (curr <= endDate) {
      const year = curr.getFullYear();
      const month = String(curr.getMonth() + 1).padStart(2, '0');
      const day = String(curr.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${day}`;

      const entry = dateMap.get(dateStr);
      const count = entry?.count ?? 0;
      let level = entry?.level ?? 0;
      if (entry && level === 0 && count > 0) {
        if (count >= 10) level = 4;
        else if (count >= 6) level = 3;
        else if (count >= 3) level = 2;
        else level = 1;
      }

      currentWeekDays.push({ date: dateStr, count, level });

      if (curr.getDay() === 6) {
        weeks.push({ days: currentWeekDays });
        currentWeekDays = [];
      }

      curr.setDate(curr.getDate() + 1);
    }

    if (currentWeekDays.length > 0) {
      while (currentWeekDays.length < 7) {
        currentWeekDays.push({ date: '', count: 0, level: 0 });
      }
      weeks.push({ days: currentWeekDays });
    }

    // Attach Month Labels to weeks where a new month starts
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let lastMonth = -1;
    let lastLabelWeek = -10;

    weeks.forEach((week, wIdx) => {
      const validDay = week.days.find((d) => d.date);
      if (validDay) {
        const dObj = new Date(validDay.date);
        const mIdx = dObj.getMonth();
        if (mIdx !== lastMonth && wIdx - lastLabelWeek >= 3) {
          week.monthLabel = monthNames[mIdx];
          lastMonth = mIdx;
          lastLabelWeek = wIdx;
        }
      }
    });

    return weeks.slice(-52);
  };

  // Empty calendar shown before/if API data is unavailable
  const defaultWeeks = useMemo(() => {
    const emptyContribs: { date: string; count: number; level: number }[] = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      emptyContribs.push({ date: `${year}-${month}-${day}`, count: 0, level: 0 });
    }
    return buildCalendarWeeks(emptyContribs);
  }, []);

  const [calendarWeeks, setCalendarWeeks] = useState<ContributionWeek[]>(defaultWeeks);

  // Auto-scroll heatmap to the rightmost (most recent month) on load & update
  useEffect(() => {
    if (heatmapScrollRef.current) {
      const scrollToRight = () => {
        if (heatmapScrollRef.current) {
          heatmapScrollRef.current.scrollLeft = heatmapScrollRef.current.scrollWidth;
        }
      };
      scrollToRight();
      const timer1 = setTimeout(scrollToRight, 100);
      const timer2 = setTimeout(scrollToRight, 400);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [calendarWeeks, loading]);

  // Fetch real GitHub stats and contributions calendar from public APIs
  useEffect(() => {
    let active = true;
    async function fetchGitHubData() {
      setLoading(true);
      try {
        // 1. Fetch User details from GitHub REST API
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        let reposCount = 0;
        if (userRes.ok) {
          const uData = await userRes.json();
          if (typeof uData.public_repos === 'number') {
            reposCount = uData.public_repos;
          }
        }

        // 2. Fetch User Repos list
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
        let reposList: any[] = [];
        let originalProjectsCount = 0;
        if (reposRes.ok) {
          reposList = await reposRes.json();
          if (Array.isArray(reposList) && reposList.length > 0) {
            reposCount = Math.max(reposCount, reposList.length);
            const nonForks = reposList.filter((r: any) => !r.fork);
            if (nonForks.length > 0) {
              originalProjectsCount = nonForks.length;
            } else {
              originalProjectsCount = reposList.length;
            }
          }
        }

        // 3. Fetch Contribution Grid from GitHub directly or CORS proxy
        let contribs: { date: string; count: number; level?: number }[] = [];
        let totalCount = 0;

        try {
          const htmlRes = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://github.com/users/${username}/contributions`)}`);
          if (htmlRes.ok) {
            const htmlText = await htmlRes.text();
            const totalMatch = htmlText.match(/([0-9,]+)\s+contributions?\s+in/i);
            if (totalMatch) {
              totalCount = parseInt(totalMatch[1].replace(/,/g, ''), 10);
            }

            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlText, 'text/html');
            const dayElements = doc.querySelectorAll('td.ContributionCalendar-day, rect.ContributionCalendar-day');
            if (dayElements.length > 0) {
              const scraped: { date: string; count: number; level: number }[] = [];
              let sumCount = 0;
              dayElements.forEach((el) => {
                const date = el.getAttribute('data-date');
                const levelStr = el.getAttribute('data-level');
                if (date) {
                  const level = levelStr ? parseInt(levelStr, 10) : 0;
                  const countAttr = el.getAttribute('data-count');
                  const count = countAttr ? parseInt(countAttr, 10) : (level > 0 ? level * 2 : 0);
                  scraped.push({ date, count, level });
                  sumCount += count;
                }
              });
              if (scraped.length > 0) {
                contribs = scraped;
                if (!totalCount) totalCount = sumCount;
              }
            }
          }
        } catch (e) {
          // Ignore
        }

        // Fallback 2: Direct Deno API if CORS proxy returns empty
        if (contribs.length === 0) {
          try {
            const altRes = await fetch(`https://github-contributions-api.deno.dev/${username}?y=last`);
            if (altRes.ok) {
              const altData = await altRes.json();
              if (altData.contributions && Array.isArray(altData.contributions)) {
                contribs = altData.contributions.flat().map((c: any) => ({
                  date: c.date,
                  count: c.count || 0,
                  level: c.level || 0
                }));
                if (altData.total?.lastYear) {
                  totalCount = altData.total.lastYear;
                }
              }
            }
          } catch (e) {
            // Ignore
          }
        }

        if (active) {
          if (contribs.length > 0) {
            const parsedWeeks = buildCalendarWeeks(contribs);
            if (!totalCount) {
              totalCount = contribs.reduce((sum, item) => sum + (item.count || 0), 0);
            }

            setCalendarWeeks(parsedWeeks);
            setStats({
              repos: reposCount ?? 0,
              commits: totalCount > 0 ? Math.round(totalCount * 0.85) : 0,
              projects: originalProjectsCount ?? 0,
              contributions: totalCount ?? 0,
            });
          } else {
            // No contribution data fetched — show empty real calendar
            setCalendarWeeks(buildCalendarWeeks([]));
            setStats({
              repos: reposCount ?? 0,
              commits: 0,
              projects: originalProjectsCount ?? 0,
              contributions: totalCount ?? 0,
            });
          }
        }
      } catch (err) {
        // Soft fallback
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchGitHubData();
    return () => { active = false; };
  }, [username, refreshKey, data.projects]);

  const getHeatmapColor = (level: number) => {
    switch (level) {
      case 1: return 'bg-[#F7B2BD]';
      case 2: return 'bg-[#E87488]';
      case 3: return 'bg-[#C9425A]';
      case 4: return 'bg-[#9E2339]';
      default: return 'bg-[#FCE4E8]';
    }
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-20 space-y-10"
    >
      {/* Top Header Row with Navigation Arrows */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <div className="relative inline-block">
            <h2 className="font-script text-5xl sm:text-6xl text-[#9E2339] font-normal tracking-wide flex items-center gap-2">
              <span>Projects</span>
              <span className="text-[#B3314B] text-2xl font-sans ml-1">✦</span>
            </h2>
          </div>
          <p className="text-[#8A3B4C] text-sm sm:text-base font-light">
            Things I've built with passion and purpose.
          </p>
          <div className="flex items-center gap-1 pt-1">
            <div className="w-12 h-0.5 bg-[#B3314B] rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#B3314B]" />
          </div>
        </div>

        {/* Circular Arrow Navigation Buttons */}
        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-rose-300/80 bg-white/80 hover:bg-white text-[#9E2339] flex items-center justify-center transition-all shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
            aria-label="Previous Projects"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-rose-300/80 bg-white/80 hover:bg-white text-[#9E2339] flex items-center justify-center transition-all shadow-xs hover:shadow-md active:scale-95 cursor-pointer"
            aria-label="Next Projects"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Project Cards Scrollable Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {data.projects.map((project, index) => {
          const indexStr = (index + 1).toString().padStart(2, '0');
          return (
            <div
              key={project.id}
              className="flex-none w-[290px] sm:w-[320px] md:w-[350px] snap-start bg-white/80 backdrop-blur-md p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-rose-200/70 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
              }}
            >
              {/* Card Top Content */}
              <div>
                {/* Index Number */}
                <div className="font-script text-2xl sm:text-3xl font-normal text-[#9E2339] tracking-wider mb-2">
                  {indexStr} <span className="font-sans text-lg text-rose-300">——</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4D1C28] tracking-wide mb-3 group-hover:text-[#9E2339] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5A2C37] font-light leading-relaxed mb-6 min-h-[60px]">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom Content */}
              <div>
                {/* Divider line with diamond star at end */}
                <div className="relative flex items-center my-4">
                  <div className="w-full h-px bg-rose-200/80" />
                  <span className="absolute right-0 text-[#B3314B] text-xs font-sans pl-1 bg-white/80">✦</span>
                </div>

                {/* Link */}
                <a
                  href={project.link || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#9E2339] hover:text-[#7A192B] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dotted Horizontal Separator */}
      <div className="w-full border-t border-dashed border-rose-300/70 my-10" />

      {/* GitHub Status Section with Real API Data */}
      <div className="space-y-5">
        {/* Sub-header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h3 className="font-script text-4xl sm:text-5xl text-[#9E2339] font-normal leading-tight flex items-center gap-1.5">
              <span>GitHub Status</span>
              <span className="text-[#B3314B] text-xl font-sans"></span>
            </h3>
            <div className="w-28 h-0.5 bg-gradient-to-r from-[#B3314B] to-transparent rounded-full mt-1 mb-1.5" />
            <p className="text-[#8A3B4C] text-xs sm:text-sm font-light flex items-center gap-2">
              <span>Building consistently. Growing steadily.</span>
              {loading && <RefreshCw className="w-3 h-3 text-[#9E2339] animate-spin inline-block ml-1" />}
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={() => setRefreshKey(prev => prev + 1)}
              title="Refresh GitHub Stats"
              className="p-1.5 rounded-full border border-rose-200 bg-white/80 text-[#9E2339] hover:bg-white transition-all shadow-2xs hover:scale-105 active:scale-95 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <a
              href={activeGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#9E2339] hover:text-[#7A192B] transition-colors"
            >
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4 Dynamic Metric Box Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          <div className="bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-rose-200/70 text-center shadow-2xs hover:shadow-xs transition-all">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#8C1C30]">
              {stats.repos}+
            </div>
            <div className="text-xs text-[#8A3B4C] font-light mt-1">
              Repositories
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-rose-200/70 text-center shadow-2xs hover:shadow-xs transition-all">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#8C1C30]">
              {stats.commits}+
            </div>
            <div className="text-xs text-[#8A3B4C] font-light mt-1">
              Commits
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-rose-200/70 text-center shadow-2xs hover:shadow-xs transition-all">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#8C1C30]">
              {stats.projects}+
            </div>
            <div className="text-xs text-[#8A3B4C] font-light mt-1">
              Projects
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-rose-200/70 text-center shadow-2xs hover:shadow-xs transition-all">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#8C1C30]">
              {stats.contributions}+
            </div>
            <div className="text-xs text-[#8A3B4C] font-light mt-1">
              Contributions
            </div>
          </div>
        </div>

        {/* Real GitHub Heatmap Grid Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-rose-200/70 shadow-2xs overflow-hidden space-y-4">
          {/* Top Label & Legend */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#5A2C37]">
            <span className="font-medium text-[#8A3B4C]">
              Contributions in the last 12 months ({stats.contributions} total)
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#8A3B4C] font-light">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-xs bg-[#FCE4E8]" />
              <span className="w-2.5 h-2.5 rounded-xs bg-[#F7B2BD]" />
              <span className="w-2.5 h-2.5 rounded-xs bg-[#E87488]" />
              <span className="w-2.5 h-2.5 rounded-xs bg-[#C9425A]" />
              <span className="w-2.5 h-2.5 rounded-xs bg-[#9E2339]" />
              <span>More</span>
            </div>
          </div>

          {/* Grid Container with Week Columns & Perfectly Aligned Month Labels */}
          <div ref={heatmapScrollRef} className="overflow-x-auto pb-1 scrollbar-none">
            <div className="min-w-[620px] flex gap-2 items-start">
              {/* Day Labels Column (Y-axis) */}
              <div className="flex flex-col gap-1 pr-1 pt-5 text-[10px] text-[#8A3B4C] font-light select-none">
                <span className="h-2.5 sm:h-3 leading-none flex items-center"></span>
                <span className="h-2.5 sm:h-3 leading-none flex items-center">Mon</span>
                <span className="h-2.5 sm:h-3 leading-none flex items-center"></span>
                <span className="h-2.5 sm:h-3 leading-none flex items-center">Wed</span>
                <span className="h-2.5 sm:h-3 leading-none flex items-center"></span>
                <span className="h-2.5 sm:h-3 leading-none flex items-center">Fri</span>
                <span className="h-2.5 sm:h-3 leading-none flex items-center"></span>
              </div>

              {/* 52 Week Columns */}
              <div className="flex gap-1 flex-1 justify-between">
                {calendarWeeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-1 items-center">
                    {/* Month Label Slot above Week Column */}
                    <div className="h-4 text-[10px] font-medium text-[#8A3B4C] leading-none flex items-center justify-start w-full relative">
                      {week.monthLabel && (
                        <span className="absolute left-0 whitespace-nowrap">
                          {week.monthLabel}
                        </span>
                      )}
                    </div>

                    {/* 7 Day Blocks for this Week Column (Sun to Sat) */}
                    {week.days.map((day, dIndex) => (
                      <div
                        key={dIndex}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] ${getHeatmapColor(day.level)} transition-transform hover:scale-125 cursor-pointer`}
                        title={`${day.count} contribution${day.count !== 1 ? 's' : ''}${day.date ? ` on ${day.date}` : ''}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

/* ================= CONTACT SECTION ================= */
export const ContactSection: React.FC<SectionProps> = ({ data }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    nameOrEmail: '',
    email: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.nameOrEmail || !contactForm.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ nameOrEmail: '', email: '', message: '' });
    }, 4000);
  };

  // Clean GitHub handle for display
  const githubHandle = useMemo(() => {
    if (!data.github) return 'github.com/karthika-s';
    const clean = data.github.trim().replace(/^https?:\/\//, '').replace(/\/$/, '');
    return clean || 'github.com/karthika-s';
  }, [data.github]);

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-20 space-y-10"
    >
      {/* Contact Me Header */}
      <div className="space-y-2">
        <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#7E1A2D] font-normal tracking-wide flex items-center gap-2">
          <span>Contact Me</span>
          <span className="text-[#B3314B] text-xl font-sans">✦</span>
        </h2>
        <p className="text-sm text-[#8A3B4C] font-light">
          Let's connect and create something amazing together.
        </p>
        <div className="flex items-center gap-2 pt-1">
          <div className="w-12 h-[2px] bg-[#8C1C30]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#8C1C30]" />
        </div>
      </div>

      {/* 4 Social Channels Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 relative divide-y md:divide-y-0 md:divide-x divide-rose-200/70 pt-2">
        {/* Channel 1: GitHub */}
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center p-3 sm:p-4 group relative"
        >
          <span className="text-[#B3314B] text-xs font-sans absolute -top-1">✦</span>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-100/60 border border-rose-200/80 shadow-2xs flex items-center justify-center text-[#7E1A2D] group-hover:bg-[#8C1C30] group-hover:text-white transition-all mb-3 group-hover:scale-105">
            <Github className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h3 className="font-script text-2xl text-[#7E1A2D]">GitHub</h3>
          <p className="text-xs text-[#8A3B4C] font-light mt-1 truncate max-w-full px-1">
            {githubHandle}
          </p>
        </a>

        {/* Channel 2: Instagram */}
        <a
          href={data.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center p-3 sm:p-4 group relative"
        >
          <span className="text-[#B3314B] text-xs font-sans absolute -top-1">✦</span>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-100/60 border border-rose-200/80 shadow-2xs flex items-center justify-center text-[#7E1A2D] group-hover:bg-[#8C1C30] group-hover:text-white transition-all mb-3 group-hover:scale-105">
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h3 className="font-script text-2xl text-[#7E1A2D]">Instagram</h3>
          <p className="text-xs text-[#8A3B4C] font-light mt-1 truncate max-w-full px-1">
            @karthy.ka._
          </p>
        </a>

        {/* Channel 3: Email */}
        <a
          href={`mailto:${data.email}`}
          className="flex flex-col items-center text-center p-3 sm:p-4 group relative"
        >
          <span className="text-[#B3314B] text-xs font-sans absolute -top-1">✦</span>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-100/60 border border-rose-200/80 shadow-2xs flex items-center justify-center text-[#7E1A2D] group-hover:bg-[#8C1C30] group-hover:text-white transition-all mb-3 group-hover:scale-105">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h3 className="font-script text-2xl text-[#7E1A2D]">Email</h3>
          <p className="text-xs text-[#8A3B4C] font-light mt-1 truncate max-w-full px-1">
            {data.email}
          </p>
        </a>

        {/* Channel 4: WhatsApp */}
        <a
          href="https://wa.me/918075414826"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center p-3 sm:p-4 group relative"
        >
          <span className="text-[#B3314B] text-xs font-sans absolute -top-1">✦</span>
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-rose-100/60 border border-rose-200/80 shadow-2xs flex items-center justify-center text-[#7E1A2D] group-hover:bg-[#8C1C30] group-hover:text-white transition-all mb-3 group-hover:scale-105">
            <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <h3 className="font-script text-2xl text-[#7E1A2D]">WhatsApp</h3>
          <p className="text-xs text-[#8A3B4C] font-light mt-1 truncate max-w-full px-1">
            +91 8075414826
          </p>
        </a>
      </div>

      {/* Horizontal Separator */}
      <div className="relative flex items-center justify-center my-8">
        <div className="w-full border-t border-rose-200/80" />
        <span className="absolute bg-[#FAF0F0] px-3 text-[#B3314B] text-xs font-sans">✦</span>
      </div>

      {/* Text Me Section Form */}
      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <h3 className="font-script text-3xl sm:text-4xl text-[#7E1A2D]">Text Me</h3>
          <span className="text-[#B3314B] text-sm font-sans">✦</span>
          <div className="w-10 h-[2px] bg-[#B3314B] mt-2" />
        </div>

        {formSubmitted ? (
          <div className="p-8 text-center space-y-3 bg-white/80 rounded-2xl border border-rose-200 shadow-2xs">
            <CheckCircle2 className="w-12 h-12 text-[#8C1C30] mx-auto animate-bounce" />
            <h4 className="text-xl font-bold text-[#7E1A2D]">Message Sent!</h4>
            <p className="text-sm text-[#8A3B4C]">
              Thank you for reaching out. Karthika will respond soon!
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {/* Input Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <User className="w-4 h-4 text-[#8A3B4C]/70 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  required
                  placeholder="Your Name or Email"
                  value={contactForm.nameOrEmail}
                  onChange={(e) => setContactForm({ ...contactForm, nameOrEmail: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 bg-white/70 border border-rose-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8C1C30]/30 text-sm text-[#4A1D28] placeholder-[#A86B79]"
                />
              </div>

              <div className="relative">
                <Mail className="w-4 h-4 text-[#8A3B4C]/70 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 bg-white/70 border border-rose-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8C1C30]/30 text-sm text-[#4A1D28] placeholder-[#A86B79]"
                />
              </div>
            </div>

            {/* Input Row 2: Message Textarea */}
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-[#8A3B4C]/70 absolute left-4 top-4 pointer-events-none" />
              <textarea
                rows={4}
                required
                placeholder="Your Message"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full pl-11 pr-4 py-3 bg-white/70 border border-rose-200/80 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8C1C30]/30 text-sm text-[#4A1D28] placeholder-[#A86B79] resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-7 py-3 bg-gradient-to-r from-[#9E2339] to-[#8C1C30] hover:from-[#7A192B] hover:to-[#6E1423] text-white text-sm font-medium rounded-xl shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </motion.section>
  );
};

/* ================= FOOTER ================= */
export const FooterSection: React.FC<SectionProps> = ({ data }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkBottom = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      // Trigger floating scroll to top arrow when reaching near bottom (contact/footer)
      if (windowHeight + scrollY >= documentHeight - 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkBottom, { passive: true });
    checkBottom();
    return () => window.removeEventListener('scroll', checkBottom);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nameFirstName = data.name.split(' ')[0] || 'Karthika';

  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="pt-2 pb-2 relative"
    >
      {/* Translucent Rounded Footer Capsule Bar */}
      <div className="bg-white/60 backdrop-blur-md border border-rose-200/80 rounded-full py-3.5 px-6 sm:px-10 flex items-center justify-between text-xs sm:text-sm text-[#7E1A2D] font-medium shadow-2xs max-w-2xl mx-auto">
        <span className="text-[#B3314B] font-sans text-xs">✦</span>
        <div className="flex items-center gap-2 font-sans font-light">
          <span>Created with</span>
          <Heart className="w-3.5 h-3.5 fill-[#E05270] text-[#E05270] inline-block animate-pulse" />
          <span>by {nameFirstName}</span>
        </div>
        <span className="text-[#B3314B] font-sans text-xs">✦</span>
      </div>

      {/* Floating Scroll to Top Arrow Button - Appears smoothly when reaching bottom */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-10 z-50 w-12 h-12 rounded-full bg-[#8C1C30] hover:bg-[#6E1423] text-white flex items-center justify-center shadow-xl border border-rose-200/40 transition-colors cursor-pointer hover:scale-110 active:scale-95 group"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
  );
};
