import { Link, useNavigate } from 'react-router';
import { clsxtw } from '../../utils/clsxtw';
import './SignForm.css';
import { UIButton, UIInput } from '@webx/ui';
import type React from 'react';
import { useValidateForm } from '../../utils/validate.form';
import z from 'zod';

type SignUpFormProps = React.ComponentPropsWithoutRef<'form'>;

const signUpSchema = z.object({
  email: z.email('Invalid email address'),
  username: z.string().min(3, 'Username too short'),
  password: z.string().min(12, 'Password must be at least 12 characters'),
});

const SignUpForm = (props: SignUpFormProps) => {
  const navigate = useNavigate();
  const { errors, validate } = useValidateForm(signUpSchema);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = validate(formData);

    if (result.success === false) {
      return;
    }

    console.log('ok');
    // const res = await fetch('/api/signup', {
    //   method: 'POST',
    //   body: formData,
    // });

    // if (res.ok) navigate('/dashboard');
  }

  return (
    <form
      className={clsxtw('sign-form', props.className)}
      method="post"
      onSubmit={handleSubmit}
    >
      <label htmlFor="username">Username</label>
      <UIInput
        id="username"
        name="username"
        autoComplete="username"
        required
        autoFocus
      />
      {errors.username && (
        <div className="col-span-2 text-right text-red-700 text-sm">
          {errors.username}
        </div>
      )}

      <label htmlFor="email">Email</label>
      <UIInput
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      {errors.email && (
        <div className="col-span-2 text-right text-red-700 text-sm">
          {errors.email}
        </div>
      )}

      <label htmlFor="password">Password</label>
      <UIInput
        id="password"
        name="password"
        type="password"
        autoComplete="new-password"
        required
      />
      {errors.password && (
        <div className="col-span-2 text-right text-red-700 text-sm">
          {errors.password}
        </div>
      )}

      <UIButton type="submit" className="col-span-2">
        Sign up
      </UIButton>

      <br></br>

      <div className="text-center text-sm col-span-2">
        <span className="text-gray-500 ">Already have an account?</span>&nbsp;
        <Link to="/signin">Sign in</Link>
      </div>
    </form>
  );
};

export { SignUpForm };
