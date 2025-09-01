import express from "express";
import {
  createAuthor,
  deleteAuthors,
  getAuthors,
  updateAuthor,
  getAuthorById,
} from "../controllers/authorController";

const router = express.Router();

router.route("/").post(createAuthor).get(getAuthors);

router
  .route("/:id")
  .patch(updateAuthor)
  .delete(deleteAuthors)
  .get(getAuthorById);

export default router;
