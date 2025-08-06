import {IBook} from "../interfaces/IBook";
import {
    bookByIdGet,
    bookCreate,
    bookDelete,
    booksGet,
    bookUpdate,
    getImageBook,
    searchBooks,
} from "../models/bookModel";
import {imageToBase64} from "../utils/imageToBase64";

async function createBook(book: IBook): Promise<IBook> {
    return await bookCreate(book);
}

async function updateBook(book: IBook, id: string): Promise<IBook | null> {
    return await bookUpdate(book, id);
}

async function deleteBook(id: string): Promise<void> {
    return await bookDelete(id);
}

async function getBooks(): Promise<IBook[]> {
    const books = await booksGet();
    return books
}

async function getBookById(id: string): Promise<IBook | null> {
    return await bookByIdGet(id);
}

async function getBookImage(id: string): Promise<string | null> {
    const imagePath = await getImageBook(id);
    if (imagePath === null) {
        throw new Error('Invalid image path');
    }
    return await imageToBase64(imagePath.coverImage, 'jpg');
}

async function getBooksByParams(page: string, limit: string, params: string, genre: string): Promise<IBook[]> {
    const search = await searchBooks(Number(page), Number(limit), params, genre);
    return search;
}

export default {
    createBook,
    getBookImage,
    updateBook,
    deleteBook,
    getBooks,
    getBookById,
    getBooksByParams,
};