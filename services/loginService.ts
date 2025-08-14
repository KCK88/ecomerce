import {loginModel} from "../models/userModel";
import {IUser} from "../interfaces/IUser";

async function loginService(email: string,): Promise<IUser | null> {

  return await loginModel(email)
}

export default {loginService}