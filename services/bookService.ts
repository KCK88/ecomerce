import {IBook} from "../interfaces/IBook";
import {bookCreate, bookDelete, bookUpdate} from "../models/bookModel";

export async function createBook(book: IBook) {
	return await bookCreate(book)
}

export async function updateBook( book: IBook, id: string) {
	return await bookUpdate(book, id)
}

export async function deleteBook(id: string) {
	return await bookDelete(id)
}

export default {createBook, updateBook, deleteBook};