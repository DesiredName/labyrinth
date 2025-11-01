import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsxtw } from '../utils/clsxtw';

const inputVariants = cva('inline-block border border-gray-200 rounded-md', {
  variants: {
    uiSize: {
      xs: 'px-1 py-1 text-xs',
      sm: 'px-1 py-1.5 text-sm',
      base: 'px-2 py-2 text-base',
      lg: 'px-3 py-2.5 text-lg',
      xl: 'px-3 py-3 text-xl',
    },
  },
  defaultVariants: {
    uiSize: 'base',
  },
});

type InputSize = NonNullable<VariantProps<typeof inputVariants>['uiSize']>;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ uiSize, className, ...props }, ref) => {
    const classes = clsxtw(inputVariants({ uiSize }), className);
    return <input ref={ref} className={classes} {...props} />;
  },
);

Input.displayName = 'Input';

export { inputVariants, type InputSize };
