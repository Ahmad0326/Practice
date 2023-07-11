import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoList from "./TodoList";

const App1 = () => {
  return (
    <div
      style={{
        border: "10px ",
        alignContent: "center",
        justifyItems: "center",
      }}
    >
      <App />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App1 />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
