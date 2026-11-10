export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & ML' | 'Automation' | 'Full Stack';
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  imageUrl?: string; // Direct image URL or local path like '/projects/ai-rec.png'
  accentColor?: string;
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
  role: "AI Engineer & Agentic Automation Specialist",
  title: "AI Engineer & Agentic Developer | n8n Automation • Antigravity • Google Stitch UI/UX • Prompt Engineering",
  subheading: "n8n Pipelines • Antigravity Agentic Systems • Google Stitch UI/UX • Advanced Prompt Engineering • Groq LLM API • Next.js 16",
  email: "Sanjayedu045@gmail.com",
  phone: "+91 9345030051",
  location: "Chennai, Tamil Nadu, India",
  graduationYear: "2025",
  github: "https://github.com/Sanjaygithub-87",
  linkedin: "https://linkedin.com/in/sanjay-s-cse",
  statusBadge: "Available for AI & Automation Projects | Client Consulting & High-Impact Roles",
  // You can set avatarUrl to a direct image URL (e.g. from Imgur, Cloudinary, GitHub) OR place a photo named 'profile.jpg' in 'frontend/public/' folder!
  avatarUrl: "/profile.jpg", 
  careerObjective:
    "Passionate AI Engineer and Agentic Developer specializing in autonomous agent workflows with Antigravity, enterprise-grade n8n workflow automations, Google Stitch visual UI/UX architecture, and advanced prompt engineering. Backed by an 83% B.E. Computer Science degree and full-stack software engineering fundamentals (Next.js 16, React 19, Node.js, Docker, MongoDB), I build reliable, high-performance applications that transform business operations and user experiences through artificial intelligence.",
  stats: [
    { label: "n8n Automation Pipelines", value: "100%", sub: "Multi-Platform Automated Flows" },
    { label: "Agentic AI Engineering", value: "Antigravity", sub: "DeepMind Multi-Agent Workflows" },
    { label: "UI/UX & Prototyping", value: "Google Stitch", sub: "High-Fidelity Visual Systems" },
    { label: "Prompt Engineering", value: "< 1s", sub: "Groq LLM Inference & CoT" },
  ],
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ai-product-recommendation",
    title: "AI-Powered Product Recommendation Engine",
    subtitle: "Real-Time LLM Suggestion Engine with Advanced Prompt Engineering",
    category: "AI & ML",
    description:
      "Next-generation AI discovery platform combining Google Stitch UI/UX design wireframes with a responsive React interface and ultra-low latency Groq LLM API. Leverages precision prompt engineering and Chain-of-Thought (CoT) reasoning to generate personalized e-commerce suggestions in sub-second speed.",
    highlights: [
      "Engineered prompt-optimized LLM pipeline leveraging Groq API and few-shot prompt engineering for lightning-fast (< 1s) contextual inferences",
      "Prototyped high-conversion visual design wireframes using Google Stitch, converted seamlessly into modular React 19 components",
      "Designed responsive product recommendation cards with real-time feedback loops and context-aware filtering",
    ],
    techStack: ["Groq LLM API", "Prompt Engineering", "Google Stitch UI/UX", "React 19", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    liveUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    featured: true,
    metrics: "< 1s AI Response",
    accentColor: "from-blue-600 to-cyan-500",
  },
  {
    id: "ai-sign-language-translator",
    title: "AI-Powered Sign Language Translator",
    subtitle: "Real-Time Computer Vision Gesture-to-Text Recognition System",
    category: "AI & ML",
    description:
      "Assistive artificial intelligence system leveraging Python, OpenCV, and deep machine learning classification models. Captures video feed gestures and translates hand signs into readable text in real-time with 90%+ recognition accuracy.",
    highlights: [
      "Trained and evaluated Python-based machine learning classification models achieving 90%+ gesture accuracy",
      "Engineered real-time frame capture pipeline with OpenCV to process continuous video streams with minimal latency",
      "Designed for high accessibility to empower hearing-impaired users with seamless communication tools",
    ],
    techStack: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "NumPy", "Scikit-Learn"],
    githubUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    liveUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    featured: true,
    metrics: "90%+ ML Accuracy",
    imageUrl: "/projects/sign-language.jpg",
    accentColor: "from-cyan-500 to-blue-600",
  },
  {
    id: "n8n-workflow-automation",
    title: "n8n Enterprise Workflow Automation Pipeline",
    subtitle: "Automated Multi-Channel Marketing & Social Distribution Engine",
    category: "Automation",
    description:
      "Robust enterprise automation architecture built on n8n. Seamlessly orchestrates automated email campaigns and cross-platform social media distribution across Gmail, LinkedIn, and Facebook with webhooks, conditional routing, and automated recovery.",
    highlights: [
      "Automated cross-platform distribution and email campaigns across Gmail, LinkedIn, and Facebook without manual intervention",
      "Configured webhook listeners, REST HTTP nodes, conditional logic branching, and dynamic JSON transformations",
      "Engineered fault-tolerant error boundaries with automated alerts and retry queues for maximum delivery reliability",
    ],
    techStack: ["n8n Automation", "Webhook Triggers", "REST APIs", "JSON Data Pipelines", "Gmail API", "LinkedIn API"],
    githubUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    liveUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    featured: true,
    metrics: "100% Automated Workflow",
    accentColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "student-management-system",
    title: "Full-Stack Enterprise Management System",
    subtitle: "Institutional Portal with Role-Based Authentication & MVC",
    category: "Full Stack",
    description:
      "Secure, comprehensive institutional management portal engineered using Java Servlets, JDBC, and MySQL. Adheres strictly to standard MVC architecture for role-based authentication, student profiles, attendance, and grading.",
    highlights: [
      "Developed secure authentication with role-based access control (Admin, Faculty, Student) and complete CRUD operations",
      "Followed strict MVC architecture ensuring decoupled business logic, controllers, and database access layers",
      "Designed normalized relational MySQL schemas, optimized SQL queries, and robust JDBC transactions",
    ],
    techStack: ["Java", "Java Servlets", "JDBC", "MySQL", "MVC Architecture", "HTML5/CSS3", "JavaScript"],
    githubUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    liveUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    featured: true,
    metrics: "Role-Based Security",
    accentColor: "from-cyan-600 to-blue-700",
  },
  {
    id: "modern-developer-portfolio",
    title: "Production Cloud Platform & Agentic Architecture",
    subtitle: "Engineered with Antigravity Agentic Workflows & Google Stitch UI/UX",
    category: "Full Stack",
    description:
      "Production-grade personal portfolio platform designed using Google Stitch for high-fidelity UI/UX rapid wireframing, paired with Antigravity for advanced agentic coding. Powered by Next.js 16 (App Router, Tailwind CSS) on the frontend, Node.js Express + Docker MongoDB on the backend, hosted on AWS EC2 with instant Telegram push alerts.",
    highlights: [
      "Prototyped elegant, clean Executive White & Royal Blue visual system using Google Stitch design methodologies",
      "Utilized Antigravity agentic workflows for rapid system architecture, multi-agent pair programming, and automated verification",
      "Configured automated deployment pipeline on AWS EC2 with PM2, Nginx reverse proxy, SSL, and real-time Telegram bot alerts",
    ],
    techStack: ["Antigravity Agentic Coding", "Google Stitch UI/UX", "Next.js 16", "React 19", "Docker MongoDB", "AWS EC2", "Telegram API"],
    githubUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    liveUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    featured: true,
    metrics: "AWS EC2 Live",
    accentColor: "from-blue-600 to-sky-400",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Agentic AI & Prompt Engineering",
    categoryKey: "ai",
    iconName: "Bot",
    description: "Developing autonomous agentic systems, precision prompt engineering & LLM applications",
    skills: [
      { name: "Advanced Prompt Engineering", level: 95, tag: "CoT & System" },
      { name: "Antigravity (Agentic AI)", level: 93, tag: "DeepMind Tools" },
      { name: "Groq LLM API", level: 94, tag: "< 1s Speed" },
      { name: "Python (ML & OpenCV)", level: 88, tag: "90%+ Acc" },
      { name: "Multi-Agent Orchestration", level: 90, tag: "Autonomous" },
    ],
  },
  {
    title: "Workflow Automation (n8n)",
    categoryKey: "automation",
    iconName: "Zap",
    description: "Orchestrating end-to-end automated pipelines, event webhooks & integration ecosystems",
    skills: [
      { name: "n8n Workflow Builder", level: 96, tag: "Expert" },
      { name: "Webhook Triggers", level: 94, tag: "Event-Driven" },
      { name: "JSON Data Transformation", level: 95, tag: "Data Mapping" },
      { name: "REST API Integration", level: 93, tag: "Multi-Channel" },
      { name: "Automated Error Retries", level: 92, tag: "Reliability" },
    ],
  },
  {
    title: "UI/UX & Front-End Engineering",
    categoryKey: "frontend",
    iconName: "Layout",
    description: "Crafting intuitive visual design systems with Google Stitch & high-performance Next.js",
    skills: [
      { name: "Google Stitch for UI/UX", level: 94, tag: "Rapid Prototyping" },
      { name: "Next.js 16 (App Router)", level: 92, tag: "Modern" },
      { name: "React 19 & JavaScript (ES6+)", level: 90, tag: "Core" },
      { name: "Tailwind CSS v4 Systems", level: 94, tag: "Styling" },
      { name: "Responsive Component Design", level: 91, tag: "Clean UI" },
    ],
  },
  {
    title: "Back-End & Databases",
    categoryKey: "database",
    iconName: "Database",
    description: "Robust API services, Docker containerization & document/relational databases",
    skills: [
      { name: "Node.js & Express REST APIs", level: 88, tag: "APIs" },
      { name: "MongoDB & Docker Containers", level: 88, tag: "Containerized" },
      { name: "MySQL & SQL Schemas", level: 88, tag: "RDBMS" },
      { name: "Java Servlets & JDBC", level: 85, tag: "Enterprise" },
      { name: "MVC Architecture Patterns", level: 90, tag: "Architecture" },
    ],
  },
  {
    title: "Cloud DevOps & Developer Tooling",
    categoryKey: "tools",
    iconName: "BarChart3",
    description: "AWS cloud environments, automated deployment pipelines, and analytics",
    skills: [
      { name: "AWS EC2 & Nginx SSL Proxy", level: 87, tag: "Cloud" },
      { name: "PM2 Process Management", level: 90, tag: "Zero-Downtime" },
      { name: "Telegram Bot API Alerts", level: 95, tag: "Real-Time" },
      { name: "Git & GitHub Workflows", level: 92, tag: "Version Control" },
      { name: "IBM Cognos Analytics", level: 85, tag: "Certified" },
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
      "Engineered enterprise Java backend modules and interactive user interfaces following strict SDLC principles, database optimization, and agile team sprint cycles.",
    points: [
      "Developed Java backend logic and frontend interfaces (HTML, CSS, JavaScript) adhering to SDLC standards",
      "Executed SQL queries and implemented secure CRUD operations for data management routines",
      "Collaborated using Git version control and participated in daily Agile project standups",
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
      "Managed digital content architecture, WordPress CMS optimization, search engine optimization (SEO), and conversion funnel structures.",
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
      "Strengthened advanced programming, AI integrations, n8n automation pipelines, and analytical problem-solving through intensive real-world project modules.",
    points: [
      "Strengthened algorithmic programming, debugging, and analytical skills through structured project-based modules",
      "Implemented full-stack architecture patterns connecting modern frontend interfaces to scalable backend data stores",
      "Deepened hands-on mastery in modern automation engines, webhooks, and AI API integrations",
    ],
    technologies: ["AI Systems", "n8n Automation", "APIs", "Data Structures", "Cloud Hosting"],
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
      "Graduating with an aggregate score of 83% Distinction",
      "Specialized in Artificial Intelligence, Software Engineering, Database Management Systems, and Web Technologies",
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
    badgeColor: "from-blue-600 to-cyan-700",
  },
  {
    title: "Java Full Stack Training Certification",
    issuer: "Pantech / Professional Training",
    skillsCovered: ["Java Core", "Servlets & JSP", "JDBC", "MySQL", "HTML5", "CSS3", "JavaScript"],
    badgeColor: "from-sky-600 to-blue-700",
  },
];
