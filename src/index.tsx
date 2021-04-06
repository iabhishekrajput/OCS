import * as React from "react";
import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { config } from "./config";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { store } from "./Store";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchIntervalInBackground: true,
      refetchInterval: 1000 * 60 * 15,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={`/${config.applicationBasename}`}>
          <ColorModeScript />
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
reportWebVitals();
