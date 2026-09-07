import { 
  PersonalDetails, 
  SkillCategory, 
  Project, 
  ExperienceItem, 
  EducationItem, 
  CertificationItem, 
  AchievementItem 
} from '../types/portfolio';

export const personalDetails: PersonalDetails = {
  name: 'Sirajuddeen Muhammadu Shimrin',
  title: 'Computer Engineering Undergraduate',
  university: 'University of Ruhuna',
  degree: 'B.Sc. Engineering (Hons) in Computer Engineering',
  expectedGraduation: 'May 2027',
  location: 'Sri Lanka',
  tagline: 'Engineering AI-driven computer vision systems, digital hardware controllers, and robust full-stack applications.',
  avatarUrl: '/profile.jpg', // Drop your profile image as 'public/profile.jpg' or 'public/profile.png'
  // Bio kept under 180 words as specified
  shortBio: `Computer Engineering Undergraduate at the University of Ruhuna, passionate about building innovative solutions through software and hardware technologies. Interested in Artificial Intelligence, Computer Vision, Embedded Systems, Digital Hardware Design, and Full-Stack Software Development. Strong foundation in Data Structures & Algorithms, Machine Learning, Operating Systems, Computer Architecture, and Software Engineering principles. Enjoy solving complex engineering problems by designing efficient systems, writing clean and maintainable code, and continuously improving technical skills. Currently exploring emerging technologies and seeking Software Engineering / Computer Engineering internship and graduate opportunities to contribute, learn, and grow as an engineer.`,
  resumeUrl: '/Common_CV.pdf', // General Master CV
  resumeLastUpdated: 'August 2026',
  specializedResumes: [
    {
      label: 'Common Computer Engineering CV',
      description: 'Comprehensive Master CV covering Software, AI/ML, Cybersecurity, and Hardware Engineering.',
      url: '/Common_CV.pdf',
      iconType: 'general',
    },
    {
      label: 'Software Engineering CV',
      description: 'Tailored for Full-Stack, Backend, and Core Software Engineering roles.',
      url: '/Software_Engineering_CV.pdf',
      iconType: 'software',
    },
    {
      label: 'AI & Machine Learning Engineering CV',
      description: 'Tailored for Artificial Intelligence, Computer Vision (OpenCV), and ML roles.',
      url: '/AI_ML_Engineering_CV.pdf',
      iconType: 'aiml',
    },
    {
      label: 'Cybersecurity & Networking Engineering CV',
      description: 'Tailored for Network Security, Systems Hardening, and Protocols roles.',
      url: '/Cybersecurity_Network_Engineering_CV .pdf',
      iconType: 'cybersecurity',
    },
    {
      label: 'Hardware Engineering CV',
      description: 'Tailored for FPGA Design, Verilog/VHDL, Digital Logic, and Embedded Hardware roles.',
      url: '/Hardware_Engineering_CV.pdf',
      iconType: 'hardware',
    },
  ],
  socials: {
    github: 'https://github.com/shimrin23',
    linkedin: 'https://www.linkedin.com/in/smrn01223',
    email: 'shimrinsiraj@gmail.com',
  },
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core programming languages for systems, AI/ML, and application engineering.',
    skills: [
      { name: 'Python', level: 'Proficient', highlight: true },
      { name: 'C / C++', level: 'Proficient', highlight: true },
      { name: 'Java', level: 'Proficient' },
      { name: 'JavaScript (ES6+)', level: 'Proficient' },
      { name: 'TypeScript', level: 'Proficient', highlight: true },
      { name: 'Verilog / VHDL', level: 'Proficient', highlight: true },
      { name: 'SQL', level: 'Proficient' },
    ],
  },
  {
    id: 'computer-engineering',
    title: 'Computer Engineering & Hardware',
    description: 'Digital logic design, microcontrollers, state machines, and hardware architecture.',
    skills: [
      { name: 'Digital Hardware Design', level: 'Proficient', highlight: true },
      { name: 'FPGA Architecture', level: 'Proficient', highlight: true },
      { name: 'Finite State Machines (FSM)', level: 'Proficient', highlight: true },
      { name: 'Data Structures & Algorithms', level: 'Proficient', highlight: true },
      { name: 'Operating Systems', level: 'Proficient' },
      { name: 'Computer Networks', level: 'Proficient' },
      { name: 'Embedded Microcontrollers', level: 'Proficient' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Computer Vision',
    description: 'Machine learning algorithms, computer vision pipelines, and predictive analytics.',
    skills: [
      { name: 'OpenCV', level: 'Proficient', highlight: true },
      { name: 'Object Detection', level: 'Proficient', highlight: true },
      { name: 'Scikit-Learn', level: 'Proficient', highlight: true },
      { name: 'Pandas & NumPy', level: 'Proficient' },
      { name: 'Predictive Analytics', level: 'Proficient' },
      { name: 'Data Visualization', level: 'Proficient' },
    ],
  },
  {
    id: 'web',
    title: 'Full-Stack & Web Technologies',
    description: 'Modern web application frameworks, backend development, and RESTful APIs.',
    skills: [
      { name: 'HTML5 / CSS3', level: 'Proficient' },
      { name: 'React', level: 'Proficient', highlight: true },
      { name: 'Node.js & Express', level: 'Proficient' },
      { name: 'RESTful API Design', level: 'Proficient', highlight: true },
      { name: 'JavaFX / Swing', level: 'Proficient' },
      { name: 'Tailwind CSS', level: 'Proficient' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Relational databases and application data management.',
    skills: [
      { name: 'MySQL', level: 'Proficient', highlight: true },
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'Database Schema Design', level: 'Proficient' },
      { name: 'File Storage & Persistence', level: 'Proficient' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Development Tools',
    description: 'Version control, hardware simulation tools, and Unix environments.',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient', highlight: true },
      { name: 'Linux / Unix Command Line', level: 'Proficient', highlight: true },
      { name: 'FPGA Simulation Tools', level: 'Proficient' },
      { name: 'VS Code', level: 'Proficient' },
    ],
  },
];
// Dynamically import all projects from individual JSON files (managed by Decap CMS)
const projectModules = import.meta.glob<Project | { default: Project }>('./projects/*.json', { eager: true });
export const projects: Project[] = Object.values(projectModules)
  .map((mod: any) => (mod.default ? mod.default : mod))
  .sort((a, b) => {
    if (a.isFlagship && !b.isFlagship) return -1;
    if (!a.isFlagship && b.isFlagship) return 1;
    return 0;
  });


export const experienceItems: ExperienceItem[] = [
  {
    id: 'botcalm-internship',
    type: 'Internship',
    role: 'Software Engineering Intern',
    organization: 'BotCalm Private Ltd',
    location: 'Sri Lanka',
    period: '2025 – Present',
    responsibilities: [
      'Assisting in the design and deployment of automated software solutions and AI integration at BotCalm Private Ltd.',
      'Collaborating with senior engineers to implement full-stack features, optimize API endpoints, and refine UI components.',
      'Participating in agile code reviews, system debugging, and quality assurance for client software products.',
    ],
    technologies: ['Python', 'Web Technologies', 'JavaScript / TypeScript', 'REST APIs', 'Git'],
  },
];

export const educationData: EducationItem = {
  institution: 'University of Ruhuna',
  degree: 'Bachelor of Science in Engineering (Hons) in Computer Engineering',
  graduationYear: 'Expected Graduation: May 2027',
  gpa: '3.4 / 4.0',
  relevantCoursework: [
    'Data Structures & Algorithms',
    'Advanced Data Structures & Algorithms',
    'Computer Architecture',
    'Database Systems',
    'Software Engineering Principles',
    'Software Testing & Quality Assurance',
    'Digital Logic Design',
    'Digital System Design with HDL',
    'Machine Learning',
    'Artificial Intelligence',
    'Computer Vision & Image Processing',
    'Operating System & Network Programming',
    'Computer Networks',
    'Embedded Systems Design',
    'Object Oriented Design Patterns & Principles',
    'Web Application Development',
    'Mobile Application Development',
    'DevOps Engineering',
    'Software Architecture',
    'Software Group Project',
    'GUI Programming',
    'Electrical & Electronic Measurements',
    'Analog Electronics',
    'Signals & Systems',
    'Control Systems Design',
    'Discrete Mathematics',
    'Probability & Statistics',
    'Complex Analysis & Mathematical Transforms',
    'Numerical Methods',
    'Information Security',
    'Research Methodologies',
    'Engineering Ethics',
    'Fundamentals of Management for Engineers',
    'Society & the Engineers',
    'Basic Economics',
  ],
  finalYearProject: {
    title: 'Computer Vision & Embedded Hardware Integration',
    summary: 'Undergraduate research focus integrating machine learning and real-time computer vision models with dedicated hardware controllers.',
    technologies: ['Python', 'OpenCV', 'Verilog', 'Embedded Systems'],
  },
  additionalEducation: [
    {
      institution: 'Aquinas College of Higher Studies',
      degree: 'Diploma in English Language and Literature',
      period: 'Mar 2022 – Jun 2024',
      description: 'Advanced diploma program in English Language & Literature, developing strong written, verbal, and technical communication skills.',
    },
  ],
};

export const certificationItems: CertificationItem[] = [
  {
    id: 'cert-aws-ai',
    title: 'AWS AI Practitioner Challenge',
    issuer: 'Udacity',
    date: 'May 2026',
    credentialUrl: 'https://www.linkedin.com/in/smrn01223/details/certifications/',
    skills: ['AWS AI', 'Artificial Intelligence', 'Cloud Machine Learning'],
  },
  {
    id: 'cert-ieeextreme',
    title: 'IEEEXtreme 19.0 Global Programming Competition - Participant',
    issuer: 'IEEE (Team FireForces)',
    date: 'Oct 2025',
    credentialUrl: 'https://www.linkedin.com/in/smrn01223/details/certifications/',
    skills: ['Data Structures', 'Algorithms', 'Competitive Programming', 'Problem Solving'],
  },
  {
    id: 'cert-cursor-vibe',
    title: 'Cursor Vibe Coding Pro: Build Any App from Scratch with AI',
    issuer: 'Udemy',
    date: 'Apr 2026',
    credentialId: 'UC-05893f96-eef3-4063-887d-e86e9a41a023',
    credentialUrl: 'https://www.linkedin.com/in/smrn01223/details/certifications/',
    skills: ['AI-Assisted Coding', 'Prompt Engineering', 'Rapid App Prototyping'],
  },
  {
    id: 'cert-networking-fundamentals',
    title: 'Networking Fundamentals',
    issuer: 'IEEE',
    date: 'Apr 2025',
    credentialUrl: 'https://www.linkedin.com/in/smrn01223/details/certifications/',
    skills: ['Networking', 'Wireshark', 'TCP/IP Protocols'],
  },
  {
    id: 'cert-hp-ai-beginners',
    title: 'AI For Beginners',
    issuer: 'HP LIFE',
    date: 'Apr 2025',
    credentialId: '19577602-dbf6-4cef-a082-8a1ad0cf1ed9',
    credentialUrl: 'https://www.linkedin.com/in/smrn01223/details/certifications/',
    skills: ['Artificial Intelligence (AI)', 'Data Literacy'],
  },
  {
    id: 'cert-bitcoin-dev',
    title: 'Bitcoin for Developers',
    issuer: 'Saylor University',
    date: 'Apr 2025',
    credentialId: '3536047149SS',
    credentialUrl: 'https://www.linkedin.com/in/smrn01223/details/certifications/',
    skills: ['Bitcoin', 'Cryptocurrency', 'Blockchain Security'],
  },
  {
    id: 'cert-aquinas-english',
    title: 'Diploma in English Language and Literature',
    issuer: 'Aquinas College of Higher Studies',
    date: 'Jun 2024',
    credentialUrl: 'https://www.linkedin.com/in/smrn01223/details/certifications/',
    skills: ['Communication', 'Critical Thinking', 'Technical Writing'],
  },
  {
    id: 'cert-fusion-dica',
    title: 'Diploma on Computer Applications',
    issuer: 'Sarvodaya-Fusion',
    date: 'Jul 2016',
    credentialUrl: 'https://www.linkedin.com/in/smrn01223/details/certifications/',
    skills: ['Computer Applications', 'Internet & Email', 'Digital Literacy'],
  },
];

export const achievementItems: AchievementItem[] = [
  {
    id: 'achieve-karate-vice-captain',
    title: 'Vice-Captain, Karate Team',
    category: 'Leadership',
    organization: 'Faculty of Engineering, University of Ruhuna',
    year: '2024 – 2025',
    description: 'Led sports team training sessions, promoted athletic discipline, and organized competitive martial arts events.',
  },
  {
    id: 'achieve-ieee-iesl-member',
    title: 'Active Member | IESL & IEEE Student Branches',
    category: 'Leadership',
    organization: 'Institution of Engineers Sri Lanka (IESL) & IEEE',
    year: '2024 – Present',
    description: 'Active member participating in professional engineering workshops, seminars, and tech community activities.',
  },
];
