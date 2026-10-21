# 🚀 AWS Free Tier Complete Hosting Guide for Sanjay S Portfolio

Idhu ungaloda **Next.js + Node.js + Express + MongoDB** portfolio website-ai AWS Free Tier-la complete-aa free-aa host panradhukaana full step-by-step guide.

---

## 🏗️ Architecture Overview

```text
[ Internet / Browser ]
          │ (Ports 80 HTTP / 443 HTTPS)
          ▼
    [ Nginx Reverse Proxy (AWS EC2) ]
          │
          ├──> /          ──> [ Next.js Frontend (Port 3000) - Managed by PM2 ]
          └──> /api, /health ─> [ Node.js Express Backend (Port 5000) - Managed by PM2 ]
                                         │
                                         ▼
                               [ MongoDB Database ]
                     (Local on EC2 OR MongoDB Atlas Free Tier M0)
```

---

## Step 1: Create Free MongoDB Atlas Database (Recommended)

MongoDB Atlas gives you a **free cloud database (512MB M0 cluster forever)**. This is better than running MongoDB inside a 1GB RAM EC2 instance, because it leaves 100% of the EC2 RAM for Next.js and Node.js.

1. Go to [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register) and create a free account.
2. Select **M0 Free Cluster** (Select AWS Provider and region nearest to India: `ap-south-1 Mumbai`).
3. Click **Create Cluster** (Free).
4. Go to **Database Access** -> Add New Database User:
   - Username: `sanjay_admin`
   - Password: `YourSecurePassword123`
5. Go to **Network Access** -> Add IP Address:
   - Select **Allow Access From Anywhere** (`0.0.0.0/0`) -> Confirm.
6. Click **Connect** -> **Drivers (Node.js)**:
   - Copy connection string:
     `mongodb+srv://sanjay_admin:YourSecurePassword123@cluster0.xxxxx.mongodb.net/sanjay_portfolio?retryWrites=true&w=majority`

---

## Step 2: Launch AWS EC2 Free Tier Instance

1. Log in to [AWS Management Console](https://aws.amazon.com/).
2. In the search bar, type **EC2** and click **EC2 Dashboard**.
3. Click **Launch Instance**:
   - **Name**: `Sanjay-Portfolio-Server`
   - **OS (AMI)**: **Ubuntu Server 24.04 LTS (HVM)** or **Ubuntu 22.04 LTS** (marked *Free tier eligible*)
   - **Instance type**: `t2.micro` (or `t3.micro` in regions where available) - *Free tier eligible (750 hours/month)*
   - **Key pair (login)**: Click **Create new key pair**:
     - Key pair name: `sanjay-portfolio-key`
     - Private key format: `.pem` (for Mac/Linux/Windows PowerShell)
     - Click **Create key pair** and download it safely.
   - **Network settings**:
     - Check ✅ **Allow SSH traffic from anywhere (0.0.0.0/0)**
     - Check ✅ **Allow HTTP traffic from the internet (Port 80)**
     - Check ✅ **Allow HTTPS traffic from the internet (Port 443)**
   - **Configure Storage**: `30 GiB` gp3 (AWS Free Tier provides up to 30 GB EBS storage free).
4. Click **Launch Instance**.

---

## Step 3: Connect to your EC2 Instance

### Option A: Direct Web Browser Connect (Easiest)
1. On the EC2 Instances page, select your running instance `Sanjay-Portfolio-Server`.
2. Click **Connect** (top right).
3. Select **EC2 Instance Connect** tab and click **Connect**. A terminal window opens directly in your browser!

### Option B: Using Windows PowerShell (SSH)
Open PowerShell in the folder where you saved `sanjay-portfolio-key.pem`:
```powershell
ssh -i "sanjay-portfolio-key.pem" ubuntu@<YOUR_EC2_PUBLIC_IP>
```

---

## Step 4: Clone / Upload Your Portfolio Code to EC2

In your EC2 terminal:
```bash
# Clone your GitHub repository (or upload the project)
git clone https://github.com/Sanjaygithub-87/Portfolio-website.git portfolio
cd portfolio
```

*(Note: If you have the code on your local machine, you can also push to GitHub or use `scp` / zip file).*

---

## Step 5: Configure Environment Variables

Edit `backend/.env` with your MongoDB URI:
```bash
nano backend/.env
```
Paste:
```env
PORT=5000
MONGO_URI=mongodb+srv://sanjay_admin:YourSecurePassword123@cluster0.xxxxx.mongodb.net/sanjay_portfolio?retryWrites=true&w=majority
NODE_ENV=production
```
Press `Ctrl + O` to save, then `Enter`, then `Ctrl + X` to exit.

---

## Step 6: Run Automated Deployment Script (1 Command!)

Run the included automated setup script:
```bash
chmod +x deployment/deploy-aws.sh
./deployment/deploy-aws.sh
```

### What this script does automatically:
1. Updates Ubuntu packages.
2. Installs Node.js 20 LTS, npm, Nginx, PM2, and Certbot.
3. Sets up **2GB Swap space** (so Next.js builds flawlessly without out-of-memory errors on 1GB EC2).
4. Installs frontend & backend dependencies and generates optimized Next.js build.
5. Seeds the initial project data into MongoDB.
6. Sets up Nginx reverse proxy routing port 80 -> port 3000 (frontend) & `/api` -> port 5000 (backend).
7. Launches PM2 process manager and enables auto-restart on system reboot.

---

## Step 7: View Your Live Portfolio!

Open your browser and visit:
```text
http://<YOUR_EC2_PUBLIC_IP>
```
Your Next.js frontend will load instantly!
Test backend health:
```text
http://<YOUR_EC2_PUBLIC_IP>/health
```
Test backend API projects:
```text
http://<YOUR_EC2_PUBLIC_IP>/api/projects
```

---

## Step 8: (Optional) Attach Custom Domain & Free SSL (HTTPS)

1. Point your domain (e.g., `sanjays.dev` or free sub-domain from FreeDNS/DuckDNS) to your EC2 Public IP by adding an **A Record**.
2. Update `/etc/nginx/sites-available/portfolio` with your domain:
   ```bash
   sudo nano /etc/nginx/sites-available/portfolio
   # Replace "server_name your-domain.com;" with your actual domain
   sudo systemctl reload nginx
   ```
3. Issue a **Free SSL Certificate** from Let's Encrypt with Certbot:
   ```bash
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```
   Certbot will automatically install SSL and renew it automatically!

---

## 🛠️ Helpful Maintenance Commands

- **Check Process Status**:
  ```bash
  pm2 status
  ```
- **View Live Logs**:
  ```bash
  pm2 logs
  ```
- **Restart All**:
  ```bash
  pm2 restart all
  ```
- **Update Code after Git Push**:
  ```bash
  git pull
  cd frontend && npm run build && cd ..
  pm2 restart all
  ```
