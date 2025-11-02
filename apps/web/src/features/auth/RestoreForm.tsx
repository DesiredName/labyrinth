import { Link, useNavigate } from 'react-router';
import { clsxtw } from '../../utils/clsxtw';
import './SignForm.css';
import { UIButton, UIInput } from '@webx/ui';
import type React from 'react';

type RestoreFormProps = React.ComponentPropsWithoutRef<'form'>;

const RestoreForm = (props: RestoreFormProps) => {
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email');

    console.log(email);
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
      <label htmlFor="email">Email</label>
      <UIInput
        id="email"
        name="email"
        autoComplete="email"
        type="email"
        autoFocus
      />
      <UIButton type="submit" className="col-span-2">
        Submit
      </UIButton>
      <br></br>
      <div className="text-center text-sm col-span-2">
        <span className="text-gray-500 ">Already have an account?</span>&nbsp;
        <Link to="/signin">Sign in</Link>
      </div>
    </form>
  );
};

export { RestoreForm };
