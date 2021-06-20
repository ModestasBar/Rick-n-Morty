import React, { FC, ReactElement } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, JssProvider } from "react-jss";
import theme from "./theme";

const ThemeWrapper: FC = ({ children }) => {
  return (
    <JssProvider id={{ minify: false }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </JssProvider>
  );
};

const customRender = (ui: ReactElement): any =>
  render(ui, { wrapper: ThemeWrapper });

export * from "@testing-library/react";

export { customRender as render };
