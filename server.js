import express from "express";
import { connectDB } from "./db/connection.js";
import cors from "cors";

import { postsRouter } from "./routes/post.js";
import { categories } from "./routes/categories.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cors());
// الاتصال بقاعدة البيانات
connectDB();

// routers
app.use("/posts", postsRouter);
app.use("/categories", categories);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("server star"));
