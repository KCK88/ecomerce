import { IUser } from "../interfaces/IUser";
import {findUserById, newUser} from "../models/userModel";
import { ReqUser } from "../interfaces/ReqUser";

async function createUser(user: ReqUser): Promise<IUser> {
  return await newUser(user);
}

async function getUserById(userId: string): Promise<IUser | null> {
  return  await findUserById(userId);
}

export default { createUser, getUserById };
