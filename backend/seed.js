const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');
const Stat = require('./models/Stat');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sanjay_portfolio';

const initialProjects = [
  {
    title: 'AI-Powered Product Recommendation System',
    subtitle: 'Intelligent AI Recommendations powered by Groq API',
    category: 'AI & ML',
    description:
      'High-performance product recommendation web application built with a dynamic React front-end, integrated with ultra-fast Groq LLM API to analyze user preferences and generate real-time personalized recommendations.',
    highlights: [
      'Built interactive React front-end with optimized state management and reusable components',
      'Integrated Groq API for sub-second AI inference and personalized suggestions',
      'Designed responsive UI/UX with smooth feedback states and dynamic query handling',
    ],
    techStack: ['React', 'Groq API', 'JavaScript', 'Tailwind CSS', 'REST API', 'Prompt Engineering'],
    githubUrl: 'https://github.com/sanjay-developer',
    liveUrl: 'https://github.com/sanjay-developer',
    featured: true,
    order: 1,
  },
  {
    title: 'AI-Powered Sign Language Translator',
    subtitle: 'Real-time Gesture-to-Text Recognition System',
    category: 'AI & ML',
    description:
      'Computer vision and machine learning accessibility platform that captures real-time hand gestures via camera and translates them into readable text with 90%+ accuracy to bridge communication for hearing-impaired individuals.',
    highlights: [
      'Real-time gesture-to-text translation system to empower accessibility',
      'Achieved 90%+ recognition accuracy using Python-based ML models for gesture classification',
      'Optimized frame processing pipeline for low-latency live video classification',
    ],
    techStack: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision', 'NumPy', 'Scikit-Learn'],
    githubUrl: 'https://github.com/sanjay-developer',
    liveUrl: 'https://github.com/sanjay-developer',
    featured: true,
    order: 2,
  },
  {
    title: 'n8n Workflow Automation Engine',
    subtitle: 'Multi-Platform Email & Social Media Pipeline',
    category: 'Automation',
    description:
      'Automated marketing, notification, and social media posting pipeline orchestrating scheduled campaigns across Gmail, LinkedIn, and Facebook using n8n visual workflows and custom webhook triggers.',
    highlights: [
      'Automated cross-platform posting and email campaigns across Gmail, LinkedIn, and Facebook',
      'Configured webhook triggers, conditional routing logic, and HTTP request payload transformations',
      'Implemented robust error handling, JSON data mapping, and automated retry mechanisms',
    ],
    techStack: ['n8n', 'Webhooks', 'REST APIs', 'JSON Mapping', 'Gmail API', 'LinkedIn API', 'Workflow Automation'],
    githubUrl: 'https://github.com/sanjay-developer',
    liveUrl: 'https://github.com/sanjay-developer',
    featured: true,
    order: 3,
  },
  {
    title: 'Full-Stack Student Management System',
    subtitle: 'Enterprise Academic Portal with Role-Based Access',
    category: 'Full Stack',
    description:
      'Secure, modular web application engineered using Java Servlets, JDBC, and MySQL following standard MVC architecture for complete student lifecycle management, attendance, and grading.',
    highlights: [
      'Developed secure web app with role-based authentication (Admin, Faculty, Student) and complete CRUD operations',
      'Followed strict MVC architecture for clean separation between business logic and database layer',
      'Engineered optimized SQL queries, schema normalization, and connection pooling with JDBC',
    ],
    techStack: ['Java', 'Java Servlets', 'JDBC', 'MySQL', 'MVC Architecture', 'HTML5/CSS3', 'Apache Tomcat'],
    githubUrl: 'https://github.com/sanjay-developer',
    liveUrl: 'https://github.com/sanjay-developer',
    featured: true,
    order: 4,
  },
  {
    title: 'Modern Full-Stack Developer Portfolio',
    subtitle: 'Interactive Next.js & Node.js Production App',
    category: 'Full Stack',
    description:
      'Production-ready personal portfolio built with Next.js (App Router, Tailwind CSS, Framer Motion animations) on the frontend and Node.js/Express + MongoDB on the backend, architected for AWS Free Tier deployment.',
    highlights: [
      'Responsive, modern glassmorphism design with dark/light themes and interactive project showcase',
      'Connected to dedicated Node.js/MongoDB API for contact messages and real-time interaction stats',
      'Production-engineered for AWS EC2 Free Tier deployment with Nginx reverse proxy and PM2',
    ],
    techStack: ['Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'AWS EC2'],
    githubUrl: 'https://github.com/sanjay-developer',
    liveUrl: 'https://github.com/sanjay-developer',
    featured: true,
    order: 5,
  },
];

async function seed() {
  try {
    console.log('Connecting to MongoDB at:', MONGO_URI);
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB successfully.');

    await Project.deleteMany({});
    console.log('Cleared existing projects.');

    const createdProjects = await Project.insertMany(initialProjects);
    console.log(`Seeded ${createdProjects.length} projects successfully!`);

    const existingStat = await Stat.findOne({ key: 'portfolio_stats' });
    if (!existingStat) {
      await Stat.create({
        key: 'portfolio_stats',
        visits: 128,
        likes: 34,
        resumeDownloads: 18,
      });
      console.log('Seeded initial portfolio stats.');
    }

    console.log('Database seeding complete!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err.message);
    process.exit(1);
  }
}

seed();
