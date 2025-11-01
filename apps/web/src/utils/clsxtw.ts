import { twMerge } from "tailwind-merge";
import clsx from "clsx";

function clsxtw(...inputs: any[]) {
    return twMerge(clsx(inputs));
}

export { clsxtw }