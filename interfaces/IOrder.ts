import { Schema } from "mongoose";
import {Address} from "./IUser";

export const booksOrderSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  coverImage: {
    type: String,
  },
  discount: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  bookId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

export interface BooksOrder {
  coverImage: string;
  discount: number;
  bookId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  quantity: number;
  stock: number;
  title: string;
}

export interface IOrder {
  books: BooksOrder[];
  address: Address
  userId: string;
  orderNumber: string;
  status: string;
}

export interface GetOrdersQuery {
  userId?: string;
  orderNumber?: string;
  from?: string;
  to?: string;
  city?: string;
  state?: string;
  bookId?: string;
  orderPage?: string | number;
  orderLimit?: string | number;
  orderSort?: 'asc' | 'des' | string;
}