import { ClassProp } from 'class-variance-authority/types';
import { default as default_2 } from 'react';
import * as React_2 from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants: (props?: ({
    uiSize?: "xs" | "sm" | "base" | "lg" | "xl" | null | undefined;
    variant?: "primary" | "secondary" | "outline" | null | undefined;
} & ClassProp) | undefined) => string;

declare const iconVariants: (props?: ({
    uiSize?: "xs" | "sm" | "base" | "lg" | "xl" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface IIconProps extends React_2.AllHTMLAttributes<HTMLDivElement>, VariantProps<typeof iconVariants> {
}

declare interface IInputProps extends React_2.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
}

declare interface IMenuEntry {
    to: () => default_2.ReactNode;
    items?: UIMenuProps[];
}

declare const inputVariants: (props?: ({
    uiSize?: "xs" | "sm" | "base" | "lg" | "xl" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const UIButton: React_2.ForwardRefExoticComponent<UIButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare interface UIButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}

export declare type UIButtonSize = NonNullable<VariantProps<typeof buttonVariants>['uiSize']>;

export declare type UIButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;

export declare const UIIcon: React_2.ForwardRefExoticComponent<IIconProps & React_2.RefAttributes<HTMLDivElement>>;

export declare type UIIconSize = NonNullable<VariantProps<typeof iconVariants>['uiSize']>;

export declare const UIInput: React_2.ForwardRefExoticComponent<IInputProps & React_2.RefAttributes<HTMLInputElement>>;

export declare const UIMenu: default_2.ForwardRefExoticComponent<UIMenuProps & default_2.RefAttributes<HTMLMenuElement>>;

export declare interface UIMenuProps extends default_2.MenuHTMLAttributes<HTMLMenuElement> {
    items: IMenuEntry[];
}

export { }
