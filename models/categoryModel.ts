import {  Schema, Model, model } from 'mongoose';
import {ICategory} from "../interfaces/ICategory";

interface ICategoryModel extends Model<ICategory> {

}

const categorySchema = new Schema<ICategory, ICategoryModel>({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: String,
    parentCategory: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    featured: {
        type: Boolean,
        default: false
    }
});

categorySchema.virtual('subcategories', {
    ref: 'Category',
    localField: '_id',
    foreignField: 'parentCategory'
});

categorySchema.set('toJSON', { virtuals: true });
categorySchema.set('toObject', { virtuals: true });

const Category: ICategoryModel = model<ICategory, ICategoryModel>('Category', categorySchema);

export default Category;