import { Request, Response } from "express";
import { ReqOrder } from "../interfaces/ReqOrder";
import service from "../services/orderService";
import Order from "../models/orderModel";

export async function createOrder(
  req: Request,
  res: Response,
): Promise<Response> {
  const orders: ReqOrder[] = req.body;

  try {
    const newOrders = await service.createOrder(orders);
    return res.status(201).send({ newOrders });
  } catch (error: any) {
    console.error("Erro ao criar pedido", error.message);
    return res.status(400).send({ error: error.message });
  }
}

export async function getOrders(
  req: Request,
  res: Response,
): Promise<Response> {
  const { userId } = req.params;
  const order = await Order.where("userId").equals(userId);

  return res.status(200).json(order);
}
