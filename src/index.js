import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, JssProvider } from "react-jss";
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
