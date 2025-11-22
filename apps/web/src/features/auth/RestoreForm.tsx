import { Link, useNavigate } from 'react-router';
import { clsxtw } from '../../utils/clsxtw';
import './SignForm.css';
import { UIButton, UIInput } from '@webx/ui';
import type React from 'react';
import { z } from 'zod';
import { useValidateForm } from '../../utils/validate.form';

type RestoreFormProps = React.ComponentPropsWithoutRef<'form'>;

const restoreSchema = z.object({
  email: z.email('Invalid email address'),
});

const RestoreForm = (props: RestoreFormProps) => {
  const navigate = useNavigate();
  const { errors, validate } = useValidateForm(restoreSchema);

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
      <label htmlFor="email">Email</label>
      <UIInput
        id="email"
        name="email"
        autoComplete="email"
        type="email"
        required
        autoFocus
      />
      {errors.email && (
        <div className="col-span-2 text-right text-red-700 text-sm">
          {errors.email}
        </div>
      )}

      <UIButton type="submit" className="col-span-2">
        Submit
      </UIButton>

      <div className="text-center text-sm col-span-2">
        <span>Already have an account?</span>&nbsp;
        <Link to="/signin">Sign in</Link>
      </div>
    </form>
  );
};

export { RestoreForm };
