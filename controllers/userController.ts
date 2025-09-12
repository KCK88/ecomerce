import { Request, Response } from "express";
import service from "../services/userService";
import { ReqUser } from "../interfaces/ReqUser";
import { newToken } from "../auth/jwt";

export async function createUser(req: Request, res: Response):Promise<Response> {
  const { name, email, password, passwordConfirm } = req.body;
  const reqUser: ReqUser = {
    name,
    email,
    password,
    passwordConfirm,
  };
  const newUser = await service.createUser(reqUser);

  const token = newToken(newUser._id);

  return res.status(201).send({ newUser, token });
}

export async function getUserById(req: Request, res: Response):Promise<Response> {
const {id} = req.params;
const user = await service.getUserById(id);

return res.status(200).send({user});
}
