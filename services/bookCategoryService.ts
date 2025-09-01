import { IBookCategory } from "../interfaces/IBookCategory";
import { categoryCreate, findCategories } from "../models/bookCategoryModel";

async function createCategory(category: IBookCategory) {
  return await categoryCreate(category);
}

async function getCategories() {
  return await findCategories();
}

export default { createCategory, getCategories };
