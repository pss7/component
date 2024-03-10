import { ReactNode } from 'react';

interface titleProps {

    level: number;
    text?: string;
    className?: string;
    children?: ReactNode;

}

function Title({ level, text, className, children }: titleProps) {

    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return <Tag className={className}>{children}{text}</Tag>;

}

export default Title