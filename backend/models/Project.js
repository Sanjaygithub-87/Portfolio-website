const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      enum: ['Full Stack', 'AI & ML', 'Automation', 'Web App', 'Other'],
      default: 'Full Stack',
    },
    description: {
      type: String,
      required: true,
    },
    highlights: [
      {
        type: String,
      },
    ],
    techStack: [
      {
        type: String,
      },
    ],
    githubUrl: {
      type: String,
      default: '',
    },
    liveUrl: {
      type: String,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
