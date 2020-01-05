import React from "react";
import { shallow, } from "enzyme";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

/**
 * Test App for component availability
 */

let wrapper = null;



beforeEach(() => {
  wrapper = shallow(<App></App>);
});

afterEach(() => {
  wrapper.unmount();
});


test("Test Browser Router Exists", () => {
  expect(wrapper.find(BrowserRouter).length).toEqual(1);
});

