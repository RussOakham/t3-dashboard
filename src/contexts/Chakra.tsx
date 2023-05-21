import type { ReactNode } from 'react';
import type { Theme } from '@chakra-ui/react';
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager, useColorMode } from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';

import theme from "@/utils/theme"

type ChakraProps = {
    cookies?: string;
    children: ReactNode;
};

export const Chakra = ({ cookies, children }: ChakraProps) => {
    const { colorMode } = useColorMode();
    const colorModeManager = typeof cookies === 'string'
        ? cookieStorageManagerSSR(cookies)
        : localStorageManager;

    return (
        <ChakraProvider theme={theme[colorMode] as Theme} colorModeManager={colorModeManager} portalZIndex={1000} resetCSS>
            {children}
        </ChakraProvider>
    );
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    return {
        props: {
            cookies: req.headers.cookie ?? '',
        },
    };
}