import {ReqOrder} from "../interfaces/ReqOrder";
import {findOrder, findOrderById, newOrder, updateOrder} from "../models/orderModel";
import {createDiacriticInsensitiveRegex} from "../utils/diacriticInsensitive";

async function createOrder(order: ReqOrder[]) {
  return await newOrder(order);
}

async function getOrdersById(userId: string) {
  return await findOrderById(userId);
}
async function getOrderById(orderId: string, status: string) {
  return await updateOrder(orderId, status);
}

export async function getOrders(query: Record<string, any>, page: string, limit: string, sort: string) {

  const insensitiveQuery = query

  for (const key in query) {
    const value = query[key];
    if (typeof value === 'string') {
      insensitiveQuery[key] = createDiacriticInsensitiveRegex(value);
    } else {
      insensitiveQuery[key] = value;
    }
  }

  return await findOrder(insensitiveQuery, page, limit, sort);

}

export default {createOrder, getOrdersById, getOrderById, getOrders};
