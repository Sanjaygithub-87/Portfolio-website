#!/usr/bin/env bash

# ==============================================================================
# Automated Deployment Script for AWS EC2 Free Tier (Ubuntu 22.04 / 24.04 LTS)
# Portfolio: SANJAY S (Next.js + Node.js + Express + MongoDB)
# ==============================================================================

set -e

echo "🚀 Starting Automated AWS Free Tier Portfolio Deployment..."

# 1. Update OS packages
echo "📦 Updating system packages..."
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install -y curl wget git nginx ufw certbot python3-certbot-nginx

# 2. Install Node.js 20 LTS (if not present)
if ! command -v node &> /dev/null; then
    echo "🟢 Installing Node.js 20 LTS..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# 3. Install PM2 process manager globally
echo "⚙️ Installing PM2 process manager..."
sudo npm install -g pm2

# 4. Create Swap Space (Critical for EC2 Free Tier t2.micro / 1GB RAM)
if [ ! -f /swapfile ]; then
    echo "💾 Creating 2GB Swap Memory (ensures Next.js builds reliably on 1GB RAM EC2)..."
    sudo fallocate -l 2G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
    echo "✅ Swap memory enabled."
fi

# 5. Project dependencies installation & build
echo "📦 Installing backend packages..."
cd backend
npm install --production=false
cd ..

echo "📦 Installing frontend packages and creating production build..."
cd frontend
npm install
npm run build
cd ..

# 6. Configure Nginx Reverse Proxy
echo "🌐 Configuring Nginx reverse proxy..."
sudo cp deployment/nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

# 7. Configure Firewall (UFW)
echo "🛡️ Configuring firewall rules..."
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# 8. Start applications with PM2
echo "🚀 Launching frontend and backend with PM2..."
pm2 start deployment/ecosystem.config.js
pm2 save
pm2 startup systemd -u $USER --hp $HOME | bash || true

echo "======================================================================"
echo "🎉 DEPLOYMENT SUCCESSFUL!"
echo "Your portfolio is now live on this EC2 instance."
echo "Check PM2 status with: pm2 status"
echo "Check Nginx status with: sudo systemctl status nginx"
echo "To attach free SSL with Certbot, run: sudo certbot --nginx"
echo "======================================================================"
