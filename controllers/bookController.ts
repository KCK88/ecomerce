import { Request, Response } from "express";
import service from "../services/bookService";
import { IBook } from "../interfaces/IBook";
import { ReqAuthorValue } from "../interfaces/IAuthor";
import { ReqCategoryValue } from "../interfaces/IBookCategory";

export async function createBook(
  req: Request,
  res: Response,
): Promise<IBook | Record<string, any>> {
  const book = {
    title: req.body.title,
    authors: req.body.authors.map((a: ReqAuthorValue) => ({
      _id: a.value.id,
      name: a.value.name,
    })),
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    publisher: req.body.publisher,
    publishedDate: req.body.publishedDate,
    pageCount: req.body.pageCount,
    language: req.body.language,
    categories: req.body.categories.map((c: ReqCategoryValue) => ({
      _id: c.value._id,
      genre: c.value.genre,
    })),
    coverImage: "req.body.coverImage",
    images: [],
    averageRating: req.body.averageRating,
    reviewsCount: req.body.reviewsCount,
    featured: req.body.features,
    discount: req.body.discount,
  };
  const newBook = await service.createBook(book);
  return res.status(201).json({ newBook });
}

export async function updateBooks(
  req: Request,
  res: Response,
): Promise<IBook | Record<string, any>> {
  console.log('====================', req.body.coverImage[0].name);
  const id = req.params.id;
  const toUpdate = {
    ...req.body,
    coverImage: req.body.coverImage[0].name,
    images: [],
    discount: req.body.discount / 100,
  };
  const updatedBook: IBook | null = await service.updateBook(toUpdate, id);
  return res.status(200).json({ updatedBook });
}

export async function deleteBook(
  req: Request,
  res: Response,
): Promise<void | Record<string, any>> {
  const id = req.params.id;
  await service.deleteBook(id);
  return res.status(204).end();
}

export async function getBooks(
  req: Request,
  res: Response,
): Promise<IBook[] | Record<string, any>> {
  const books = await service.getBooks();
  return res.status(200).json({ results: books.length, data: books });
}

export async function getPagedBooks(
  req: Request,
  res: Response,
): Promise<IBook[] | Record<string, any>> {
  const { page, limit } = req.params;
  const books = await service.getPagedBooks(page, limit);
  return res.status(200).json({ results: books.length, data: books });
}

export async function getBookById(
  req: Request,
  res: Response,
): Promise<IBook | Record<string, any>> {
  const book = await service.getBookById(req.params.id);
  return res.status(200).json({ book });
}

export async function getBookimage(
  req: Request,
  res: Response,
): Promise<IBook | Record<string, any>> {
  const image = await service.getBookImage(req.params.id);
  return res.status(200).json({ image });
}

export async function getBooksByParams(
  req: Request,
  res: Response,
): Promise<IBook[] | Record<string, any>> {
  const params = typeof req.query.params === "string" ? req.query.params : "";
  const genre = typeof req.query.genre === "string" ? req.query.genre : "";
  const { page, limit } = req.params;
  const data = await service.getBooksByParams(page, limit, params, genre);
  return res.status(200).json({ result: data.length, data });
}
