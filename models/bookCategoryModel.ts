import {model, Schema} from 'mongoose';
import {IBookCategory} from "../interfaces/IBookCategory";

const bookCategorySchema = new Schema<IBookCategory>({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: [20, 'O nome da categoria não pode exceder 20 caracteres']
    },
    ageGroup: {
        type: String,
        enum: ['adulto', 'jovem-adulto', 'infanto-juvenil', 'infantil', 'todos'],
        default: 'todos'
    },
    genre: {
        type: String,
        required: true,
        enum: [
            'ficção', 'não-ficção', 'biografia', 'poesia',
            'drama', 'terror', 'romance', 'fantasia',
            'ciência', 'história', 'autoajuda', 'infantil'
        ]
    },
    featured: {
        type: Boolean,
        default: false
    }
});

bookCategorySchema.index({name: 1, genre: 1, ageGroup: 1});

bookCategorySchema.set('toJSON', {virtuals: true});
bookCategorySchema.set('toObject', {virtuals: true});

const BookCategory = model<IBookCategory>('BookCategory', bookCategorySchema);

export async function categoryCreate(category: IBookCategory) {
    return await BookCategory.create(category);
}

export async function findCategories() {
    return await BookCategory.find();
}

export default BookCategory;