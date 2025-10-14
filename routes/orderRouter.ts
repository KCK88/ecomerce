import express from "express";
import {createOrder, getOrderById, getOrders, getOrdersById} from "../controllers/orderController";

const router = express.Router();

router.route("/").post(createOrder).get(getOrders);
router.route("/:userId").get(getOrdersById);
router.route("/:orderId").patch(getOrderById);

export default router;
