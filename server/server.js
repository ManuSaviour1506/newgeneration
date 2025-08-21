const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

// Connect to the MongoDB database
connectDB();

// Initialize the Express application
const app = express();

// --- Middleware ---
// Enable Cross-Origin Resource Sharing to allow your React app to communicate with this server
app.use(cors());
// Enable the express.json() middleware to parse incoming JSON payloads
app.use(express.json());
// Enable the express.urlencoded() middleware to parse incoming URL-encoded payloads
app.use(express.urlencoded({ extended: false }));

// Serve static files from the client build
app.use(express.static(path.join(__dirname, "../client/dist")));

// --- API Routes ---
// Each of these lines mounts a router on a specific path.
// For example, any request to '/api/auth/...' will be handled by authRoutes.
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/news", require("./routes/newsRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));
app.use("/api/admissions", require("./routes/admissionRoutes"));
app.use("/api/imagekit-auth", require("./routes/imagekitRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

// A simple test route to make sure the API is running
app.get("/", (req, res) => {
  res.send("School Website API is running successfully...");
});

// Catch-all handler: for any request that doesn't match an API route, serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Define the port the server will run on, defaulting to 5000
const PORT = process.env.PORT || 5001;

// Start the server and listen for incoming requests
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
