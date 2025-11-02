import { Link, useNavigate } from 'react-router';
import { clsxtw } from '../../utils/clsxtw';
import './SignForm.css';
import { UIButton, UIInput } from '@webx/ui';

type SignInFormProps = React.ComponentPropsWithoutRef<'form'>;

const SignInForm = (props: SignInFormProps) => {
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    console.log(email, password);
    // const res = await fetch('/api/signup', {
    //   method: 'POST',
    //   body: formData,
    // });

    // if (res.ok) navigate('/dashboard');
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
      />
      <label htmlFor="password">Password</label>
      <UIInput
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
      />
      <UIButton type="submit" className="col-span-2">
        Sign in
      </UIButton>
      <br></br>
      <div className="text-center text-sm col-span-2">
        <span className="text-gray-500 ">Don't have an account?</span>&nbsp;
        <Link to="/signup">Sign up</Link>
      </div>
    </form>
  );
};

export { SignInForm };
