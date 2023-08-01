import RootLayout from "@/components/Layouts/RootLayout";
import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.pageProps}>
      {getLayout(
        <StyleProvider hashPriority="high">
          <Component {...pageProps} />
        </StyleProvider>
      )}
    </SessionProvider>
  );


}