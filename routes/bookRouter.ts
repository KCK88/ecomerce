import express from "express";
import {
  createBook,
  deleteBook,
  getBookById,
  getBookimage,
  getBooks,
  getBooksByParams,
  getPagedBooks,
  updateBooks,
} from "../controllers/bookController";
import { uploadCoverImage } from "../middleware/uploadCover";

const router = express.Router();

router.route("/").post(/*uploadCoverImage,*/ createBook).get(getBooks);

router.route("/:page/:limit/search").get(getBooksByParams);

router.route("/:page/:limit/booksBko").get(getPagedBooks);

router
  .route("/:id")
  .patch(uploadCoverImage, updateBooks)
  .delete(deleteBook)
  .get(getBookById);

router.route("/:id/cover").get(getBookimage);

export default router;
