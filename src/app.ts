import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import { PORT } from "./config";
import router from "./routes";
import AppError from "./utils/app_error";

// Create express server
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

// Handle errors
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 500,
    message: error.message || "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
