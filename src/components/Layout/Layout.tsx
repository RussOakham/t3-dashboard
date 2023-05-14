import type { ReactNode } from 'react'
import { Poppins, Roboto } from "next/font/google"

import MainContainer from './MainContainer'
import TopBar from './TopBar'

const robotoFont = Roboto({
    display: "swap",
    weight: ["400", "700"],
    subsets: ['latin'],
})

const poppinsFont = Poppins({
    display: "swap",
    weight: ["400", "700"],
    subsets: ['latin'],
})


type PropTypes = {
    children: ReactNode
}

const Layout = ({ children }: PropTypes) => {
    return (
        <>
            <style jsx global>
                {
                    `
                        :root {
                            --font-roboto: ${robotoFont.style.fontFamily};
                            --font-poppins: ${poppinsFont.style.fontFamily};
                        }
                    `
                }
            </style>
            <TopBar />
            <MainContainer className={`${poppinsFont.className}`}>
                {children}
            </MainContainer>
        </>
    )
}

export default Layout