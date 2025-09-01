import { Document } from "mongoose";

export interface IBookCategory extends Document {
  name: string;
  ageGroup?:
    | "adulto"
    | "jovem-adulto"
    | "infanto-juvenil"
    | "infantil"
    | "todos";
  genre: string;
  featured?: boolean;
}

export type ReqCategoryValue = {
  value: IBookCategory;
};
