import type { Theme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

import theme from '@/utils/theme'

const Document = () => {
    const chakraTheme = theme as Theme

    return (
        <Html lang="en-GB">
            <Head />
            <body>
                <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode} />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document