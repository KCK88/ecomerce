import {Model, model, Schema} from 'mongoose';
import {IBook, LightweightAuthorSchema, LightweightCategorySchema} from "../interfaces/IBook";


interface IBookModel extends Model<IBook> {

}

const bookSchema = new Schema<IBook, IBookModel>({
    title: {
        type: String,
        required: true,
        trim: true
    },
    authors: {
        type: [LightweightAuthorSchema],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    publisher: String,
    publishedDate: Date,
    pageCount: Number,
    language: String,
    categories: {
        type: [LightweightCategorySchema],
    },
    coverImage: {
        type: String,
        required: true
    },
    images: [String],
    averageRating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    reviewsCount: {
        type: Number,
        default: 0
    },
    featured: {
        type: Boolean,
        default: false
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

// bookSchema.pre(/^find/, function (this: Query<IBook[], IBook>, next) {
//     this.populate({
//         path: 'authors',
//         select: '-books -_id'
//     })
//     next()
// })
//
// bookSchema.pre(/^find/, function (this: Query<IBook[], IBook>, next) {
//     this.populate({
//         path: 'categories',
//         select: '-_id -id'
//     })
//     next()
// })


const Book: IBookModel = model<IBook, IBookModel>('Book', bookSchema);

export async function booksGet(): Promise<IBook[]> {
    return await Book.find()
}

export async function bookByIdGet(id: string): Promise<IBook | null> {
    return await Book.findById(id)
}

export async function bookCreate(book: IBook): Promise<IBook> {
    return await Book.create(book)
}

export async function bookUpdate(book: IBook, id: string): Promise<IBook | null> {
    return Book.findByIdAndUpdate(id, book, {new: true});
}

export async function bookDelete(id: string): Promise<void>  {
    await Book.findOneAndDelete({_id: id})
}

export default Book;