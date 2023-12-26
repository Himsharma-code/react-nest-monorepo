import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/ErrorMiddleware.js";
import UserRoutes from "./routes/users.js";

const app = express();

dotenv.config();

connectDB();

app.use(express.json());

// Enable CORS for all routes
app.use(
  cors({
    origin: "*",
  })
);

// Default
app.get("/api", (req, res) => {
  res.status(201).json({ message: "Welcome to immnce ts" });
});

// User Route
app.use("/api/user", UserRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
