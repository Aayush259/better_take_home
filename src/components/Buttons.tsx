import "@/styles/button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

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
