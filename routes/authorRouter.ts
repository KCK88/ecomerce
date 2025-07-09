import express from 'express';
import {createAuthor, getAuthors} from "../controllers/authorController";

const router = express.Router();

router.route('/').post(createAuthor).get(getAuthors)

// router.route('/:id').patch().delete()

export default router;