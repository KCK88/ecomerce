import { Document, Types } from "mongoose";

export interface IBookRequest extends Document {
  title: string;
  authorId: Types.ObjectId;
  description: string;
  price: number;
  stock: number;
  publisher?: string;
  publishedDate?: Date;
  pageCount?: number;
  language?: string;
  categoriesIds: Types.ObjectId[];
  coverImage: string;
  images: string[];
  averageRating: number;
  reviewsCount: number;
  featured: boolean;
  discount: number;
  createdAt: Date;
}
