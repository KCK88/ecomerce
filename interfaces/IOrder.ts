import { Schema } from "mongoose";

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
  status: {
    type: String,
    enum: ["concluído", "pendente", "cancelado"],
    default: "pendente",
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
  status: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  quantity: number;
  stock: number;
  title: string;
}

export interface IOrder {
  books: BooksOrder[];
  userId: string;
}
