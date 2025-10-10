import express from "express";
import {createOrder, getOrders, getOrdersById} from "../controllers/orderController";

const router = express.Router();

router.route("/").post(createOrder).get(getOrders);
router.route("/:userId").get(getOrdersById);

export default router;
