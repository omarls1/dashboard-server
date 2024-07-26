export class CategoryModel {
  constructor(title, description, date, link) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.link = link || title;
  }
}
