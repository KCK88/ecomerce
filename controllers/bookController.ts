import {Request, Response} from 'express';
import service from '../services/bookService'
import {IBookRequest} from "../interfaces/IBookRequest";
import {IBook} from "../interfaces/IBook";

export async function createBook(req: Request, res: Response) {
	const bookRequest = req.body as IBookRequest;
	if (!bookRequest.authorId) {
		res.status(400).json({error: 'invalid authorId'});
	}

	const newBook = await service.createBook({
		...bookRequest,
		author: bookRequest.authorId,
		categories: bookRequest.categoriesIds
	} as unknown as IBook)
	return res.status(201).json({newBook})
}

export async function updateBooks(req: Request, res: Response) {
	const id = req.params.id;
	const toUpdate = req.body
	const updatedBook = await service.updateBook(toUpdate, id)
	return res.status(200).json({updatedBook})
}

export async function deleteBook(req: Request, res: Response) {
	const id = req.params.id;
	await service.deleteBook(id)
	return res.status(204).end()
}

export const getBooks = (req: Request, res: Response) => {
	return res.status(200).json({})
}