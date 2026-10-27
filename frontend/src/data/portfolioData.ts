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
  role: "AI Engineer & AI Developer",
  title: "AI Engineer & AI Developer | n8n Automation Specialist",
  subheading: "Groq LLM API • Computer Vision ML Models • n8n Workflow Pipelines • React & Next.js • Node.js",
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
    "Passionate AI Engineer and AI Developer with hands-on experience designing end-to-end intelligent systems, real-time Computer Vision models, and enterprise-grade n8n workflow automations. Backed by an 83% B.E. Computer Science degree and full-stack software engineering fundamentals, I build reliable, high-performance applications that transform business operations and user experiences through artificial intelligence.",
  stats: [
    { label: "AI Translation Accuracy", value: "90%+", sub: "Computer Vision ML Model" },
    { label: "AI Response Latency", value: "< 1s", sub: "Groq LLM Inference" },
    { label: "Automated Workflows", value: "100%", sub: "Multi-Platform n8n Pipelines" },
    { label: "Academic Standing", value: "83%", sub: "B.E. Computer Science 2025" },
  ],
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ai-product-recommendation",
    title: "AI-Powered Product Recommendation Engine",
    subtitle: "Real-Time LLM Suggestion Engine powered by Groq API",
    category: "AI & ML",
    description:
      "Next-generation AI discovery platform combining a responsive React interface with ultra-low latency Groq LLM API. Intelligently analyzes user queries, behavioral signals, and context to generate personalized e-commerce suggestions in sub-second speed.",
    highlights: [
      "Engineered prompt-optimized LLM pipeline leveraging Groq API for lightning-fast (< 1s) contextual inferences",
      "Built dynamic, interactive React client architecture with state management and intuitive search queries",
      "Designed responsive product recommendation cards with real-time feedback and preference filtering",
    ],
    techStack: ["Groq LLM API", "React", "AI Prompt Engineering", "JavaScript", "Tailwind CSS", "REST API"],
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
      "Robust automation architecture built on n8n. Seamlessly orchestrates automated email campaigns and cross-platform social media posting across Gmail, LinkedIn, and Facebook with webhooks, conditional routing, and automated recovery.",
    highlights: [
      "Automated cross-platform distribution and email campaigns across Gmail, LinkedIn, and Facebook without manual intervention",
      "Configured webhook listeners, REST HTTP nodes, conditional logic branching, and dynamic JSON transformations",
      "Engineered fault-tolerant error boundaries with automated alerts and retry queues for maximum delivery reliability",
    ],
    techStack: ["n8n Automation", "Webhooks", "REST APIs", "JSON Data Pipelines", "Gmail API", "LinkedIn API"],
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
    title: "Full-Stack Production Portfolio Platform",
    subtitle: "Production Next.js 16 + Node.js App on AWS Cloud",
    category: "Full Stack",
    description:
      "Modern, responsive personal portfolio platform engineered with Next.js 16 (App Router, Tailwind CSS) on the frontend and Node.js Express + MongoDB on the backend, hosted on AWS EC2 Free Tier with custom domain and SSL.",
    highlights: [
      "Designed shining blue & white cyber aesthetic with mobile-first responsiveness and smooth interactions",
      "Integrated dedicated Node.js/MongoDB API for inquiries and live interaction tracking",
      "Configured automated deployment pipeline with PM2 zero-downtime reloads and Nginx reverse proxy",
    ],
    techStack: ["Next.js 16", "React 19", "Node.js", "Express", "MongoDB", "Tailwind CSS", "AWS EC2", "Nginx"],
    githubUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    liveUrl: "https://github.com/Sanjaygithub-87/Portfolio-website",
    featured: true,
    metrics: "AWS Free Tier Live",
    accentColor: "from-blue-600 to-sky-400",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Machine Learning",
    categoryKey: "ai",
    iconName: "Bot",
    description: "Developing intelligent LLM applications & Computer Vision models",
    skills: [
      { name: "Groq LLM API", level: 92, tag: "High Speed" },
      { name: "Prompt Engineering", level: 90, tag: "Applied AI" },
      { name: "Python (ML & OpenCV)", level: 85, tag: "Vision" },
      { name: "Model Integration", level: 88, tag: "Production" },
      { name: "Computer Vision Gestures", level: 88, tag: "90%+ Acc" },
    ],
  },
  {
    title: "Workflow Automation (n8n)",
    categoryKey: "automation",
    iconName: "Zap",
    description: "Orchestrating end-to-end automated pipelines and business systems",
    skills: [
      { name: "n8n Workflow Builder", level: 95, tag: "Expert" },
      { name: "Webhook Triggers", level: 92, tag: "Event-Driven" },
      { name: "JSON Data Transformation", level: 94, tag: "Data Mapping" },
      { name: "REST API Integration", level: 92, tag: "Integration" },
      { name: "Error Handling & Retries", level: 90, tag: "Reliability" },
    ],
  },
  {
    title: "Full-Stack Development",
    categoryKey: "frontend",
    iconName: "Layout",
    description: "Building responsive, modern, high-performance web applications",
    skills: [
      { name: "React & Next.js", level: 90, tag: "Modern" },
      { name: "Node.js & Express", level: 86, tag: "APIs" },
      { name: "JavaScript (ES6+)", level: 90, tag: "Core" },
      { name: "Tailwind CSS", level: 92, tag: "Styling" },
      { name: "Java Servlets & JDBC", level: 85, tag: "Enterprise" },
    ],
  },
  {
    title: "Databases & Architecture",
    categoryKey: "database",
    iconName: "Database",
    description: "Data persistence across relational models and NoSQL document stores",
    skills: [
      { name: "MongoDB & Mongoose", level: 86, tag: "NoSQL" },
      { name: "MySQL & SQL Queries", level: 88, tag: "RDBMS" },
      { name: "MVC Architecture", level: 90, tag: "Design Pattern" },
      { name: "Database Schema Design", level: 85, tag: "Modeling" },
      { name: "CRUD Operations", level: 92, tag: "Operations" },
    ],
  },
  {
    title: "Analytics, Cloud & Tools",
    categoryKey: "tools",
    iconName: "BarChart3",
    description: "Business analytics, cloud hosting environments, and developer tooling",
    skills: [
      { name: "IBM Cognos Analytics", level: 85, tag: "Certified" },
      { name: "AWS Free Tier (EC2/Nginx)", level: 85, tag: "Cloud" },
      { name: "Git & GitHub", level: 90, tag: "Version Control" },
      { name: "Postman & API Testing", level: 90, tag: "Tooling" },
      { name: "Agile & SDLC Best Practices", level: 88, tag: "Workflow" },
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
