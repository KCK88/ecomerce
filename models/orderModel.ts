import {model, Schema} from "mongoose";
import {booksOrderSchema, IOrder} from "../interfaces/IOrder";
import {ReqOrder} from "../interfaces/ReqOrder";

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
    status: {
      type: String,
      enum: ["concluído", "pendente", "cancelado"],
      default: "pendente",
    },
    orderNumber: {type: "String"},
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
  {timestamps: true},
);

orderSchema.pre('save', function (next) {

  const timestamp = Date.now();


  const objectId = this._id.toString();
  const numericObjectId = parseInt(objectId.substring(0, 8), 16);
  this.orderNumber = `${timestamp}${numericObjectId}`;

  next();
});

const Order = model<IOrder>("Order", orderSchema);

export async function newOrder(order: ReqOrder[]): Promise<IOrder[]> {
  console.log(order);
  return Order.create(order);
}

export async function findOrderById(userId: string) {
  return await Order.where("userId").equals(userId).exec()
}

export async function findOrder(query: Record<string, any>, page: string, limit: string, sort: string) {


  return await Order.find(query)
    .sort({createdAt: sort === 'desc' ? -1 : 1})
    .skip(Number(page) * Number(limit))
    .limit(Number(limit))
    .exec()
}

export async function editOrder(orderId: string, status: string): Promise<IOrder | null> {
  return await Order.findByIdAndUpdate(orderId, {status}, {returnDocument: 'after'}).exec();
}


export default Order;
