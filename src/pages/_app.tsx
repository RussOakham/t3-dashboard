import { CSSReset } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps, AppType } from "next/app";
import { Roboto } from "next/font/google"

import { Chakra } from "@/contexts/Chakra";
import { api } from "@/utils/api";

import "@/styles/globals.css";

const robotoFont = Roboto({
  display: "swap",
  weight: ["400", "700"],
  subsets: ['latin'],
})

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    <Chakra cookies={pageProps.cookies}>
      <ClerkProvider {...pageProps} >
        <CSSReset />
        <main className={`${robotoFont.className} flex relative`}>
          <Component {...pageProps} />
        </main>
      </ClerkProvider>
    </Chakra>
  )
};

export default api.withTRPC(MyApp);
