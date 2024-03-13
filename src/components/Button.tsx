
import { ReactNode } from 'react';

interface buttonProps {
    onClick?: () => void;
    style?: React.CSSProperties;
    disabled?: boolean;
    label?: string;
    type?: "submit" | "reset" | "button" | undefined;
    title?: string;
    className?: string;
    id?: string;
    children?: ReactNode;
}

function Button({ children, style, id, className, title, type, onClick, disabled, label }: buttonProps) {

    return (
        <>
            <button style={style} id={id} title={title} type={type} className={className} onClick={onClick} disabled={disabled}>
                {children}
                {label}
            </button>
        </>
    )

}

export default Button