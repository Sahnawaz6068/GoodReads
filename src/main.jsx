import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./Redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode store={store}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
