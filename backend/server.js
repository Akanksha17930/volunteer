import express from "express";
import dotenv from "dotenv";
import paymentRoutes from "./routes/paymentRoutes.js";
import webhookRoutes from "./routes/nowpaymentsWebhook.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use("/api/v1", paymentRoutes);
app.use("/api/v1", webhookRoutes);
app.use("/api/v1/message", messageRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});