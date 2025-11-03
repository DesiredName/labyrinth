import type { Response, Request, NextFunction } from 'express';
import type { UserSafeAttributes } from '../models/User.ts';
import { parse as parseCookie } from 'es-cookie';
import jwt from 'jsonwebtoken';

const JWT_SECRET =
  process.env.JWT_SECRET ??
  Array.from(new Array(64), () =>
    String.fromCharCode(Math.floor(Math.random() * 128) + 128),
  ).join(';');
const JWT_COOKIE_NAME = process.env.JWT_COOKIE_NAME ?? 'webx-auth';

function assignAuthCookie(res: Response, user: UserSafeAttributes) {
  const token = jwt.sign({ ...user }, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.cookie(JWT_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'lax',
    maxAge: 3600000, // 1 hour
  });
}

function verifyAuthCookie(req: Request) {
  const cookies = parseCookie(req.headers.cookie ?? '');
  const token = cookies[JWT_COOKIE_NAME] ?? '';
  try {
    return jwt.verify(token, JWT_SECRET) as unknown as UserSafeAttributes;
  } catch (e) {
    return null;
  }
}

function clearAuthCookie(res: Response) {
  res.clearCookie(JWT_COOKIE_NAME);
}

export { assignAuthCookie, verifyAuthCookie, clearAuthCookie };
