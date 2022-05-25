import "assets/css/main.min.css";
import "assets/css/ReactToastify.min.css";
import "animate.css/animate.css";
import "i18n";

import type { AppProps } from "next/app";
import ErrorBoundary from "components/ErrorBundry";
import LoadingModal from "components/Modal/Loading";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ThemeModal from "components/Modal/Theme";
import { ToastContainer } from "react-toastify";
import { persistStore } from "redux-persist";
import store from "store";

let persistor = persistStore(store);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Component {...pageProps} />
          <ToastContainer position="bottom-right" />
          <ThemeModal />
          <LoadingModal />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default MyApp;
