import z from 'zod';

const SignupUserRequest = z.object({
  body: z.object({
    email: z.email().nonempty(),
    username: z.string().nonempty(),
    password: z.string().nonempty(),
  }),
});

type SignupUserRequestType = z.infer<typeof SignupUserRequest>['body'];

const SigninUserRequest = z.object({
  body: z.object({
    email: z.email().nonempty(),
    password: z.string().nonempty(),
  }),
});

type SigninUserRequestType = z.infer<typeof SigninUserRequest>['body'];

export { SignupUserRequest, SigninUserRequest };
export type { SigninUserRequestType, SignupUserRequestType };
