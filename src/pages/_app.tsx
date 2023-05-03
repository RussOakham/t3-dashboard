import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes'
import type { AppType, AppProps } from "next/app";


import { api } from "@/utils/api";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps} appearance={{
      baseTheme: dark,
    }}>
      <Component {...pageProps} />;
    </ClerkProvider>
  )
};

export default api.withTRPC(MyApp);
