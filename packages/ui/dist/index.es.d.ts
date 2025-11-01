import { ClassProp } from 'class-variance-authority/types';
import * as React_2 from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants: (props?: ({
    uiSize?: "xs" | "sm" | "base" | "lg" | "xl" | null | undefined;
    variant?: "primary" | "secondary" | "outline" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface InputProps extends React_2.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
}

declare const inputVariants: (props?: ({
    uiSize?: "xs" | "sm" | "base" | "lg" | "xl" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const UIButton: React_2.ForwardRefExoticComponent<UIButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare interface UIButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}

export declare type UIButtonSize = NonNullable<VariantProps<typeof buttonVariants>['uiSize']>;

export declare type UIButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;

export declare const UIInput: React_2.ForwardRefExoticComponent<InputProps & React_2.RefAttributes<HTMLInputElement>>;

export { }
