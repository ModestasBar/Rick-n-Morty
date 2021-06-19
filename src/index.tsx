import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, JssProvider } from "react-jss";
import App from "./App";
import "./index.css";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <JssProvider id={{ minify: false }}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </JssProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
