require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import Models
const Project = require("./models/Project");
const Inquiry = require("./models/Inquiry");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ======================== DATABASE ========================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));

// ======================== ROUTES ========================

// 1️⃣ GET ALL PROJECTS
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    console.error("❌ Fetch Projects Error:", err);
    res.status(500).json({ error: "Failed to fetch projects", details: err.message });
  }
});

// 2️⃣ SUBMIT CONTACT FORM (FIXED)
app.post("/api/inquiry", async (req, res) => {
  try {
    const newInquiry = new Inquiry({
      fullName: req.body.fullName,
      companyName: req.body.companyName,
      email: req.body.email,
      phone: req.body.phone,
      serviceType: req.body.serviceType,
      message: req.body.message,
    });

    await newInquiry.save();

    res.status(201).json({ message: "Inquiry sent successfully!" });
  } catch (err) {
    console.error("❌ Inquiry Save Error:", err);
    res.status(500).json({ error: "Failed to send inquiry", details: err.message });
  }
});

// 3️⃣ SEED DATABASE
app.post("/api/seed", async (req, res) => {
  try {
    console.log("🚀 Attempting to seed database...");

    await Project.deleteMany({});
    console.log("🗑️ Old data cleared");

    const adsData = [
      {
        title: "Velocity X",
        category: "Automotive",
        mediaType: "video",
        mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-black-car-driving-at-night-4045-large.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800",
      },
      {
        title: "Urban Vogue",
        category: "Fashion",
        mediaType: "video",
        mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-city-street-during-the-day-42407-large.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800",
      },
      {
        title: "TechNova Identity",
        category: "Branding",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800",
        thumbnailUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800",
      },
      {
        title: "Pure Focus",
        category: "Product Shoot",
        mediaType: "video",
        mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-coffee-cup-bubbles-slow-motion-18287-large.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=800",
      },
      {
        title: "Neon Cyberpunk",
        category: "Motion Graphics",
        mediaType: "video",
        mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-purple-lights-in-dark-4424-large.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800",
      },
      {
        title: "The Startup Journey",
        category: "Corporate Film",
        mediaType: "video",
        mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-casual-office-4047-large.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800",
      },
      {
        title: "Eco Soul",
        category: "Poster Design",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800",
        thumbnailUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800",
      },
      {
        title: "Midnight Beats",
        category: "Events",
        mediaType: "video",
        mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-crowd-cheering-at-a-music-festival-4437-large.mp4",
        thumbnailUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800",
      },
    ];

    await Project.insertMany(adsData);
    console.log("✅ Data Inserted Successfully");

    res.json({ message: "✅ Database populated with 8 ads successfully!" });

  } catch (err) {
    console.error("❌ CRITICAL SEED ERROR:", err);
    res.status(500).json({ error: "Failed to seed data", details: err.message });
  }
});

// ======================== SERVER ========================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
