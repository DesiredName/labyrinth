import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsxtw } from '../utils/clsxtw';

const iconVariants = cva(
  'cursor-pointer select-none border border-transparent hover:border-black rounded-full',
  {
    variants: {
      uiSize: {
        xs: 'p-1',
        sm: 'p-1.5',
        base: 'p-2',
        lg: 'p-2.5',
        xl: 'p-3',
      },
    },
    defaultVariants: {
      uiSize: 'base',
    },
  },
);

type IconSize = NonNullable<VariantProps<typeof iconVariants>['uiSize']>;

interface UIIconProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariants> {}

const UIIcon = forwardRef<HTMLDivElement, UIIconProps>(
  ({ uiSize, className, children, ...props }, ref) => {
    const classes = clsxtw(iconVariants({ uiSize }), className);

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  },
);

UIIcon.displayName = 'Icon';

export { UIIcon, iconVariants };
export type { UIIconProps, IconSize };
