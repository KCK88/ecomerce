import express from "express";
import {createUser, getUserById, updateUserAddress} from "../controllers/userController";

const router = express.Router();

router.route("/").post(createUser);

router.route('/:id').get(getUserById).patch(updateUserAddress)

export default router;
