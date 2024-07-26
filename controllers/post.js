import { postService } from "../db/querys.js";
import { postModel } from "../models/post.model.js";

export async function getAllPosts(req, res) {
  try {
    const posts = await postService.getAllDocuments();
    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: `فشلت العملية عند استرجاع المشاركات: ${error.message}`,
    });
  }
}

export function newPost(req, res) {
  let { title, link, category, date, content, summary, comments } = req.body;
  if (!title) return res.status(400).send("title is not exisist");
  const { file } = req;

  const postModelData = new postModel(
    title,
    link,
    category,
    date,
    content,
    summary,
    comments,
    file.originalname.replace(/\s+/g, "-")
  );

  postService
    .createDocument(postModelData)
    .then((post) => {
      res.status(201).send("succesfully post created");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
}

export async function deletePost(req, res) {
  let { id } = req.params;
  if (isNaN(id)) {
    return res.status(400).send("ال id غير صالح");
  }
  try {
    await postService.deleteDocument({ _id: id });
    return res.status(201).send("تم الحذف بنجاح");
  } catch (err) {
    res.status(400).send(err);
  }
}

export async function updatePost(req, res) {
  const { id, title, link, category, date, content, summary, comments } =
    req.body;
  if (!id || !title)
    return res.status(400).send("لم يتم ادخال العنوان او ال id");
  const post = new postModel(
    title,
    link,
    category,
    date,
    content,
    summary,
    comments
  );
  try {
    await postService.updateDocument({ _id: id }, post);
    return res.status(201).send("تم تحديث المقال بنجاح");
  } catch (err) {
    return res.status(400).send(err);
  }
}
