import express from 'express';
import {createCategory} from "../controllers/bookCategoryController";

const router = express.Router();

router.route('/').post(createCategory)/*.get()*/

// router.route('/:id').patch().delete().get()

export default router;