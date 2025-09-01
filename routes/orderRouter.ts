import express from "express";
import { createOrder, getOrders } from "../controllers/orderController";

const router = express.Router();

router.route("/").post(createOrder);
router.route("/:userId").get(getOrders);

export default router;
