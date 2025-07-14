import {IBookCategory} from "../interfaces/IBookCategory";
import {categoryCreate} from "../models/bookCategoryModel";

async function createCategory(category: IBookCategory) {
    return await categoryCreate(category)
}

export default {createCategory}