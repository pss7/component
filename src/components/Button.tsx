
interface buttonProps {
    onClick?: () => void;
    style?: React.CSSProperties;
    disabled?: boolean;
    label?: string;
    type?: "submit" | "reset" | "button" | undefined;
    title?: string;
    className?: string;
    id?: string;
}

function Button({ style, id, className, title, type, onClick, disabled, label }: buttonProps) {

    return (
        <>
            <button style={style} id={id} title={title} type={type} className={className} onClick={onClick} disabled={disabled}>
                {label}
            </button>
        </>
    )

}

export default Button