const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');

dotenv.config();

const Contact = require('./models/Contact');
const Project = require('./models/Project');
const Stat = require('./models/Stat');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sanjay_portfolio';

// Fallback project data if MongoDB is connecting or during offline preview
const fallbackProjects = [
  {
    _id: '1',
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
  },
  {
    _id: '2',
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
  },
  {
    _id: '3',
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
  },
  {
    _id: '4',
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
  },
  {
    _id: '5',
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
  },
];

let inMemoryStats = {
  visits: 142,
  likes: 47,
  resumeDownloads: 23,
};

let inMemoryContacts = [];

// Middleware
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json({ limit: '1mb' }));

// Rate limiting for contact form to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: {
    success: false,
    message: 'Too many messages sent from this IP. Please try again after 15 minutes.',
  },
});

let isMongoConnected = false;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, {
    serverSelectionTimeoutMS: 4000,
  })
  .then(() => {
    isMongoConnected = true;
    console.log('✅ Connected to MongoDB successfully:', MONGO_URI.replace(/:([^:@]{3,})@/, ':****@'));
  })
  .catch((err) => {
    isMongoConnected = false;
    console.warn('⚠️ MongoDB connection note: Operating in graceful fallback mode.', err.message);
  });

mongoose.connection.on('connected', () => {
  isMongoConnected = true;
});
mongoose.connection.on('disconnected', () => {
  isMongoConnected = false;
});

// Routes
// 1. Health check (Crucial for AWS ALB / Nginx monitoring)
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    database: isMongoConnected ? 'connected' : 'standalone/fallback',
    developer: 'SANJAY S',
    role: 'Full Stack Developer',
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    database: isMongoConnected ? 'connected' : 'standalone/fallback',
    developer: 'SANJAY S',
    role: 'Full Stack Developer',
  });
});

// 2. Projects Route
app.get('/api/projects', async (req, res) => {
  try {
    if (isMongoConnected) {
      const projects = await Project.find().sort({ order: 1, createdAt: -1 });
      if (projects && projects.length > 0) {
        return res.json({ success: true, count: projects.length, data: projects, source: 'mongodb' });
      }
    }
    return res.json({ success: true, count: fallbackProjects.length, data: fallbackProjects, source: 'fallback' });
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    return res.json({ success: true, count: fallbackProjects.length, data: fallbackProjects, source: 'fallback' });
  }
});

// 3. Contact Form Submission
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.',
      });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';

    const newContactData = {
      name: name.trim(),
      email: email.trim(),
      subject: (subject || 'Portfolio Inquiry').trim(),
      message: message.trim(),
      ipAddress,
      createdAt: new Date(),
    };

    if (isMongoConnected) {
      const savedDoc = await Contact.create(newContactData);
      console.log(`📩 New message saved to MongoDB from ${name} (${email})`);
      return res.status(201).json({
        success: true,
        message: `Thank you, ${name}! Your message has been received. Sanjay will reach out to you shortly.`,
        data: { id: savedDoc._id, name: savedDoc.name },
      });
    } else {
      inMemoryContacts.push(newContactData);
      console.log(`📩 New message recorded (memory) from ${name} (${email})`);
      return res.status(201).json({
        success: true,
        message: `Thank you, ${name}! Your message has been received. Sanjay will reach out to you shortly.`,
        data: { name: newContactData.name },
      });
    }
  } catch (error) {
    console.error('Error saving contact message:', error.message);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please contact Sanjay directly at Sanjayedu045@gmail.com.',
    });
  }
});

// 4. Get Interaction Stats
app.get('/api/stats', async (req, res) => {
  try {
    if (isMongoConnected) {
      let stat = await Stat.findOne({ key: 'portfolio_stats' });
      if (!stat) {
        stat = await Stat.create({
          key: 'portfolio_stats',
          visits: inMemoryStats.visits,
          likes: inMemoryStats.likes,
          resumeDownloads: inMemoryStats.resumeDownloads,
        });
      }
      return res.json({
        success: true,
        data: {
          visits: stat.visits,
          likes: stat.likes,
          resumeDownloads: stat.resumeDownloads,
        },
      });
    }
    return res.json({ success: true, data: inMemoryStats });
  } catch (err) {
    return res.json({ success: true, data: inMemoryStats });
  }
});

// 5. Increment Visitor Stat
app.post('/api/stats/visit', async (req, res) => {
  try {
    if (isMongoConnected) {
      const stat = await Stat.findOneAndUpdate(
        { key: 'portfolio_stats' },
        { $inc: { visits: 1 }, $set: { lastVisitedAt: new Date() } },
        { new: true, upsert: true }
      );
      return res.json({ success: true, visits: stat.visits });
    }
    inMemoryStats.visits += 1;
    return res.json({ success: true, visits: inMemoryStats.visits });
  } catch (err) {
    inMemoryStats.visits += 1;
    return res.json({ success: true, visits: inMemoryStats.visits });
  }
});

// 6. Like Portfolio
app.post('/api/stats/like', async (req, res) => {
  try {
    if (isMongoConnected) {
      const stat = await Stat.findOneAndUpdate(
        { key: 'portfolio_stats' },
        { $inc: { likes: 1 } },
        { new: true, upsert: true }
      );
      return res.json({ success: true, likes: stat.likes });
    }
    inMemoryStats.likes += 1;
    return res.json({ success: true, likes: inMemoryStats.likes });
  } catch (err) {
    inMemoryStats.likes += 1;
    return res.json({ success: true, likes: inMemoryStats.likes });
  }
});

// 7. Track Resume Download
app.post('/api/stats/resume-download', async (req, res) => {
  try {
    if (isMongoConnected) {
      const stat = await Stat.findOneAndUpdate(
        { key: 'portfolio_stats' },
        { $inc: { resumeDownloads: 1 } },
        { new: true, upsert: true }
      );
      return res.json({ success: true, resumeDownloads: stat.resumeDownloads });
    }
    inMemoryStats.resumeDownloads += 1;
    return res.json({ success: true, resumeDownloads: inMemoryStats.resumeDownloads });
  } catch (err) {
    inMemoryStats.resumeDownloads += 1;
    return res.json({ success: true, resumeDownloads: inMemoryStats.resumeDownloads });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on http://localhost:${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/health`);
  console.log(`📁 API Projects: http://localhost:${PORT}/api/projects`);
});
