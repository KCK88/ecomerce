import jwt from "jsonwebtoken";
import { verify } from "jsonwebtoken";
import ms, { type StringValue } from "ms";
import { CookieOptions } from "express";

export function newToken(id: string): string {
  const secret = process.env.JWT_SECRET as string;
  const expiresIn: number = ms(process.env.JWT_EXPIRES_IN as StringValue);

  return jwt.sign({ id }, secret, { expiresIn });
}

export function verifyToken(
  token: string,
  secret: string,
): Promise<string | object> {
  return new Promise((resolve, reject) => {
    verify(token, secret, (err, decoded) => {
      if (err) return reject(err);
      resolve(decoded as string);
    });
  });
}

export const cookieOptions: CookieOptions = {
  maxAge: 7776000000, //process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
  httpOnly: true,
  sameSite: "none",
  secure: true,
};
