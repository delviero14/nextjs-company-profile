import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
    return (
        <div className=" dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
            {children}
        </div>

        
    )
}