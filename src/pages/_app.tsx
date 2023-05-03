import type { AppType, AppProps } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
