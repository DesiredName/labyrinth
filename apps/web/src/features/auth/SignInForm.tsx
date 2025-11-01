import { Link } from 'react-router';
import { clsxtw } from '../../utils/clsxtw';
import './SignForm.css';
import { UIButton, UIInput } from '@webx/ui';

type SignInFormProps = React.ComponentPropsWithoutRef<'form'>;

const SignInForm = (props: SignInFormProps) => (
  <form className={clsxtw('sign-form', props.className)}>
    <label htmlFor="username">Username</label>
    <UIInput id="username" size={1} autoComplete="username" autoFocus />
    <label htmlFor="password">Password</label>
    <UIInput
      id="password"
      type="password"
      size={1}
      autoComplete="current-password"
    />
    <UIButton type="submit" className="col-span-2">
      Sign in
    </UIButton>
    <br></br>
    <div className="text-center text-sm col-span-2">
      <span className='text-gray-500 '>Don't have an account?</span>&nbsp;
      <Link to="/signup">Sign up</Link>
    </div>
  </form>
);

export { SignInForm };
