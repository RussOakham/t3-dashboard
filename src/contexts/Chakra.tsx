import type { ReactNode } from 'react';
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';


type ChakraProps = {
    cookies?: string;
    children: ReactNode;
};


export const Chakra = ({ cookies, children }: ChakraProps) => {
    const colorModeManager = typeof cookies === 'string'
        ? cookieStorageManagerSSR(cookies)
        : localStorageManager;

    return (
        <ChakraProvider colorModeManager={colorModeManager}>
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