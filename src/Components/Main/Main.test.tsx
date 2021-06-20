import React from "react";
import { render } from "../../test-utils";
import Main from "./Main";

test("<Main /> should show loader on initialize", async () => {
  const { getByTestId } = render(<Main />);
  expect(getByTestId("loader")).toBeTruthy();
});
