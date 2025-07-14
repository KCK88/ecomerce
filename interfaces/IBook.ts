import { Document, Types, Schema } from 'mongoose';

export const LightweightAuthorSchema = new Schema({
    _id: {
        type: Types.ObjectId,
    },
    name: {
        type: String,
        required: true
    }
}, { _id: false });

export interface LightweightAuthor {
    _id: Types.ObjectId;
    name: string;
}

export const LightweightCategorySchema = new Schema({
    _id: {
        type: Types.ObjectId,
    },
    genre: {
        type: String,
        required: true
    }
}, { _id: false });

export interface LightweightCategory {
    _id: Types.ObjectId;
    genre: string;
}

export interface IBook extends Document {
    title: string;
    authors: LightweightAuthor[];
    description: string;
    price: number;
    stock: number;
    publisher?: string;
    publishedDate?: Date;
    pageCount?: number;
    language?: string;
    categories: LightweightCategory[];
    coverImage: string;
    images: string[];
    averageRating: number;
    reviewsCount: number;
    featured: boolean;
    discount: number;
    createdAt: Date;
}