import * as jwt from "jsonwebtoken";

export function createJWTSignedToken(data: any, key = process.env.SECRET_KEY!) {
  const config = { expiresIn: "5d" };
  return jwt.sign(data, key, config);
}

export function verifyToken(token: string) {
  return jwt.verify(token, process.env.SECRET_KEY!);
}
