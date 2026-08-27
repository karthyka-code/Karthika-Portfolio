import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { StickyLeftPhoto } from './components/StickyLeftPhoto';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  EducationSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
  FooterSection
} from './components/RightScrollStack';

export default function App() {
  const portfolioData = initialPortfolioData;
  const [activeSection, setActiveSection] = useState('hero');
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsEl = document.getElementById('skills');
      if (skillsEl) {
        const skillsTop = skillsEl.getBoundingClientRect().top;
        // Shrink when skills section approaches or passes top viewport
        if (skillsTop < window.innerHeight * 0.7) {
          setIsShrunk(true);
        } else {
          setIsShrunk(false);
        }
      }

      const sections = ['hero', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update document title based on active section
  useEffect(() => {
    const sectionTitles: Record<string, string> = {
      hero:       'Karthika S — Portfolio',
      about:      'About me | Karthika S',
      skills:     'Skills & Tools | Karthika S',
      education:  'Education | Karthika S',
      experience: 'Experience | Karthika S',
      projects:   'Projects | Karthika S',
      contact:    'Contact | Karthika S',
    };
    document.title = sectionTitles[activeSection] ?? 'Karthika S — Portfolio';
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-[#FAF0F0] text-[#3D2529] font-sans antialiased relative selection:bg-[#B3314B]/20 selection:text-[#801B30]">
      {/* Top Floating Glassmorphism Navbar (smoothly hides when shrunk) */}
      <Navbar
        name={portfolioData.name}
        resumeUrl={portfolioData.resumeUrl}
        isShrunk={isShrunk}
      />

      {/* Main Page Layout with Dynamic Left Sidebar & Right Scrollable Content */}
      <div className="flex flex-col md:flex-row w-full max-w-[1800px] mx-auto relative items-start min-h-screen">
        {/* Left Sticky Photo / Curved Sidebar */}
        <StickyLeftPhoto
          imageSrc={portfolioData.profileImage}
          resumeUrl={portfolioData.resumeUrl}
          isShrunk={isShrunk}
          activeSection={activeSection}
        />

        {/* Right Content Column (width smoothly expands when left panel shrinks) */}
        <div
          className={`w-full transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] px-4 sm:px-10 md:px-12 lg:px-16 -mt-9 pt-3 sm:mt-0 sm:pt-12 md:pt-48 pb-4 ${isShrunk
              ? 'md:w-[76%] lg:w-[80%] xl:w-[82%]'
              : 'md:w-[58%] lg:w-[55%]'
            }`}
        >
          <div className="space-y-24 md:space-y-32">
            <HeroSection data={portfolioData} />
            <AboutSection data={portfolioData} />
            <SkillsSection data={portfolioData} />
            <EducationSection data={portfolioData} />
            <ExperienceSection data={portfolioData} />
            <ProjectsSection data={portfolioData} />
            <ContactSection data={portfolioData} />
          </div>
          <div className="mt-16 md:mt-20 pb-2">
            <FooterSection data={portfolioData} />
          </div>
        </div>
      </div>
    </div>
  );
}
