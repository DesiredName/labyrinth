import type { Response, Request, NextFunction } from 'express';
import type { UserSafeAttributes } from '../models/User.ts';
import { parse as parseCookie } from 'es-cookie';
import jwt from 'jsonwebtoken';
import z from 'zod';

const isProd = process.env.NODE_ENV === 'production';

const baseScheme = {
  JWT_COOKIE_NAME: z
    .string()
    .optional()
    .default('webx-auth')
    .transform((v) => {
      return typeof v === 'string' && v.length > 0 ? v : 'webx-auth';
    }),
  JWT_COOKIE_TTL_SEC: z
    .string()
    .optional()
    .default('3600')
    .transform((v) => {
      const parsed = Number(v);
      return Number.isInteger(parsed) && parsed > 0 ? parsed : 3600;
    })
    .pipe(z.number()),
};

const scheme = z.object({
  ...baseScheme,
  JWT_SECRET: isProd
    ? z.string()
    : z
        .string()
        .default(crypto.randomUUID())
        .transform((v) => {
          return typeof v === 'string' && v.length >= 36
            ? v
            : crypto.randomUUID();
        }),
});

const { JWT_SECRET, JWT_COOKIE_NAME, JWT_COOKIE_TTL_SEC } = scheme.parse(
  process.env,
);

function assignAuthCookie(res: Response, user: UserSafeAttributes) {
  const expiresInSeconds = JWT_COOKIE_TTL_SEC;

  const token = jwt.sign({ ...user }, JWT_SECRET, {
    expiresIn: expiresInSeconds,
  });

  res.cookie(JWT_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'lax',
    maxAge: expiresInSeconds * 1000,
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
