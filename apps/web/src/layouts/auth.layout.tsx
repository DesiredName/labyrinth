import { Outlet } from 'react-router';
import { BrandLogo } from '../components/BrandLogo';

const AuthLayout = () => (
  <div className="min-h-screen min-w-screen flex flex-col gap-3">

    <title>WebX | Authorization</title>

    <header className="min-h-60 flex justify-center items-center">
      <BrandLogo className="text-4xl" />
    </header>

    <main className="flex-1 flex items-start justify-center">
      <Outlet />
    </main>

    <footer className="mt-auto mb-0 h-10 text-center">
      <a href="/terms.html" target="_blank" className='text-gray-500'>
        Terms & Conditions
      </a>
    </footer>
    
  </div>
);

export { AuthLayout };
