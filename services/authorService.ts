import {IAuthor} from "../interfaces/IAuthor";
import Author, {
	authorCreate,
	authorDelete,
	authorGetById,
	authorsGet,
	authorUpdate
} from "../models/authorModel";

export async function createAuthor(author: IAuthor) {

	return await authorCreate(author)
}

export async function updateAuthor(author: IAuthor, id: string) {
	return await authorUpdate(author, id )
}

export async function deleteAuthor(id: string) {
	await authorDelete(id)
}

export async function getAuthorById(id: string) {
	return await Author.find();
}

export async function getAuthors() {
	return await authorsGet()
}
export async function getAuthorByAuthorId(id: string) {
	return await authorGetById(id)
}

export default {createAuthor, updateAuthor, deleteAuthor, getAuthorByAuthorId, getAuthors}