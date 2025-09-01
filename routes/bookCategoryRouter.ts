import express from "express";
import {
  createCategory,
  getCategories,
} from "../controllers/bookCategoryController";

const router = express.Router();

router.route("/").post(createCategory).get(getCategories);

// router.route('/:id').patch().delete().get()

export default router;
