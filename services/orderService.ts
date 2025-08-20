import {ReqOrder} from "../interfaces/ReqOrder";
import {newOrder} from "../models/orderModel";

async function createOrder(order: ReqOrder[]) {
  return await newOrder(order);
}


export default {createOrder}