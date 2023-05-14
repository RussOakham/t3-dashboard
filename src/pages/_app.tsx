import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps, AppType } from "next/app";

import Layout from "@/components/Layout/Layout";
import { Chakra } from "@/contexts/Chakra";
import { api } from "@/utils/api";

import "@/styles/globals.css";

type CustomPageProps = {
  cookies?: string;
}

const MyApp: AppType = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
  const { cookies } = pageProps;

  return (
    <Chakra cookies={cookies}>
      <ClerkProvider {...pageProps} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ClerkProvider>
    </Chakra>
  )
};

export default api.withTRPC(MyApp);
