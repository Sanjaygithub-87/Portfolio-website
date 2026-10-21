'use client';

import React, { useState, useEffect } from 'react';
import { Eye, Heart, Activity } from 'lucide-react';
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
    <div className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-3 bg-white/95 border border-slate-200 rounded-2xl px-4 py-2.5 shadow-xl shadow-slate-900/5 backdrop-blur-md text-xs text-slate-700">
      {/* Live Indicator */}
      <div className="flex items-center gap-1.5 text-slate-800 pr-2 border-r border-slate-200">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-bold text-slate-900">Live API</span>
      </div>

      {/* Visits counter */}
      <div className="flex items-center gap-1.5 text-slate-600">
        <Eye className="w-3.5 h-3.5 text-blue-600" />
        <span>
          <strong className="text-slate-900 font-extrabold">{stats.visits}</strong> visits
        </span>
      </div>

      {/* Like Button */}
      <button
        onClick={handleLike}
        disabled={liked}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all font-semibold ${
          liked
            ? 'bg-rose-50 border border-rose-200 text-rose-600'
            : 'bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700'
        } ${likeAnimating ? 'scale-110' : ''}`}
        title={liked ? 'Thanks for the love!' : 'Give this portfolio a heart'}
      >
        <Heart
          className={`w-3.5 h-3.5 ${
            liked ? 'fill-rose-500 text-rose-500' : 'text-slate-500'
          }`}
        />
        <span>{stats.likes}</span>
      </button>
    </div>
  );
}
