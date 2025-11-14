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

interface UIInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const UIInput = React.forwardRef<HTMLInputElement, UIInputProps>(
  ({ uiSize, className, size, ...props }, ref) => {
    const classes = clsxtw(inputVariants({ uiSize }), className);
    return <input ref={ref} size={size ?? 1} className={classes} {...props} />;
  },
);

UIInput.displayName = 'Input';

export { UIInput, inputVariants };
export type { UIInputProps, InputSize };
