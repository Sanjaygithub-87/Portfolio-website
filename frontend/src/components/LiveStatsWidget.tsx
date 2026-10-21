'use client';

import React, { useState, useEffect } from 'react';
import { Eye, Heart, Activity, Check, Sparkles } from 'lucide-react';
import { fetchPortfolioStats, recordVisit, sendLike, StatsResponse } from '../lib/api';

export default function LiveStatsWidget() {
  const [stats, setStats] = useState<StatsResponse>({
    visits: 142,
    likes: 47,
    resumeDownloads: 23,
  });
  const [liked, setLiked] = useState(false);
  const [likeAnimating, setLikeAnimating] = useState(false);

  useEffect(() => {
    // Record visit once on mount
    recordVisit().then((visits) => {
      if (visits) {
        setStats((prev) => ({ ...prev, visits }));
      }
    });

    // Fetch latest stats
    fetchPortfolioStats().then((data) => {
      setStats(data);
    });
  }, []);

  const handleLike = async () => {
    if (liked) return;
    setLiked(true);
    setLikeAnimating(true);
    setTimeout(() => setLikeAnimating(false), 1000);

    const newLikes = await sendLike();
    if (newLikes) {
      setStats((prev) => ({ ...prev, likes: newLikes }));
    } else {
      setStats((prev) => ({ ...prev, likes: prev.likes + 1 }));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-3 bg-slate-900/90 border border-slate-700/80 rounded-2xl px-4 py-2.5 shadow-2xl backdrop-blur-md text-xs">
      {/* Live Indicator */}
      <div className="flex items-center gap-1.5 text-slate-300 pr-2 border-r border-slate-800">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-semibold text-slate-200">Live API</span>
      </div>

      {/* Visits counter */}
      <div className="flex items-center gap-1.5 text-slate-300">
        <Eye className="w-3.5 h-3.5 text-cyan-400" />
        <span>
          <strong className="text-white font-bold">{stats.visits}</strong> visits
        </span>
      </div>

      {/* Like Button */}
      <button
        onClick={handleLike}
        disabled={liked}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all ${
          liked
            ? 'bg-rose-950/80 border border-rose-800/80 text-rose-300'
            : 'bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white'
        } ${likeAnimating ? 'scale-110' : ''}`}
        title={liked ? 'Thanks for the love!' : 'Give this portfolio a heart'}
      >
        <Heart
          className={`w-3.5 h-3.5 ${
            liked ? 'fill-rose-500 text-rose-500' : 'text-slate-400 hover:text-rose-400'
          }`}
        />
        <span>{stats.likes}</span>
      </button>
    </div>
  );
}
