import { ReactNode } from "react"

interface HedaerProps {
    children: ReactNode;
    className?: string;
}

function Container({ className, children }: HedaerProps) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Container