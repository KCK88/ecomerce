import {Request, Response} from 'express';
import service from '../services/bookCategoryService'


export async function createCategory(req: Request, res: Response) {
    const newCategory = await service.createCategory(req.body)

    return res.status(201).json(newCategory)

}
export async function getCategories(_req: Request, res: Response) {
    const categories = await service.getCategories()

    return res.status(200).json({results: categories.length, data: categories})

}