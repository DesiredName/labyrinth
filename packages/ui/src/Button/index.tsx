import React from 'react';
import StyledButton from './style';

type ButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

type CommonProps = {
    children: React.ReactNode;
    className?: string;
    size?: ButtonSize;
};

type ButtonProps = CommonProps & (
  | { as: 'button'; } & React.ButtonHTMLAttributes<HTMLButtonElement>
  | { as: 'a'; } & React.AnchorHTMLAttributes<HTMLAnchorElement>
);

function Button(props: ButtonProps) {
    const {
        children,
        size = 'base',
        as,
        ...rest
    } = props;

    return (
        <StyledButton as={as} $size={size} {...rest}>
            {children}
        </StyledButton>
    );
}

export { type ButtonSize };
export { Button }
