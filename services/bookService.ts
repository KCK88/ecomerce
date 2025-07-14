import {IBook} from "../interfaces/IBook";
import {bookByIdGet, bookCreate, bookDelete, booksGet, bookUpdate} from "../models/bookModel";

async function createBook(book: IBook): Promise<IBook> {
	return await bookCreate(book)
}

async function updateBook( book: IBook, id: string): Promise<IBook | null> {
	return await bookUpdate(book, id)
}

async function deleteBook(id: string): Promise<void> {
	return await bookDelete(id)
}

async function getBooks(): Promise<IBook[]> {
	const books = await booksGet()
	return books
}
async function getBookById(id: string): Promise<IBook | null> {
	return await bookByIdGet(id)
}

export default {createBook, updateBook, deleteBook, getBooks, getBookById};