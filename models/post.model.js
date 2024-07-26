export class postModel {
  constructor(
    title,
    link,
    category,
    date,
    content,
    summary,
    comments,
    featureImage
  ) {
    this.title = title;
    this.link = link || title;
    this.categoryId = category;
    this.date = date || new Date();
    this.content = content;
    this.summary = summary || content.slice(0, 100);
    this.comments = comments;
    this.featureImage = featureImage || "noImage";
  }
}
