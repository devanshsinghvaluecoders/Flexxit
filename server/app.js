import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoute.js";
import cors from "cors";

config({ path: "./config/config.env" });

export const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", (req, res) => {
  res.send("server running");
});
app.use("/api", paymentRoute);

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
