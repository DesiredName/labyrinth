import React from 'react';
import { clsxtw } from '../utils/clsxtw';

type BrandLogoProps = React.ComponentPropsWithoutRef<'div'>;

const BrandLogo = React.forwardRef<HTMLDivElement, BrandLogoProps>(
  ({ className, ...props }: BrandLogoProps, ref) => (
    <div
      ref={ref}
      className={clsxtw(
        'text-lg font-bold text-nowrap whitespace-pre',
        className,
      )}
      {...props}
    >
      Web<span className="text-red-700 dark:text-amber-600">X</span>
    </div>
  ),
);

BrandLogo.displayName = 'BrandLogo';

export { BrandLogo };
