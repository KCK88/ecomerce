import {Request, Response} from "express";
import {LoginType} from "../interfaces/LoginType";
import User from "../models/userModel";
import {newToken} from "../auth/jwt";

export async function login(req: Request, res: Response) {
  const {email, password}: LoginType = req.body;

  if (!email || !password) {
    return res.status(400).json({message: "Please enter email and password"});
  }

  const user = await User.findOne({email}).select('+password');

  if (!user) {
    return res.status(404).json({message: "User not found"});
  }
  console.log((await  user.comparePassword(password, user.password)))
  console.log(user);
  if (!user || !(await  user.comparePassword(password, user.password))) {
    return res.status(401).json({message: "Invalid email or password"});
  }

  const token = newToken(user._id)
  return res.status(200).json({token});
}