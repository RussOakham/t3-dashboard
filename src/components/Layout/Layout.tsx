import type { ReactNode } from 'react'
import { Poppins, Roboto } from "next/font/google"
import Head from "next/head";

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
            <div className="flex">
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"

                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Sidebar />
                <MainContainer className={`${poppinsFont.className}`}>
                    <TopBar />
                    <div className='p-5'>
                        {children}
                    </div>
                </MainContainer>
            </div>
        </>
    )
}

export default Layout