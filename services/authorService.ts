import {IAuthor} from "../interfaces/IAuthor";
import {authorCreate} from "../models/authorModel";

export async function createAuthor(author: IAuthor) {
	console.log('Service =>', author)

	return await authorCreate(author)
}

export default {createAuthor}