// SelectAll

import React from "react";
import { mount } from "enzyme";

import SelectAll from "../SelectAll/SelectAll";
import TestProvider from "../../TestProvider";


/**
 * Test SelectAll for component availability
 */

let wrapper = null;

beforeEach(() => {
    const initialState = {
        tasks: {
            selectAll: true
        }
    };

    const location = { pathname: '/all' }
    wrapper = mount(
        <TestProvider initialState={initialState}>
            <SelectAll location={location} />
        </TestProvider>
    );
});

afterEach(() => {
    wrapper.unmount();
});


test("should show the as all selected", () => {
    expect(wrapper.find(".SelectAll label").text()).toEqual(
        "All Selected"
    );
});

test("should show as select all", () => {
    let initialState = {
        tasks: {
            selectAll: false
        }
    }
    let wrapper = mount(
        <TestProvider initialState={initialState}>
            <SelectAll location={location} />
        </TestProvider>
    );
    expect(wrapper.find(".SelectAll label").text()).toEqual(
        "Select All"
    );
});


// test("should show active task count as 2", () => {
//     let initialState = {
//         tasks: {
//             taskList: [
//                 {
//                     content: "fbsdfbsfg",
//                     status: "active",
//                     _id: "1"
//                 },
//                 {
//                     content: "fbsdfbsfg",
//                     status: "active",
//                     _id: "2"
//                 },
//                 {
//                     content: "fbsdfbsfg",
//                     status: "completed",
//                     _id: "3"
//                 }


//             ]
//         }
//     }
//     let wrapper = mount(
//         <TestProvider initialState={initialState}>
//             <SelectAll location={location} />
//         </TestProvider>
//     );
//     expect(wrapper.find(".SelectAll").text()).toEqual(
//         "Active Task Count : 2"
//     );
// });
