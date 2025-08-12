import jwt from 'jsonwebtoken';
import ms, { type StringValue } from 'ms';

export function newToken(id: string): string {
  const secret = process.env.JWT_SECRET as string;
  const expiresIn: number = ms(process.env.JWT_EXPIRES_IN as StringValue);

  return  jwt.sign({id}, secret, {expiresIn});
}

