import "assets/css/main.min.css";
import "animate.css/animate.css";
import "i18n";

import type { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ThemeModal from "components/Modal/Theme";
import { persistStore } from "redux-persist";
import store from "store";

let persistor = persistStore(store);
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Component {...pageProps} />
      </PersistGate>
      <ThemeModal />
    </Provider>
  );
};

export default MyApp;
