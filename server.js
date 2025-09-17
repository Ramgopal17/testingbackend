import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = 3000;
app.listen(3000, "0.0.0.0", () => {
  console.log("🚀 Server running at http://0.0.0.0:3000");
});

