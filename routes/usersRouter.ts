import express from "express";
import {createUser, getUserById} from "../controllers/userController";

const router = express.Router();

router.route("/").post(createUser);

router.route('/:id').get(getUserById)

export default router;
