import { PopulatedDoc } from "mongoose";
import { IBook } from "./IBook";
import { IAuthor } from "./IAuthor";

interface IPopulatedBook extends Omit<IBook, "authors"> {
  authors?: PopulatedDoc<IAuthor & Document>; // Populated child document
}
