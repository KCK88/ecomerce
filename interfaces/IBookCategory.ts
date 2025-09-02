import { Document } from "mongoose";
import {LightweightCategory} from "./IBook";

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

export type CategoryValue = {
  value: LightweightCategory;
};
