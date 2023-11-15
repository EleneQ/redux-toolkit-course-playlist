import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//4
/* 
  the provider is so that we can access the store data
  from react components
*/
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
