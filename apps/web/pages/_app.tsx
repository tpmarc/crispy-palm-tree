import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type CustomAppProps = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(<Component {...pageProps} />);
}
