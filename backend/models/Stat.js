const mongoose = require('mongoose');

const statSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
      default: 'portfolio_stats',
    },
    visits: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    resumeDownloads: {
      type: Number,
      default: 0,
    },
    lastVisitedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Stat', statSchema);
