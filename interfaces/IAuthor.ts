import {Document, Types} from "mongoose";
import {LightweightAuthor} from "./IBook";

export interface IAuthor extends Document {
  name: string;
  bio?: string;
  nationality?: string;
  photo?: string;
  website?: string;
  books: string[];
}

export type AuthorValue = {
  value: LightweightAuthor
}

export type OptionType = {
  label: string;
  value: valueType[]
};

export type valueType = {
  bio:  string;
  books:  string[];
  name: string;
  nationality: string;
  photo: string;
  website: string;
  _id: string;
};

