import {Request, Response} from 'express';
import service from '../services/authorService'

export async function createAuthor(req: Request, res: Response) {
	console.log('Controller =>', req.body)
	const newAuthor = await service.createAuthor(req.body)
	return res.status(201).json({newAuthor})
}

export async function getAuthors(req: Request, res: Response) {
	return res.status(200).json({})
}