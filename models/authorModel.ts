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

    return await Author.create(author)
}

export async function authorUpdate(author: IAuthor, id: string) {
    return Author.findByIdAndUpdate(id, author, {new: true});
}

export async function authorDelete(id: string) {
    await Author.findByIdAndDelete(id)
}

export async function authorsGet(){
    return await Author.find();
}
export async function authorGetById(id: string) {
    return await Author.findById(id);
}

export default Author;