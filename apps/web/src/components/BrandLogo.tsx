import React from 'react';
import { clsxtw } from '../utils/clsxtw';

type BrandLogoProps = React.ComponentPropsWithoutRef<'div'>;

const BrandLogo = React.forwardRef<HTMLDivElement, BrandLogoProps>(
  ({ className, ...props }: BrandLogoProps, ref) => (
    <div
      ref={ref}
      className={clsxtw(
        'text-lg font-bold text-nowrap whitespace-pre text-(--color-secondary)',
        className,
      )}
      {...props}
    >
      Web<span className="text-(--color-accent)">X</span>
    </div>
  ),
);

BrandLogo.displayName = 'BrandLogo';

export { BrandLogo };
