import express from "express";
import * as PC from "../controllers/post.js";
import { upload } from "../configs/multer.js";

const postsRouter = express.Router();

postsRouter.post("/newPost", upload, PC.newPost);
postsRouter.get("/", PC.getAllPosts);
postsRouter.delete("/:id", PC.deletePost);
postsRouter.put("/update", PC.updatePost);

export { postsRouter };
