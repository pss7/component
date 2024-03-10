import { ReactNode } from "react"
import Header from "./Header"

interface MainProps {
    children?: ReactNode;
}

function Main({ children }: MainProps) {
    return (
        <>
            <Header />
            <main id="main">
                {children}
            </main>
        </>
    )
}

export default Main