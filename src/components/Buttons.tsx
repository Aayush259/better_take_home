import { ButtonProps } from "@/helpers/interfaces";
import "@/styles/button.css";

export const ButtonPrimary = ({ children, className, ...rest }: ButtonProps) => {
    return (
        <button
            className={`btn-p ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};
