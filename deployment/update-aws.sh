#!/usr/bin/env bash

# ==============================================================================
# Quick 1-Command Live Update Script for Sanjay S Portfolio on AWS EC2
# ==============================================================================

set -e

echo "🔄 Pulling latest changes from GitHub..."
git pull

echo "📦 Rebuilding Next.js frontend with new changes..."
cd frontend
npm install
npm run build
cd ..

echo "🚀 Restarting PM2 processes (zero-downtime reload)..."
pm2 reload all

echo "======================================================================"
echo "🎉 SUCCESS! Your live website has been updated with the latest changes."
echo "Check your browser or test with: pm2 status"
echo "======================================================================"
