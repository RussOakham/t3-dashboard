import { CSSReset } from "@chakra-ui/react";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps, AppType } from "next/app";
import { Poppins, Roboto } from "next/font/google"

import { Chakra } from "@/contexts/Chakra";
import { api } from "@/utils/api";

import "@/styles/globals.css";

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

type CustomPageProps = {
  cookies?: string;
}

const MyApp: AppType = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  const { cookies } = pageProps;


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
      <Chakra cookies={cookies}>
        <ClerkProvider {...pageProps} >
          <main className={`${robotoFont.className} flex relative`}>
            <Component {...pageProps} />
          </main>
        </ClerkProvider>
      </Chakra>
    </>

  )
};

export default api.withTRPC(MyApp);
