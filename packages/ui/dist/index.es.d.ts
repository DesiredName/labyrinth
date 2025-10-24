import { default as default_2 } from 'react';
import { JSX } from 'react/jsx-runtime';

declare type ButtonProps = CommonProps & ({
    as: 'button';
} & default_2.ButtonHTMLAttributes<HTMLButtonElement> | {
    as: 'a';
} & default_2.AnchorHTMLAttributes<HTMLAnchorElement>);

declare type CommonProps = {
    children: default_2.ReactNode;
    className?: string;
    size?: UIButtonSize;
};

export declare function UIButton(props: ButtonProps): JSX.Element;

export declare type UIButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

export declare function UIInput(): JSX.Element;

export { }
