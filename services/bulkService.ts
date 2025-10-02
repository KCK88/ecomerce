import {IBook} from "../interfaces/IBook";
import {addBulkBooks} from "../models/bookModel";

async function createBulkBooks(books: IBook[]) {
return await addBulkBooks(books);
}

export default {createBulkBooks};