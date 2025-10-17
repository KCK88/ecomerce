import {Request, Response} from "express";
import service from "../services/authorService";
import {ValueType} from "../interfaces/IAuthor";

export async function createAuthor(req: Request, res: Response): Promise<Response> {
  console.log(req.body);
  const toCreate: ValueType = {
    name: req.body.name,
    bio: req.body.bio,
    nationality: req.body.nationality,
    website: req.body.website,
  }
  if (req.body.photo.length > 0) {
    toCreate.photo = req.body.photo;
  }
  const newAuthor = await service.createAuthor(toCreate);
  return res.status(201).json({newAuthor});
}

export async function updateAuthor(req: Request, res: Response): Promise<Response> {
  const id = req.params.id;
  const toUpdate = req.body;
  const updatedAuthor = await service.updateAuthor(toUpdate, id);
  return res.status(200).json({updatedAuthor});
}

export async function getAuthors(req: Request, res: Response): Promise<Response> {
  const {
    name,
    nationality,
    orderPage = 0,
    orderLimit = 10,
    orderSort = 'des',
  } = req.query;

  const page = orderPage.toString();
  const limit = orderLimit.toString();
  const sort = orderSort.toString();

  const query: Record<string, any> = {};

  if (name) query.name = name;
  if (nationality) query.nationality = nationality;

  const authors = await service.getAuthors(query, page, limit, sort);
  return res.status(200).json({authors});
}

export async function getAuthorById(req: Request, res: Response): Promise<Response> {
  const author = await service.getAuthorByAuthorId(req.params.id);
  return res.status(200).json({author});
}

export async function deleteAuthors(req: Request, res: Response): Promise<Response> {
  await service.deleteAuthor(req.params.id);
  return res.status(204).json({});
}
