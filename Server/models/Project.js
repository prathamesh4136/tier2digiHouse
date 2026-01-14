const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  mediaType: { type: String, required: true },
  mediaUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);
