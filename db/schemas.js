import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  categoryId: { type: String, required: true },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  summary: { type: String, required: true },
  comments: { type: String, default: "on" },
  featureImage: { type: String },
});

const CategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
  date: { type: String },
  description: { type: String, required: true },
});

export const models = {
  post: mongoose.models.post || mongoose.model("post", postSchema),
  Category:
    mongoose.models.Category || mongoose.model("Category", CategorySchema),
};
