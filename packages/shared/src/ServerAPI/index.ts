import type { UserSafeAttributes } from '@shared/DAL/User.ts';
import z from 'zod';

type BaseAPIResponse<T, K> = {
  success: boolean;
  data: T;
  meta: K;
};

//

const SignupUserRequest = z.object({
  email: z.email().nonempty(),
  username: z.string().nonempty(),
  password: z.string().nonempty(),
});

type SignupUserRequestType = z.infer<typeof SignupUserRequest>;
type SignupUserResponseType = BaseAPIResponse<
  UserSafeAttributes | null,
  unknown
>;

const SigninUserRequest = z.object({
  email: z.email().nonempty(),
  password: z.string().nonempty(),
});

type SigninUserRequestType = z.infer<typeof SigninUserRequest>;
type SigninUserResponseType = BaseAPIResponse<
  UserSafeAttributes | null,
  unknown
>;

type CheckUserResponseType = BaseAPIResponse<
  UserSafeAttributes | null,
  unknown
>;
//

export { SignupUserRequest, SigninUserRequest };
export type {
  BaseAPIResponse,
  SignupUserRequestType,
  SignupUserResponseType,
  SigninUserRequestType,
  SigninUserResponseType,
  CheckUserResponseType,
};
