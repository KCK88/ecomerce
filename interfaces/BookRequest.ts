import {LightweightAuthor, LightweightCategory} from "./IBook";

export type BookRequest = {
  title: string;
  authors: LightweightAuthor[];
  description: string;
  price: number;
  stock: number;
  publisher: string;
  publishedDate: string;
  pageCount: number;
  language: string;
  categories: LightweightCategory[];
  coverImage: any;
  images: never[];
  averageRating: number;
  reviewsCount: number;
  featured: boolean;
  discount: number;
};
