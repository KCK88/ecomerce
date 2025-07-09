import express from 'express';
import {createBook, deleteBook, getBooks, updateBooks} from "../controllers/bookController";

const router = express.Router();

router.route('/').post(createBook).get(getBooks)

router.route('/:id').patch(updateBooks).delete(deleteBook)

export default router;