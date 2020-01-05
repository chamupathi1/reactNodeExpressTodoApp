import React from "react";
import { shallow, mount, render } from "enzyme";

import { MemoryRouter, Route } from 'react-router';
import App from "../../App";
import TestProvider from "../../TestProvider";
import CateogoryNavBar from "../CateogoryNavBar/CateogoryNavBar";
import TaskWrapper from "../TaskWrapper/TaskWrapper";
import { act } from 'react-dom/test-utils';

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


test("Should render Category Nav Bar ", () => {
    const wrapper = mount(
        <TestProvider initialState={{}}>
            <MemoryRouter initialEntries={['/']}>
                <Route component={CateogoryNavBar} />
            </MemoryRouter>
        </TestProvider>
    );

    expect(wrapper.find(CateogoryNavBar)).toHaveLength(1);
});

// test("Should show All as default selected", () => {
//     const wrapper = mount(
//         <TestProvider initialState={{}}>
//             <MemoryRouter initialEntries={['/']}>
//                 <Route component={CateogoryNavBar} />
//             </MemoryRouter>
//         </TestProvider>
//     );

//     expect(wrapper.find(".selected")).toEqual("ALL");
// });


test("All is selected", () => {
    const wrapper = render(
        <TestProvider initialState={{}}>
            <MemoryRouter initialEntries={['/all']}>
                <Route component={CateogoryNavBar} />
            </MemoryRouter>
        </TestProvider>
    );

    expect(wrapper.find(".CateogoryNavBar a .selected").text()).toEqual("ALL");
});

test("Active is selected", () => {
    const wrapper = render(
        <TestProvider initialState={{}}>
            <MemoryRouter initialEntries={['/active']}>
                <Route component={CateogoryNavBar} />
            </MemoryRouter>
        </TestProvider>
    );

    expect(wrapper.find(".CateogoryNavBar a .selected").text()).toEqual("ACTIVE");
});

