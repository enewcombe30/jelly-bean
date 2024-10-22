import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(
  cors({
    origin: "https://enewcombe30.github.io", // Allow requests from your frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.options("*", cors()); // Allow preflight requests

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
