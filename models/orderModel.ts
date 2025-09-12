import { model, Schema } from "mongoose";
import { booksOrderSchema, IOrder } from "../interfaces/IOrder";
import { ReqOrder } from "../interfaces/ReqOrder";

const orderSchema = new Schema<IOrder>(
  {
    books: {
      type: [booksOrderSchema],
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    address: {
      street: String,
      number: String,
      complement: String,
      neighborhood: String,
      city: String,
      state: String,
      zipCode: String,
      country: {
        type: String,
        default: "Brazil",
      },
      isDefault: {
        type: Boolean,
        default: false,
      },
    },
  },
  { timestamps: true },
);

const Order = model<IOrder>("Order", orderSchema);

export async function newOrder(order: ReqOrder[]): Promise<IOrder[]> {
  console.log(order);
  return Order.create(order);
}

// export async function updateOrder(userId: string): Promise<IOrder[]> {}
export default Order;
