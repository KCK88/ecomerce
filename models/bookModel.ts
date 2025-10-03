import mongoose, { model, Schema } from "mongoose";
import {
  IBook,
  LightweightAuthorSchema,
  LightweightCategorySchema,
} from "../interfaces/IBook";
import { createDiacriticInsensitiveRegex } from "../utils/diacriticInsensitive";
import { BookRequest } from "../interfaces/BookRequest";

const bookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    authors: {
      type: [LightweightAuthorSchema],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    publisher: String,
    publishedDate: Date,
    pageCount: Number,
    language: String,
    categories: {
      type: [LightweightCategorySchema],
    },
    coverImage: {
      type: String,
    },
    images: [String],
    averageRating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviewsCount: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

bookSchema.index({ "categories.genre": 1 });
bookSchema.index({ "authors.name": 1 });
bookSchema.index({ publisher: 1 });
bookSchema.index({ title: 1 });

const Book = model<IBook>("Book", bookSchema);

export async function booksGet(): Promise<IBook[]> {
  return await Book.find().limit(15).exec();
}

export async function findPagedBooks(
  page: number,
  limit: number,
): Promise<IBook[]> {
  return await Book.find()
    .skip(page * limit)
    .limit(limit)
    .exec();
}

export async function bookByIdGet(id: string): Promise<IBook | null> {
  return await Book.findById(id);
}

export async function getImageBook(id: string): Promise<IBook | null> {
  return await Book.findById(id).select("coverImage");
}

export async function bookCreate(book: BookRequest): Promise<IBook> {
  return await Book.create(book);
}

export async function bookUpdate(
  book: IBook,
  id: string,
): Promise<IBook | null> {
  return Book.findByIdAndUpdate(id, book, { new: true });
}

export async function bookDelete(id: string): Promise<void> {
  await Book.findOneAndDelete({ _id: id });
}

export async function searchBooks(
  page: number,
  limit: number,
  searchParams?: string,
  genre?: string,
): Promise<IBook[]> {
  const matchStage: any = {};

  if (genre) {
    matchStage["categories.genre"] = {
      $regex: createDiacriticInsensitiveRegex(genre).source,
      $options: "i",
    };
  }

  if (searchParams) {
    const searchRegex = createDiacriticInsensitiveRegex(searchParams);
    matchStage.$or = [
      { title: { $regex: searchRegex.source, $options: "i" } },
      { "authors.name": { $regex: searchRegex.source, $options: "i" } },
      { publisher: { $regex: searchRegex.source, $options: "i" } },
    ];
  }

  const pipeline: any[] = [
    { $match: matchStage },
    {
      $addFields: {
        firstAuthor: { $arrayElemAt: ["$authors.name", 0] },
        firstCategory: { $arrayElemAt: ["$categories.genre", 0] },
      },
    },
    {
      $sort: {
        title: 1,
        firstAuthor: 1,
        publisher: 1,
        firstCategory: 1,
      },
    },
    { $skip: page * limit },
    { $limit: limit },
  ];

  if (!searchParams) {
    pipeline.splice(1, 2);
  }

  return await Book.aggregate(pipeline).exec();
}

export async function addBulkBooks (books: IBook[]){
  const operations = books.map((doc) => {

    const convertId = (id) => new mongoose.Types.ObjectId(id.$oid);
    doc.authors = doc.authors.map(a => ({ ...a, _id: convertId(a._id) }));
    doc.categories = doc.categories.map(c => ({ ...c, _id: convertId(c._id) }));

    return {
      insertOne: {
        document: doc
      }
    };
  });



  return await Book.bulkWrite(operations);
}

export default Book;
