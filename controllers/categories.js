import { categoryService } from "../db/querys.js";
import { CategoryModel } from "../models/category.model.js";

export async function getAllCategories(req, res) {
  const Category = await categoryService.getAllDocuments(categoryService.model);
  res.json(Category);
}

export const newCategory = async (req, res) => {
  const { title, description, date, link } = req.body;
  console.log(date);
  if (!title) return res.status(400).send("please enter a title");

  const schemaData = new CategoryModel(title, description, date, link);

  try {
    await categoryService.createDocument(schemaData); // مرر النموذج نفسه وليس اسمه
    res.status(201).send("Category created successfully");
  } catch (error) {
    res.status(500).send("Error creating category: " + error.message);
  }
};

export async function deleteCategory(req, res) {
  let { id } = req.params;

  try {
    await categoryService.deleteDocument({ _id: id });
    return res.status(201).send("تم الحذف بنجاح");
  } catch (err) {
    res.status(400).send(err);
  }
}

export async function updateCategory(req, res) {
  const { id, title, description, date, link } = req.body;
  if (!id || !title) {
    return res.status(400).send("لم يتم ادخال العنوان او ال id");
  }

  const category = { title, description, date, link };
  try {
    await categoryService.updateDocument({ _id: id }, category);
    return res.status(200).send("تم تحديث التصنيف بنجاح");
  } catch (err) {
    return res.status(400).send(err.message); // Use err.message to return the error message string
  }
}
