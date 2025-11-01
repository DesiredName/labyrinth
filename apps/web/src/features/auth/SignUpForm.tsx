import { Link } from 'react-router';
import { clsxtw } from '../../utils/clsxtw';
import './SignForm.css';
import { UIButton, UIInput } from '@webx/ui';

type SignUpFormProps = React.ComponentPropsWithoutRef<'form'>;

const SignUpForm = (props: SignUpFormProps) => (
  <form className={clsxtw('sign-form', props.className)}>
    <label htmlFor="username">Username</label>
    <UIInput id="username" size={1} autoComplete="username" autoFocus />
    <label htmlFor="email">Email</label>
    <UIInput id="email" size={1} autoComplete="email" type="email" />
    <label htmlFor="password">Password</label>
    <UIInput
      id="password"
      type="password"
      size={1}
      autoComplete="new-password"
    />
    <UIButton type="submit" className="col-span-2">
      Sign up
    </UIButton>
    <br></br>
    <div className="text-center text-sm col-span-2">
      <span className='text-gray-500 '>Already have an account?</span>&nbsp;
      <Link to="/signin">Sign in</Link>
    </div>
  </form>
);

export { SignUpForm };
