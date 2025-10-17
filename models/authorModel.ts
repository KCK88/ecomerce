import { model, Schema } from "mongoose";

import {IAuthor, ValueType} from "../interfaces/IAuthor";

const authorSchema = new Schema<IAuthor>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  bio: String,
  nationality: String,
  photo: String,
  website: String,
  books: [String],
});

const Author = model<IAuthor>("Author", authorSchema);

export async function authorCreate(author: ValueType) {
  return await Author.create(author);
}

export async function authorUpdate(author: IAuthor, id: string) {
  return Author.findByIdAndUpdate(id, author, { new: true });
}

export async function authorDelete(id: string) {
  await Author.findByIdAndDelete(id);
}

export async function authorsGet(query: Record<string, any>, page: string, limit: string, sort: string) {
  return await Author.find(query)
    .sort({createdAt: sort === 'desc' ? -1 : 1})
    .skip(Number(page) * Number(limit))
    .limit(Number(limit))
    .exec()
}
export async function authorGetById(id: string) {
  return await Author.findById(id);
}

export default Author;
