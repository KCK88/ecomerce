import { Document, Types } from 'mongoose';


export interface ICategory extends Document {
    name: string;
    description?: string;
    parentCategory?: Types.ObjectId | ICategory;
    featured: boolean;
}