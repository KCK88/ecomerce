import {model, Schema} from "mongoose";
import {IOrder} from "../interfaces/IOrder";
import {ReqOrder} from "../interfaces/ReqOrder";


const orderSchema = new Schema<IOrder>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["concluído", "pendente", 'cancelado'	],
    default: "pendente",
  },
  coverImage: {
    type: String,
  },
  discount: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  bookId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  }
})

orderSchema.pre('save', async function (next) {
  this.createdAt = this.createdAt || Date.now();
  next();
})

const Order = model<IOrder>('Order', orderSchema);

export async function newOrder(order: ReqOrder[]): Promise<IOrder[]> {
  return Order.create(order);
}

// export async function updateOrder(userId: string): Promise<IOrder[]> {}
export default Order
