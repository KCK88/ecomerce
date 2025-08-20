export interface IOrder {
  coverImage: string;
  discount: number;
  bookId: string;
  userId: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  quantity: number;
  stock: number;
  title: string;
}