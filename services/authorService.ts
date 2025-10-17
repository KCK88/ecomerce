import {IAuthor, ValueType} from "../interfaces/IAuthor";
import Author, {
  authorCreate,
  authorDelete,
  authorGetById,
  authorsGet,
  authorUpdate,
} from "../models/authorModel";
import {createDiacriticInsensitiveRegex} from "../utils/diacriticInsensitive";

export async function createAuthor(author: ValueType) {
  return await authorCreate(author);
}

export async function updateAuthor(author: IAuthor, id: string) {
  return await authorUpdate(author, id);
}

export async function deleteAuthor(id: string) {
  await authorDelete(id);
}

export async function getAuthorById(id: string) {
  return await Author.find();
}

export async function getAuthors(query: Record<string, any>, page: string, limit: string, sort: string) {
  const insensitiveQuery = query

  for (const key in query) {
    const value = query[key];
    if (typeof value === 'string') {
      insensitiveQuery[key] = createDiacriticInsensitiveRegex(value);
    } else {
      insensitiveQuery[key] = value;
    }
  }

  return await authorsGet(insensitiveQuery, page, limit, sort);
}
export async function getAuthorByAuthorId(id: string) {
  return await authorGetById(id);
}

export default {
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthorByAuthorId,
  getAuthors,
};
