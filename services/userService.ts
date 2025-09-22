import {Address, IUser} from "../interfaces/IUser";
import {findUserById, modifyUserAddress, newUser} from "../models/userModel";
import { ReqUser } from "../interfaces/ReqUser";

async function createUser(user: ReqUser): Promise<IUser> {
  return await newUser(user);
}

async function getUserById(userId: string): Promise<IUser | null> {
  return  await findUserById(userId);
}

async function updateUserAddress(id: string, address: Address): Promise<IUser | null> {
  return await modifyUserAddress(id, address);
}

export default { createUser, getUserById, updateUserAddress };
