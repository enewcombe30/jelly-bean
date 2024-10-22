import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: process.env.CLIENT_URL || "https://enewcombe30.github.io/jelly-bean", // Set this to your deployed app's URL
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

// Enable CORS for all routes
app.use(cors(corsOptions));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../build")));

// API route example
app.get("/api/:category", (req: Request, res: Response) => {
  const { category } = req.params;
  res.json({ message: `Category requested: ${category}` });
});

// All other requests should be handled by the React app
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
