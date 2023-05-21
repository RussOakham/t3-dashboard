import type { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import { Poppins, Roboto } from "next/font/google"

import MainContainer from '@/components/Containers/MainContainer'
import Sidebar from '@/components/Sidebar/Sidebar'
import TopBar from '@/components/TopBar/TopBar'

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
            <Box display="flex">
                <Sidebar />
                <MainContainer className={`${poppinsFont.className}`}>
                    <TopBar />
                    <div className='p-2'>
                        {children}
                    </div>
                </MainContainer>
            </Box>
        </>
    )
}

export default Layout