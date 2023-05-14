import type { ReactNode } from 'react'

type PropTypes = {
    children: ReactNode
    className?: string
}

const MainContainer = ({ children, className }: PropTypes) => {
    return (
        <main className={`${className || ''} content`}>
            {children}
        </main>
    )
}

export default MainContainer