import { PortfolioData } from '../types';
import portraitImg from '../assets/images/karthika.jpeg';

export const initialPortfolioData: PortfolioData = {
  name: "Karthika S",
  greeting: "Hey,",
  titleRole: "Third year B.Tech Computer Science and Engineering Student",
  institution: "College of Engineering Chengannur",
  institutionHighlight: "College of Engineering Chengannur",
  profileImage: portraitImg,
  aboutText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  aboutText2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  aboutText3: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  skills: [
    "React.js", "TypeScript", "Tailwind CSS", "Python",
    "C++", "Data Structures", "Node.js", "Git / GitHub"
  ],
  resumeUrl: "#",
  email: "karthikashi04@gmail.com",
  linkedin: "https://www.linkedin.com/in/karthika-suresh2004",
  github: "https://github.com/karthyka-code",
  instagram: "https://instagram.com/karthy.ka._",
  location: "Chengannur, Kerala, India",
  projects: [
    {
      id: "p1",
      title: "blahhh",
      category: "Analytics & Web",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      tech: ["React", "TypeScript", "Tailwind CSS", "Python"],
      link: "https://github.com/karthika-s/blahhh",
      github: "https://github.com/karthika-s/blahhh"
    },
    {
      id: "p2",
      title: "blahh blahh",
      category: "Full Stack App",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      tech: ["React", "Node.js", "Express", "Tailwind"],
      link: "https://github.com/karthika-s/blahh",
      github: "https://github.com/karthika-s/blahh"
    },
    {
      id: "p3",
      title: "blah ",
      category: "Utility App",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      tech: ["React", "TypeScript", "Tailwind", "LocalStorage"],
      link: "https://github.com/karthika-s/blah",
      github: "https://github.com/karthika-s/blah"
    }
  ],
  education: [
    {
      id: "edu1",
      stage: "01",
      level: "Primary School",
      institution: "St. Mary's Girls High School",
      location: "Chengannur, Kerala",
      description: "Completed my primary education with a strong foundation and a passion for learning.",
      period: "2010 - 2020",
      iconType: "primary"
    },
    {
      id: "edu2",
      stage: "02",
      level: "High School",
      institution: "St. Mary's Girls Higher Secondary School",
      location: "Chengannur, Kerala",
      description: "Completed my secondary education with dedication and active participation in academic and co-curricular activities.",
      period: "2021 - 2023",
      iconType: "highschool"
    },
    {
      id: "edu3",
      stage: "03",
      level: "Graduation",
      institution: "College of Engineering Chengannur",
      location: "Chengannur, Kerala",
      description: "Pursuing B.Tech in Computer Science and Engineering with a focus on innovation and problem solving.",
      period: "2019 - Present",
      iconType: "college"
    }
  ],
  experience: [
    {
      id: "exp1",
      organization: "µLearn CHN",
      role: "CONTENT WRITER",
      period: "Jan 2026 - Present",
      description: "Creating engaging content for social media and events. Crafting captions, posts, and announcements to enhance community engagement.",
      highlights: []
    },
    {
      id: "exp2",
      organization: "Alumni Relations Cell",
      role: "DOCUMENTATION TEAM MEMBER",
      period: "Nov 2025 - Present",
      description: "Worked on content creation for workshops, events, and technical initiatives. Collaborated with the team to design posters and write event briefs.",
      highlights: []
    },
    {
      id: "exp3",
      organization: "NSS NRPF",
      role: "REGIONAL COORDINATOR",
      period: "June 2026 - Present",
      description: "Overseeing NSS unit activities and volunteer engagement across the assigned region, coordinating with unit leads and serving as a liaison between the regional body and local chapters to ensure smooth communication and execution of initiatives.",
      highlights: []
    }
  ]
};
