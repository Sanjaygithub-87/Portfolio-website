export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'AI & ML' | 'Automation';
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; tag?: string }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  year: string;
  location: string;
  description: string;
  points: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year: string;
  status: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  skillsCovered: string[];
  badgeColor: string;
}

export const PERSONAL_INFO = {
  name: "SANJAY S",
  title: "Full-Stack Developer & AI Enthusiast",
  subheading: "B.E. Computer Science (2025) • React & Next.js • Node.js • Java • MongoDB & SQL • n8n Automation",
  email: "Sanjayedu045@gmail.com",
  phone: "+91 9345030051",
  location: "Chennai, Tamil Nadu, India",
  graduationYear: "2025",
  github: "https://github.com/Sanjaygithub-87",
  linkedin: "https://linkedin.com/in/sanjay-s-cse",
  statusBadge: "Available for Full-Time Roles (Fresher 2025)",
  careerObjective:
    "A 2025 Computer Science Engineering graduate (Fresher) with a solid foundation across front-end, back-end, and database technologies, along with practical experience building complete, working applications. Comfortable working across the stack — from designing clean, responsive interfaces to building server-side logic and managing data. Eager to start my career as a Developer and contribute to a team through strong fundamentals, adaptability, and a genuine interest in problem-solving.",
  stats: [
    { label: "Graduation Score", value: "83%", sub: "B.E. Computer Science" },
    { label: "Production Projects", value: "5+", sub: "Web, AI & Automation" },
    { label: "Internships Completed", value: "3", sub: "Hands-on Experience" },
    { label: "Recognition Accuracy", value: "90%+", sub: "AI Sign Translator" },
  ],
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ai-product-recommendation",
    title: "AI-Powered Product Recommendation System",
    subtitle: "High-Speed LLM E-Commerce Engine powered by Groq API",
    category: "AI & ML",
    description:
      "A next-generation product discovery system combining a responsive React user interface with ultra-low latency Groq API inference. Delivers personalized shopping suggestions by analyzing user intent and browsing signals in real-time.",
    highlights: [
      "Built dynamic front-end in React with clean component modularity, custom hooks, and state management",
      "Integrated Groq API for sub-second LLM inference, delivering tailored recommendations on demand",
      "Implemented responsive product catalogue filtering, dynamic search, and interactive suggestion cards",
    ],
    techStack: ["React", "Groq API", "JavaScript", "Tailwind CSS", "REST API", "Prompt Engineering"],
    githubUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    liveUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    featured: true,
    metrics: "< 1s AI Response Time",
  },
  {
    id: "ai-sign-language-translator",
    title: "AI-Powered Sign Language Translator",
    subtitle: "Real-Time Computer Vision Gesture-to-Text Accessibility Tool",
    category: "AI & ML",
    description:
      "An assistive communication tool leveraging Python and computer vision machine learning models to capture camera hand gestures and translate them to live readable text with 90%+ recognition accuracy.",
    highlights: [
      "Engineered real-time gesture-to-text pipeline to bridge communication barriers for hearing-impaired individuals",
      "Achieved 90%+ recognition accuracy using Python-based ML models trained for multi-gesture classification",
      "Optimized frame processing pipeline for low-latency live camera feed analysis",
    ],
    techStack: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "NumPy", "Scikit-Learn"],
    githubUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    liveUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    featured: true,
    metrics: "90%+ Accuracy",
  },
  {
    id: "n8n-workflow-automation",
    title: "n8n Workflow Automation Engine",
    subtitle: "End-to-End Multi-Channel Marketing & Social Media Automation",
    category: "Automation",
    description:
      "Enterprise-grade workflow automation architected on n8n. Seamlessly orchestrates automated email campaigns and synchronized social media posts across Gmail, LinkedIn, and Facebook with webhooks and error recovery.",
    highlights: [
      "Automated email campaigns and multi-platform social media distribution across Gmail, LinkedIn, and Facebook",
      "Engineered REST webhook triggers, HTTP request nodes, conditional branching, and JSON payload mapping",
      "Configured robust error handling, automated retry logic, and monitoring notifications for reliable uptime",
    ],
    techStack: ["n8n", "Webhooks", "REST APIs", "JSON Mapping", "Gmail API", "LinkedIn API", "Error Handling"],
    githubUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    liveUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    featured: true,
    metrics: "100% Automated Campaigns",
  },
  {
    id: "student-management-system",
    title: "Full-Stack Student Management System",
    subtitle: "Enterprise Academic Portal with Role-Based Authentication",
    category: "Full Stack",
    description:
      "Secure, comprehensive institutional management portal engineered using Java Servlets, JDBC, and MySQL. Implements MVC design architecture for role-based access control, student records, and grade reporting.",
    highlights: [
      "Developed secure web application with role-based access (Admin, Faculty, Student) and full CRUD operations",
      "Strictly adhered to MVC architecture ensuring decoupled business logic, controllers, and persistence layers",
      "Designed normalized MySQL database schemas, optimized SQL queries, and robust JDBC transactions",
    ],
    techStack: ["Java", "Java Servlets", "JDBC", "MySQL", "MVC Architecture", "HTML5/CSS3", "JavaScript"],
    githubUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    liveUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    featured: true,
    metrics: "Role-Based Security",
  },
  {
    id: "modern-developer-portfolio",
    title: "Production Portfolio & Cloud Deployment",
    subtitle: "Full-Stack Web Platform with AWS Free Tier Cloud Architecture",
    category: "Full Stack",
    description:
      "This responsive, high-performance portfolio application built with Next.js (App Router, Tailwind CSS) on the frontend and Node.js/Express + MongoDB on the backend, complete with automated AWS Free Tier hosting scripts.",
    highlights: [
      "Responsive glassmorphic UI with dark/light themes, interactive project filters, and live visit tracker",
      "Connected to custom Express.js backend with MongoDB Mongoose schema validation for message storage",
      "Configured with PM2 process manager, Nginx reverse proxy, and SSL setup ready for AWS EC2 Free Tier",
    ],
    techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "AWS EC2", "Nginx"],
    githubUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    liveUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    featured: true,
    metrics: "Next.js + Node + Mongo",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Front-End Development",
    categoryKey: "frontend",
    iconName: "Layout",
    description: "Creating fluid, responsive, and accessible user experiences",
    skills: [
      { name: "React", level: 90, tag: "Core" },
      { name: "Next.js", level: 85, tag: "Modern" },
      { name: "JavaScript (ES6+)", level: 88, tag: "Core" },
      { name: "HTML5 & CSS3", level: 92, tag: "Fundamental" },
      { name: "Tailwind CSS", level: 90, tag: "Styling" },
      { name: "Responsive Web Design", level: 95, tag: "Mobile-First" },
    ],
  },
  {
    title: "Back-End & Architecture",
    categoryKey: "backend",
    iconName: "Server",
    description: "Robust server logic, RESTful APIs, and scalable architectures",
    skills: [
      { name: "Node.js & Express", level: 85, tag: "API Layer" },
      { name: "Java (Core & OOP)", level: 88, tag: "Language" },
      { name: "Java Servlets & JDBC", level: 85, tag: "Enterprise" },
      { name: "RESTful API Integration", level: 90, tag: "Integration" },
      { name: "MVC Architecture", level: 90, tag: "Pattern" },
      { name: "SDLC & Clean Code", level: 88, tag: "Engineering" },
    ],
  },
  {
    title: "Database Management",
    categoryKey: "database",
    iconName: "Database",
    description: "Structured relational models & modern NoSQL document stores",
    skills: [
      { name: "MongoDB & Mongoose", level: 85, tag: "NoSQL" },
      { name: "MySQL", level: 88, tag: "RDBMS" },
      { name: "SQL Queries & Joins", level: 87, tag: "Data Querying" },
      { name: "Schema Design", level: 85, tag: "Modeling" },
      { name: "CRUD Operations", level: 92, tag: "Operations" },
    ],
  },
  {
    title: "Automation & AI Integration",
    categoryKey: "automation",
    iconName: "Zap",
    description: "Connecting AI models and automating cross-platform business workflows",
    skills: [
      { name: "n8n Workflow Automation", level: 92, tag: "Automation" },
      { name: "Webhook Triggers", level: 90, tag: "Event-Driven" },
      { name: "Groq API Integration", level: 88, tag: "AI / LLM" },
      { name: "Python ML & OpenCV", level: 82, tag: "Computer Vision" },
      { name: "JSON Data Mapping", level: 92, tag: "Data Pipeline" },
    ],
  },
  {
    title: "BI, Analytics & Tools",
    categoryKey: "tools",
    iconName: "BarChart3",
    description: "Business intelligence dashboards and developer productivity tooling",
    skills: [
      { name: "IBM Cognos Analytics", level: 85, tag: "Certified" },
      { name: "Git & GitHub", level: 90, tag: "Version Control" },
      { name: "Agile & Scrum Workflows", level: 85, tag: "Methodology" },
      { name: "VS Code & Postman", level: 92, tag: "Productivity" },
      { name: "AWS Free Tier (EC2/Nginx)", level: 82, tag: "Cloud" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Java Full Stack Intern",
    company: "Pantech Solutions",
    type: "Internship",
    period: "2024",
    year: "2024",
    location: "Chennai, India",
    description:
      "Collaborated on enterprise Java backend modules and interactive front-end web interfaces adhering to software development life cycle (SDLC) best practices.",
    points: [
      "Engineered Java backend modules and user-facing HTML/CSS/JavaScript components following SDLC best practices",
      "Executed SQL queries and implemented secure CRUD operations for data management routines",
      "Collaborated using Git version control in Agile sprint cycles with peer developers and mentors",
    ],
    technologies: ["Java", "Servlets", "JDBC", "MySQL", "HTML5", "CSS3", "JavaScript", "Git"],
  },
  {
    role: "Web Content Support",
    company: "Virtual Internship",
    type: "Internship",
    period: "2025",
    year: "2025",
    location: "Remote",
    description:
      "Managed digital content delivery, WordPress CMS architecture, search engine optimization (SEO), and conversion funnel structures.",
    points: [
      "Published and structured SEO-optimized blog content utilizing WordPress CMS with clear CTAs and semantic headings",
      "Optimized content hierarchy and site navigation to elevate user retention and organic reach",
      "Monitored web analytics to identify engagement trends and enhance reader journey flows",
    ],
    technologies: ["WordPress CMS", "SEO Strategy", "Web Content", "Analytics", "HTML/CSS"],
  },
  {
    role: "Skill Upgrade & Applied Engineering",
    company: "Virtual Internship",
    type: "Training & Project Internship",
    period: "2024 - 2025",
    year: "2025",
    location: "Remote",
    description:
      "Strengthened full-stack programming, algorithmic debugging, and analytical problem-solving through intensive real-world project modules.",
    points: [
      "Strengthened programming, debugging, and analytical skills through structured project-based modules",
      "Implemented full-stack architecture patterns connecting modern frontend interfaces to scalable backend data stores",
      "Deepened hands-on mastery in modern automation engines and API integrations",
    ],
    technologies: ["Full-Stack Architecture", "Data Structures", "APIs", "Debugging", "Cloud Hosting"],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.E. Computer Science & Engineering",
    institution: "Arunai Engineering College",
    score: "83%",
    year: "Graduating 2025",
    status: "Final Year / Graduating Fresher",
    highlights: [
      "Strong academic standing with an aggregate score of 83%",
      "Specialized in Software Engineering, Database Management Systems, Computer Networks, and Web Technologies",
      "Active participant in technical symposiums, coding challenges, and collaborative engineering projects",
    ],
  },
  {
    degree: "Higher Secondary (12th Standard)",
    institution: "Sri Ramakrishna Matric Hr. Sec. School",
    score: "70.33%",
    year: "Completed",
    status: "Completed",
    highlights: [
      "Major coursework in Computer Science, Mathematics, Physics, and Chemistry",
      "Built early foundation in programming fundamentals and logic formulation",
    ],
  },
  {
    degree: "Secondary School Leaving Certificate (10th Standard)",
    institution: "Sri Ramakrishna Matric Hr. Sec. School",
    score: "94%",
    year: "Completed",
    status: "Completed with Distinction",
    highlights: [
      "Achieved 94% distinction with top marks in Mathematics and Science",
      "Recognized for academic excellence and analytical aptitude",
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "IBM Cognos Analytics – Business Intelligence",
    issuer: "IBM",
    skillsCovered: ["Data Analysis", "Executive Reporting", "Data Modeling", "Dashboard Creation"],
    badgeColor: "from-blue-600 to-indigo-700",
  },
  {
    title: "Java Full Stack Training Certification",
    issuer: "Pantech / Professional Training",
    skillsCovered: ["Java Core", "Servlets & JSP", "JDBC", "MySQL", "HTML5", "CSS3", "JavaScript"],
    badgeColor: "from-amber-600 to-orange-700",
  },
];
