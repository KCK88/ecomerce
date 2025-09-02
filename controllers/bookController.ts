import {Request, Response} from "express";
import service from "../services/bookService";
import {IBook, LightweightAuthor, LightweightCategory} from "../interfaces/IBook";
import {BookRequest} from "../interfaces/BookRequest";
import {AuthorValue} from "../interfaces/IAuthor";
import {CategoryValue} from "../interfaces/IBookCategory";

export async function createBook(
  req: Request,
  res: Response,
): Promise<IBook | Response> {

  let authors = [];
  let categories = [];

  if (req.body.authors) {
    try {
      authors = typeof req.body.authors === 'string'
        ? JSON.parse(req.body.authors)
        : req.body.authors;
    } catch (e) {
      console.error('Error parsing authors:', e);
      authors = [];
    }
  }

  if (req.body.categories) {
    try {
      categories = typeof req.body.categories === 'string'
        ? JSON.parse(req.body.categories)
        : req.body.categories;
    } catch (e) {
      console.error('Error parsing categories:', e);
      categories = [];
    }
  }

  authors = authors.map((author: AuthorValue) => ({name: author.value.name, _id: author.value._id}))
  categories = categories.map((category: CategoryValue) => ({genre: category.value.genre, _id: category.value._id}))

  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  const book: BookRequest = {
    ...req.body,
    authors: Array.isArray(authors) ? authors : [],
    categories: Array.isArray(categories) ? categories : [],
    coverImage: files?.coverImage?.[0]?.filename || 'default.png',
    images: [],
    price: req.body.price ? Number(req.body.price) : 0,
    stock: req.body.stock ? Number(req.body.stock) : 0,
    pageCount: req.body.pageCount ? Number(req.body.pageCount) : undefined,
    averageRating: req.body.averageRating ? Number(req.body.averageRating) : 0,
    reviewsCount: req.body.reviewsCount ? Number(req.body.reviewsCount) : 0,
    featured: req.body.featured === 'true' || req.body.featured === true,
    discount: req.body.discount ? Number(req.body.discount) : 0,
  };

  const newBook = await service.createBook(book);
  return res.status(201).json({newBook});
}

export async function updateBooks(
  req: Request,
  res: Response,
): Promise<IBook | Response> {

  const id = req.params.id;

  // Parse authors and categories from JSON strings if they exist
  let authors = [];
  let categories = [];


  if (req.body.authors) {
    try {
      authors = typeof req.body.authors === 'string'
        ? JSON.parse(req.body.authors)
        : req.body.authors;
    } catch (e) {
      console.error('Error parsing authors:', e);
      authors = [];
    }
  }


  if (req.body.categories) {
    try {
      categories = typeof req.body.categories === 'string'
        ? JSON.parse(req.body.categories)
        : req.body.categories;
    } catch (e) {
      console.error('Error parsing categories:', e);
      categories = [];
    }
  }


  authors = authors.map((author: AuthorValue): LightweightAuthor => ({name: author.value.name, _id: author.value._id}))
  categories = categories.map((category: CategoryValue): LightweightCategory => ({genre: category.value.genre, _id: category.value._id}))

  const toUpdate: IBook = {
    ...req.body,
    authors: Array.isArray(authors) ? authors : [],
    categories: Array.isArray(categories) ? categories : [],
    coverImage: (req.files as {
      [fieldname: string]: Express.Multer.File[]
    })?.coverImage?.[0]?.filename || req.body.coverImage,
    images: [],
    discount: req.body.discount ? Number(req.body.discount) / 100 : 0,
  };
  const updatedBook: IBook | null = await service.updateBook(toUpdate, id);
  return res.status(200).json({ updatedBook });
}

export async function deleteBook(
  req: Request,
  res: Response,
): Promise<void | Response> {
  const id = req.params.id;
  await service.deleteBook(id);
  return res.status(204).end();
}

export async function getBooks(
  req: Request,
  res: Response,
): Promise<IBook[] | Response> {
  const books = await service.getBooks();
  return res.status(200).json({results: books.length, data: books});
}

export async function getPagedBooks(
  req: Request,
  res: Response,
): Promise<IBook[] | Response> {
  const {page, limit} = req.params;
  const books = await service.getPagedBooks(page, limit);
  return res.status(200).json({results: books.length, data: books});
}

export async function getBookById(
  req: Request,
  res: Response,
): Promise<IBook | Response> {
  const book = await service.getBookById(req.params.id);
  return res.status(200).json({book});
}

export async function getBookimage(
  req: Request,
  res: Response,
): Promise<IBook | Response> {
  const image = await service.getBookImage(req.params.id);
  return res.status(200).json({image});
}

export async function getBooksByParams(
  req: Request,
  res: Response,
): Promise<IBook[] | Response> {
  const params = typeof req.query.params === "string" ? req.query.params : "";
  const genre = typeof req.query.genre === "string" ? req.query.genre : "";
  const {page, limit} = req.params;
  const data = await service.getBooksByParams(page, limit, params, genre);
  return res.status(200).json({result: data.length, data});
}
