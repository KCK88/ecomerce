import express from "express";
import { login } from "../controllers/loginController";
import { protect } from "../middleware/protect";

const router = express.Router();

router.route("/").post(login);

export default router;
