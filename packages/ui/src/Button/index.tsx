import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsxtw } from '../utils/clsxtw';

const buttonBase = `
  inline-flex items-center justify-center rounded-md cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
`;

const buttonVariants = cva(buttonBase, {
  variants: {
    uiSize: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      base: 'px-4 py-2 text-base',
      lg: 'px-5 py-2.5 text-lg',
      xl: 'px-6 py-3 text-xl',
    },
    variant: {
      primary: `
          bg-[var(--color-btn-bg)]
          border border-[var(--color-btn-border)]
          hover:bg-[var(--color-btn-bg-hover)]
          hover:border-[var(--color-btn-border-hover)]
        `,
      // bg-gray-700 hover:bg-gray-600
      // dark:bg-amber-700 dark:hover:bg-amber-600
    },
  },
  defaultVariants: {
    uiSize: 'base',
    variant: 'primary',
  },
});

type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>['uiSize']>;
type ButtonVariant = NonNullable<
  VariantProps<typeof buttonVariants>['variant']
>;

interface UIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const UIButton = forwardRef<HTMLButtonElement, UIButtonProps>(
  ({ uiSize, variant, className, children, ...props }, ref) => {
    const classes = clsxtw(buttonVariants({ uiSize, variant }), className);
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);

UIButton.displayName = 'UIButton';

export { UIButton, buttonVariants };
export type { UIButtonProps, ButtonSize, ButtonVariant };
