import {Request, Response} from "express";
import {LoginType} from "../interfaces/LoginType";
import {newToken} from "../auth/jwt";
import service from '../services/loginService'


export async function login(req: Request, res: Response) {
  const {email, password}: LoginType = req.body;

  if (!email || !password) {
    return res.status(400).json({message: "Please enter email and password"});
  }

  const user = await service.loginService(email)

  if (!user) {
    return res.status(404).json({message: "User not found"});
  }

  if (!user || !(await  user.comparePassword(password, user.password))) {
    return res.status(401).json({message: "Invalid email or password"});
  }

  const token = newToken(user._id)
  return res.status(200).json({token});
}