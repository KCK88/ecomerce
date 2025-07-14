import express from 'express';
import {
    createBook,
    deleteBook,
    getBookById,
    getBooks, getBooksByCategory,
    getBooksByParams,
    updateBooks
} from "../controllers/bookController";

const router = express.Router();

router.route('/').post(createBook).get(getBooks)

router.route('/search').get(getBooksByParams)

router.route('/category').get(getBooksByCategory)

router.route('/:id').patch(updateBooks).delete(deleteBook).get(getBookById)

export default router;