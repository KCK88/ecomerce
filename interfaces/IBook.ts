import { Document, Types } from 'mongoose';

export interface IBook extends Document {
    title: string;
    author: Types.ObjectId;
    description: string;
    price: number;
    stock: number;
    publisher?: string;
    publishedDate?: Date;
    pageCount?: number;
    language?: string;
    categories: Types.ObjectId[];
    coverImage: string;
    images: string[];
    averageRating: number;
    reviewsCount: number;
    featured: boolean;
    discount: number;
    createdAt: Date;
}