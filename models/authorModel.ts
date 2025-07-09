import {model, Schema} from 'mongoose';

import {IAuthor} from "../interfaces/IAuthor";


const authorSchema = new Schema<IAuthor>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    bio: String,
    nationality: String,
    photo: String,
    website: String,
    books: [String]
});

const Author = model<IAuthor>('Author', authorSchema);

export async function authorCreate(author: IAuthor) {
    console.log('Model =>', author)
    return await Author.create(author)
}

export default Author;