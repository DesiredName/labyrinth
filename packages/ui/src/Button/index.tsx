import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsxtw } from '../utils/clsxtw';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium rounded-md cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      uiSize: {
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-1.5 text-sm',
        base: 'px-4 py-2 text-base',
        lg: 'px-5 py-2.5 text-lg',
        xl: 'px-6 py-3 text-xl',
      },
      variant: {
        primary:
          'bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-600',
        secondary:
          'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
        outline:
          'border border-gray-300 text-gray-900 hover:bg-gray-100 focus:ring-gray-300',
      },
    },
    defaultVariants: {
      uiSize: 'base',
      variant: 'primary',
    },
  },
);

type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['uiSize']>;
type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>['variant']
>;

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ uiSize, variant, className, children, ...props }, ref) => {
    const classes = clsxtw(buttonVariants({ uiSize, variant }), className);
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { buttonVariants, type ButtonSize, type ButtonVariant };
