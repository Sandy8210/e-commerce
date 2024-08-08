import express from "express";
import cors from "cors";
import commonRouter from "./routes/commonRoutes.js";

const app = express();

// Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

app.use("/", commonRouter);

// Export the `app` object using ES module syntax
export default app;
