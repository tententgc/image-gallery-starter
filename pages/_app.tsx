import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import "../styles/index.css";

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
