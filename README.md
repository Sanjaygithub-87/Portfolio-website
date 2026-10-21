# 🌟 Sanjay S - Full-Stack Developer Portfolio

A production-ready, full-stack portfolio web application engineered with **Next.js (React 19, Tailwind CSS)** on the frontend, **Node.js + Express** on the backend, **MongoDB** for persistent storage, and optimized for **AWS Free Tier** deployment.

---

## 👨‍💻 About Sanjay S

- **Profile**: 2025 Computer Science Engineering Graduate (Fresher)
- **Institution**: Arunai Engineering College (**83% Aggregate**)
- **Contact**: `Sanjayedu045@gmail.com` | `+91 9345030051` | Chennai, India
- **Specializations**: Full-Stack Web Development, Java Enterprise (Servlets, JDBC, MVC), Next.js, Node.js, MongoDB, SQL, and AI Integrations (Groq API, Python Computer Vision, n8n Automation).

---

## 🚀 Tech Stack

| Layer | Technologies |
|---|---|
| **Front-End** | Next.js 16, React 19, TypeScript, Tailwind CSS, Lucide Icons, Canvas Confetti |
| **Back-End** | Node.js, Express, RESTful APIs, CORS, Helmet, Rate Limiter |
| **Database** | MongoDB (Mongoose ORM) with automatic fallback support & MySQL |
| **Automation & AI** | Groq API, n8n Workflow Automation, Python ML Models |
| **Deployment** | AWS EC2 (t2.micro / t3.micro Free Tier), Nginx Reverse Proxy, PM2 Process Manager, Docker Compose |

---

## 📁 Repository Structure

```text
PorfolioWebsite/
├── backend/
│   ├── models/
│   │   ├── Contact.js       # MongoDB Mongoose schema for inquiries
│   │   ├── Project.js       # MongoDB schema for project showcases
│   │   └── Stat.js          # MongoDB schema for real-time stats
│   ├── .env.example
│   ├── Dockerfile
│   ├── package.json
│   ├── seed.js              # Seeds Sanjay's projects & initial stats
│   └── server.js            # Express server (APIs for contact, stats, projects)
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css  # Dark cyber glassmorphism design system
│   │   │   ├── layout.tsx   # SEO metadata & fonts
│   │   │   └── page.tsx     # Unified portfolio page
│   │   ├── components/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx  # Connected to MongoDB backend API
│   │   │   ├── Education.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Icons.tsx
│   │   │   ├── LiveStatsWidget.tsx # Real-time visits & like counter
│   │   │   ├── Navbar.tsx
│   │   │   ├── Projects.tsx # Filterable project showcase
│   │   │   └── ResumeModal.tsx # Digital printable resume
│   │   ├── data/
│   │   │   └── portfolioData.ts # Data extracted from Sanjay's resume
│   │   └── lib/
│   │       └── api.ts       # Frontend client API integration
│   ├── Dockerfile
│   └── package.json
├── deployment/
│   ├── AWS_FREE_TIER_DEPLOYMENT_GUIDE.md # Complete step-by-step hosting guide
│   ├── deploy-aws.sh                     # 1-click bash deployment script
│   ├── ecosystem.config.js               # PM2 configuration
│   └── nginx.conf                        # Nginx reverse proxy routing
├── docker-compose.yml                    # Multi-container local/cloud setup
└── package.json                          # Workspace convenience commands
```

---

## ⚡ Quick Start (Local Development)

### 1. Start the Backend API
```bash
cd backend
npm install
npm run seed     # Seeds projects and initial stats into MongoDB
npm run dev      # Server starts on http://localhost:5000
```

### 2. Start the Frontend
In a new terminal:
```bash
cd frontend
npm install
npm run dev      # Next.js app starts on http://localhost:3000
```
Open [http://localhost:3000](http://localhost:3000) to view the live website!

---

## ☁️ AWS Free Tier Hosting

A complete step-by-step guide with screenshots and commands is provided in:
👉 [`deployment/AWS_FREE_TIER_DEPLOYMENT_GUIDE.md`](./deployment/AWS_FREE_TIER_DEPLOYMENT_GUIDE.md)

1. Launch an **AWS EC2 Ubuntu 24.04** `t2.micro` or `t3.micro` instance (Free Tier).
2. Connect to EC2 and clone this repository.
3. Run:
   ```bash
   chmod +x deployment/deploy-aws.sh
   ./deployment/deploy-aws.sh
   ```
4. Access your live portfolio at your EC2 Public IP address!
