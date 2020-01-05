// Footer

import React from "react";
import { mount } from "enzyme";

import Footer from "../Footer/Footer";
import SelectAll from "../SelectAll/SelectAll";
import TestProvider from "../../TestProvider";
import { BrowserRouter } from "react-router-dom";


/**
 * Test Footer for component availability
 */

let wrapper = null;

beforeEach(() => {
    const initialState = {};

    const location = { pathname: '/all' }
    wrapper = mount(
        <TestProvider initialState={initialState}>
            <Footer location={location} />
        </TestProvider>
    );
});

afterEach(() => {
    wrapper.unmount();
});


test("should show active task count as 0", () => {
    expect(wrapper.find(".Footer").text()).toEqual(
        "Active Task Count : 0"
    );
});

test("should show active task count as 2", () => {
    let initialState = {
        tasks: {
            taskList: [
                {
                    content: "fbsdfbsfg",
                    status: "active",
                    _id: "1"
                },
                {
                    content: "fbsdfbsfg",
                    status: "active",
                    _id: "2"
                },
                {
                    content: "fbsdfbsfg",
                    status: "completed",
                    _id: "3"
                }


            ]
        }
    }
    let wrapper = mount(
        <TestProvider initialState={initialState}>
            <Footer location={location} />
        </TestProvider>
    );
    expect(wrapper.find(".Footer").text()).toEqual(
        "Active Task Count : 2"
    );
});
