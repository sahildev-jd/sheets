import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../store/rootReducer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
