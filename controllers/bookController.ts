import {Request, Response} from 'express';
import service from '../services/bookService'
import {IBook} from "../interfaces/IBook";

export async function createBook(req: Request, res: Response): Promise<IBook | Record<string, any>> {
  const newBook = await service.createBook(req.body);
  return res.status(201).json({newBook});
}

export async function updateBooks(req: Request, res: Response): Promise<IBook | Record<string, any>> {
  const id = req.params.id;
  const toUpdate = req.body;
  const updatedBook: IBook | null = await service.updateBook(toUpdate, id);
  return res.status(200).json({updatedBook});
}

export async function deleteBook(req: Request, res: Response): Promise<void | Record<string, any>> {
  const id = req.params.id;
  await service.deleteBook(id);
  return res.status(204).end();
}

export async function getBooks(req: Request, res: Response): Promise<IBook[] | Record<string, any>> {
  const books = await service.getBooks();
  return res.status(200).json({results: books.length, data: books});
}

export async function getBookById(req: Request, res: Response): Promise<IBook | Record<string, any>> {
  const book = await service.getBookById(req.params.id);
  return res.status(200).json({book});
}

export async function getBookimage(req: Request, res: Response): Promise<IBook | Record<string, any>> {
  const image = await service.getBookImage(req.params.id);
  return res.status(200).json({image});
}

export async function getBooksByParams(req: Request, res: Response): Promise<IBook[] | Record<string, any>> {
  const params = typeof req.query.key === 'string' ? req.query.key : '';
  const {page, limit} = req.params;
  const search = await service.getBooksByParams(page, limit, params);
  return res.status(200).json({search});
}

export async function getBooksByCategory(req: Request, res: Response): Promise<IBook[] | Record<string, any>> {
  const genre: string = typeof req.query.key === 'string' ? req.query.key : '';
  const {page, limit} = req.params;
  const search: IBook[] = await service.getBooksByCategory(page, limit, genre);
  return res.status(200).json({search});
}

// const bookRequest = req.body as IBookRequest;
// console.log(bookRequest);
// if (!bookRequest.authorId) {
// 	res.status(400).json({error: 'invalid authorId'});
// }
//
// const newBook = await service.createBook({
// 	...bookRequest,
// 	author: bookRequest.authorId,
// 	categories: bookRequest.categoriesIds
// } as unknown as IBook)