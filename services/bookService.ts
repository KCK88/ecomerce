import {IBook} from "../interfaces/IBook";
import {
    bookByIdGet,
    bookCreate,
    bookDelete,
    booksGet,
    bookUpdate,
    searchBooksByCategory,
    searchBooksByParams
} from "../models/bookModel";

async function createBook(book: IBook): Promise<IBook> {
    return await bookCreate(book)
}

async function updateBook(book: IBook, id: string): Promise<IBook | null> {
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

async function getBooksByParams(page: string, limit: string, params: string): Promise<IBook[]> {
    const search = await searchBooksByParams(Number(page), Number(limit), params)
    return search
}

async function getBooksByCategory(page: string, limit: string, genre: string): Promise<IBook[]> {
    const search: IBook[] = await searchBooksByCategory(Number(page), Number(limit), genre)
    return search
}

export default {createBook, updateBook, deleteBook, getBooks, getBookById, getBooksByParams, getBooksByCategory};