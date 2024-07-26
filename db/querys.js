import mongoose from "mongoose";
import { models } from "../db/schemas.js";

class DataService {
  constructor(model) {
    this.model = model;
  }

  async getAllDocuments() {
    try {
      return await this.model.find({});
    } catch (err) {
      throw new Error(`فشلت العملية عند استرجاع المستندات: ${err.message}`);
    }
  }

  async createDocument(documentData) {
    try {
      const document = new this.model(documentData);
      await document.save();
      return document;
    } catch (err) {
      throw new Error(`فشلت العملية عند إنشاء المستند: ${err.message}`);
    }
  }

  async updateDocument(condition, field) {
    try {
      const result = await this.model.updateOne(condition, { $set: field });
      if (result.nModified === 0) {
        throw new Error("لم يتم العثور على مستند لتحديثه.");
      }
      return result;
    } catch (err) {
      throw new Error(`فشلت العملية عند تحديث المستند: ${err.message}`);
    }
  }

  async deleteDocument(condition) {
    try {
      const result = await this.model.deleteOne(condition);
      if (result.deletedCount === 0) {
        throw new Error("لم يتم العثور على مستند لحذفه.");
      }
      return result;
    } catch (err) {
      throw new Error(`فشلت العملية عند حذف المستند: ${err.message}`);
    }
  }
}

// استخدام الفئة مع النماذج
const postService = new DataService(models.post);
const categoryService = new DataService(models.Category);

export { postService, categoryService };
