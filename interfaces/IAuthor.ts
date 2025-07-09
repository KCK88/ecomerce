import { Document, Types } from 'mongoose';

export interface IAuthor extends Document {
    name: string;
    bio?: string;
    nationality?: string;
    photo?: string;
    website?: string;
    books: string[];
}