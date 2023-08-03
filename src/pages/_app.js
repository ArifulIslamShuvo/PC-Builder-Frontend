import RootLayout from "@/components/Layouts/RootLayout";
import store from "@/redux/features/store";
import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.pageProps}>
      {getLayout(
        <StyleProvider hashPriority="high">
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </StyleProvider>
      )}
      <ToastContainer />
    </SessionProvider>
  );


}