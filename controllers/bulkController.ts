import {Request, Response} from "express";
import csv from "csvtojson/index";
import path from "path";
import {promises as fs} from "fs";
import service from "../services/bulkService"
import mongoose from "mongoose";

export async function createBulkBooks(req: Request, res: Response) {
  const file = req.file;
  let csvFilename = 'books.csv'
  let newBooks: mongoose.mongo.BulkWriteResult

  if (file?.mimetype === "text/csv") {
    const extension = file.mimetype.split('/')[1];
    const sanitizedTitle = file.originalname.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    csvFilename = `${sanitizedTitle}_cover-${Date.now()}.${extension}`;
    const csvPath = path.join('data/csv-books', csvFilename);

    try {
      await fs.mkdir('data/csv-books', {recursive: true});
      const csvBuffer = file.buffer.toString('utf8')
      const barReplacement = csvBuffer.toString().split('__v')[0].replace(/\//g, '.');
      const joinV = barReplacement + '__v'
      const headerReplaced = joinV + csvBuffer.toString().split('__v')[1]
      await fs.writeFile(csvPath, headerReplaced);
    } catch (error) {
      console.error('Erro ao criar livros:', error);
      return res.status(500).json({message: 'Erro ao criar livros'});
    }

    const jsonArray = await csv().fromFile(csvPath);
    newBooks = await service.createBulkBooks(jsonArray);
    await fs.unlink(csvPath);

  }
  if (file?.mimetype === "application/json") {
    const fromBuffer = file?.buffer
    const bufferToString = fromBuffer?.toString('utf-8');
    newBooks = await service.createBulkBooks(JSON.parse(bufferToString))
  }
  return res.status(200).json({newBooks, message: 'Successfully created books'});
}