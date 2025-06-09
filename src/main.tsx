import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { Ludo } from "./containers/Ludo/Container";
import { Provider } from "react-redux";
import { store } from './state/store';

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <Ludo />
    </StrictMode>
  </Provider>
);
