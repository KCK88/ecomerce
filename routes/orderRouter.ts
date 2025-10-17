import express from "express";
import {createOrder, updateOrder, getOrders, getOrdersById} from "../controllers/orderController";

const router = express.Router();

router.route("/").post(createOrder).get(getOrders);
router.route("/:userId").get(getOrdersById);
router.route("/:orderId").patch(updateOrder);

export default router;
