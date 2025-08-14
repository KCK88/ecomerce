import {Request, Response, NextFunction} from "express";
import AppError from "../utils/AppError";
import {verifyToken} from "../auth/jwt";
import User from "../models/userModel";


export async function protect(req: Request, res: Response, next: NextFunction) {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log in to get access.', 401)
    );
  }

  const decoded = await verifyToken(token, process.env.JWT_SECRET as string);
  const id = Object.values(decoded)[0]
  const iat = Object.values(decoded)[1]

  const currentUser = await User.findById(id);
  if (!currentUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401
      )
    );
  }

  if (currentUser.changedPasswordAfter(iat)) {
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );
  }

  req = {...req.body, user: currentUser};

  next()
}