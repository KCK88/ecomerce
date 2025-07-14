import {Request, Response} from 'express';
import service from '../services/bookCategoryService'


export async function createCategory(req: Request, res: Response) {
    const newCategory = await service.createCategory(req.body)

    return res.status(201).json(newCategory)

}