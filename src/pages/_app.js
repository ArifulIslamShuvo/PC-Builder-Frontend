import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <StyleProvider hashPriority="high">
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider> 
    </StyleProvider>
  );


}