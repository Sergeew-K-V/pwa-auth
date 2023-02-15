import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(cors());

async function startServer() {
  try {
    if (process.env.CLUSTER) {
      mongoose.set("strictQuery", false);
      await mongoose.connect(process.env.CLUSTER);

      app.listen(PORT, () => {
        console.log("Server started on PORT: ", PORT);
      });
    }
  } catch (error) {
    return console.log(`Server have some errors: ${error}`);
  }
}

startServer();

export default app;
