import z from 'zod';

const RegisterUserRequest = z.object({
  body: z.object({
    email: z.email().nonempty(),
    username: z.string().nonempty(),
    password: z.string().nonempty(),
  }),
});

type RegisterUserRequestType = z.infer<typeof RegisterUserRequest>['body'];

const LoginUserRequest = z.object({
  body: z.object({
    email: z.email().nonempty(),
    password: z.string().nonempty(),
  }),
});

type LoginUserRequestType = z.infer<typeof LoginUserRequest>['body'];

export { RegisterUserRequest, LoginUserRequest };
export type { LoginUserRequestType, RegisterUserRequestType };
