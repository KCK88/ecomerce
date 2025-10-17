import { Request, Response } from "express";
import { ReqOrder } from "../interfaces/ReqOrder";
import service from "../services/orderService";
import {GetOrdersQuery} from "../interfaces/IOrder";

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

export async function getOrdersById(
  req: Request,
  res: Response,
): Promise<Response> {
  const { userId } = req.params;
  const order = await service.getOrdersById(userId);

  return res.status(200).json(order);
}

export async function updateOrder(req: Request, res: Response): Promise<Response> {
  console.log(req.body);
  const { orderId } = req.params;
  const { status } = req.body;
  const order = await service.updateOrder(orderId, status);
  return res.status(200).json(order);
}

export async function getOrders(
  req: Request<object, object, object, GetOrdersQuery>,
  res: Response,
): Promise<Response> {
  const {
    userId,
    orderNumber,
    from,
    to,
    city,
    state,
    orderPage = 0,
    orderLimit = 10,
    orderSort = 'des',
  } = req.query;

  const page = orderPage.toString();
  const limit = orderLimit.toString();
  const sort = orderSort.toString();

  const query: Record<string, any> = {};

  if (userId) query.userId = userId;
  if (orderNumber) query.orderNumber = orderNumber;
  if (city) query['address.city'] = city;
  if (state) query['address.state'] = state;

  if (from || to) {
    query.createdAt = {};
    if (from) query.createdAt.$gte = new Date(from);
    if (to) query.createdAt.$lte = new Date(to);
  }
  const order = await service.getOrders(query, page, limit, sort);

  return res.status(200).json(order);
}
