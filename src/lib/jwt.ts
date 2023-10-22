import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOptions {
  expiresIn?: string | number;
}
const DEFAULT_SIGN_OPTIONS: SignOptions = {
  expiresIn: "1h",
};
export function signJWTAccessToken(
  payload: JwtPayload,
  option: SignOptions = DEFAULT_SIGN_OPTIONS
) {
  const secret_key = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(payload, secret_key!, option);
  return token;
}
export function verifyJWT(token: string) {
  try {
    const secret_key = process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, secret_key!);
    return decoded;
  } catch (e) {
    console.log(e);
    return null;
  }
}
