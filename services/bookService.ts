import {IBook} from "../interfaces/IBook";
import {bookByIdGet, bookCreate, bookDelete, booksGet, bookUpdate} from "../models/bookModel";

async function createBook(book: IBook) {
	return await bookCreate(book)
}

async function updateBook( book: IBook, id: string) {
	return await bookUpdate(book, id)
}

async function deleteBook(id: string) {
	return await bookDelete(id)
}

async function getBooks(){
	return await booksGet()
}
async function getBookById(id: string) {
	return await bookByIdGet(id)
}

export default {createBook, updateBook, deleteBook, getBooks, getBookById};