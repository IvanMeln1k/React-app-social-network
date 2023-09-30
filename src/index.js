import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, text: "yo" },
  { id: 2, text: "hello world!" },
  { id: 3, text: "yo yo yo" },
  { id: 4, text: "sometext" },
];

let chats = [
  { id: 1, name: "Ivan" },
  { id: 2, name: "Marat" },
  { id: 3, name: "Denis" },
  { id: 4, name: "Yaroslav" },
  { id: 5, name: "Vlad" },
];

let messages = [
  { id: 1, message: "Hello!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Norm" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} chats={chats} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
