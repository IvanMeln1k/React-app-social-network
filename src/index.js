import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./store-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
let renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <BrowserRouter>
          <App store={store} />
        </BrowserRouter>
      </StoreContext.Provider>
    </React.StrictMode>
  );
};

store.subscribe(renderEntireTree);
renderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
