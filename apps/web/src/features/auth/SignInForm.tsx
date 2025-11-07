import { Link, useNavigate } from 'react-router';
import { clsxtw } from '../../utils/clsxtw';
import './SignForm.css';
import { UIButton, UIInput } from '@webx/ui';
import { useValidateForm } from '../../utils/validate.form';
import z from 'zod';
import { useAuthContext } from '../../context/AuthContext';
import { useState } from 'react';

type SignInFormProps = React.ComponentPropsWithoutRef<'form'>;

const signInSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().nonempty(),
});

const SignInForm = (props: SignInFormProps) => {
  const navigate = useNavigate();
  const { signin } = useAuthContext();
  const { errors, validate } = useValidateForm(signInSchema);
  const [pageError, setPageError] = useState<boolean>(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPageError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = validate(formData);

    if (result.success === false) {
      return;
    }

    const response = await signin(result.data);

    if (response) {
      navigate('/dashboard');
    } else {
      setPageError(true);
    }
  }

  return (
    <form
      className={clsxtw('sign-form', props.className)}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Email</label>
      <UIInput
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        autoFocus
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
        autoComplete="current-password"
        required
      />
      {errors.password && (
        <div className="col-span-2 text-right text-red-700 text-sm">
          {errors.password}
        </div>
      )}

      <UIButton type="submit" className="col-span-2">
        Sign in
      </UIButton>
      {pageError && (
        <div className="col-span-2 text-right text-red-700 text-sm">
          Failed to sign in
        </div>
      )}

      <div className="text-center text-sm col-span-2">
        <span className="text-gray-500 ">Don't have an account?</span>&nbsp;
        <Link to="/signup">Sign up</Link>
      </div>
    </form>
  );
};

export { SignInForm };
