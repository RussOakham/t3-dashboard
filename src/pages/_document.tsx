import type { Theme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

import theme from '@/utils/theme'

const Document = () => {
    const chakraTheme = theme as Theme

    return (
        <Html lang="en-GB">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document