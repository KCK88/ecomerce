import {Model, model, Schema} from 'mongoose';
import {IBook} from "../interfaces/IBook";
import {authorCreate} from "./authorModel";

interface IBookModel extends Model<IBook> {

}

const bookSchema = new Schema<IBook, IBookModel>({
	title: {
		type: String,
		required: true,
		trim: true
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Author',
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
	categories: [{
		type: Schema.Types.ObjectId,
		ref: 'Category'
	}],
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


const Book: IBookModel = model<IBook, IBookModel>('Book', bookSchema);

export async function booksGet() {
	return await  Book.find()
}

export async function bookByIdGet(id: string) {
	return await Book.findById(id)
}

export async function bookCreate(book: IBook) {
	return await Book.create(book)
}

export async function bookUpdate(book: IBook, id: string) {
	return Book.findByIdAndUpdate(id, book, { new: true });
}

export async function bookDelete(id: string) {
	await Book.findOneAndDelete({ _id: id })
}

export default Book;