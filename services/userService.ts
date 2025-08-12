import {IUser} from "../interfaces/IUser";
import {newUser} from "../models/userModel";
import {ReqUser} from "../interfaces/ReqUser";

async function createUser(user: ReqUser): Promise<IUser> {
return await newUser(user)
}

export default {createUser}