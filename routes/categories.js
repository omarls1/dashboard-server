import express from "express";
import * as CT from "../controllers/categories.js";
import multer from "multer";
const upload = multer();
const categories = express.Router();

categories.post("/new", upload.none(), CT.newCategory);
categories.get("/", CT.getAllCategories);
categories.delete("/:id", CT.deleteCategory);
categories.put("/update", CT.updateCategory);

export { categories };
