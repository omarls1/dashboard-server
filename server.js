import express from "express";
import { connectDB } from "./db/connection.js";
import cors from "cors";

import { postsRouter } from "./routes/post.js";
import { categories } from "./routes/categories.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(
  cors({
    origin: "http://localhost:5173", // استبدل بالمنفذ الذي يعمل عليه تطبيق Vue.js
  })
);
// الاتصال بقاعدة البيانات
connectDB();

// routers
app.use("/posts", postsRouter);
app.use("/categories", categories);

app.listen(3000, () => console.log("server star"));
