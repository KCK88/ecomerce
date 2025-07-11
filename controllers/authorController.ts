import {Request, Response} from 'express';
import service, {getAuthorByAuthorId} from '../services/authorService'

export async function createAuthor(req: Request, res: Response) {
	const newAuthor = await service.createAuthor(req.body)
	return res.status(201).json({newAuthor})
}

export async function updateAuthor(req: Request, res: Response) {
	const id = req.params.id;
	const toUpdate = req.body
	const updatedAuthor =  await service.updateAuthor(toUpdate, id)
	return res.status(200).json({updatedAuthor})
}

export async function getAuthors(_req: Request, res: Response) {
	const authors = await service.getAuthors()
	return res.status(200).json({authors})
}
export async function getAuthorById(req: Request, res: Response) {
	const author = await service.getAuthorByAuthorId(req.params.id)
	return res.status(200).json({author})
}
export async function deleteAuthors(req: Request, res: Response) {
	await service.deleteAuthor(req.params.id)
	return res.status(204).json({})
}