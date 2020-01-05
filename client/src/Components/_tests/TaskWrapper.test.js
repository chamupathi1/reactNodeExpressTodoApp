import React from "react";
import { shallow, mount } from "enzyme";

import { MemoryRouter } from 'react-router';
import TaskWrapper from "../TaskWrapper/TaskWrapper";
import App from "../../App";
import TestProvider from "../../TestProvider";
import SelectAll from "../SelectAll/SelectAll";
import TaskCreater from "../TaskCreater/TaskCreater";
import CateogoryNavBar from "../CateogoryNavBar/CateogoryNavBar";
import ToDoList from "../ToDoList/ToDoList";
import Footer from "../Footer/Footer";


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


test("Should render TaskWrapper and it's components", () => {
    const wrapper = mount(
        <TestProvider initialState={{}}>
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        </TestProvider>
    );
    expect(wrapper.find(TaskWrapper)).toHaveLength(1);
    expect(wrapper.find(SelectAll)).toHaveLength(1);
    expect(wrapper.find(TaskCreater)).toHaveLength(1);
    expect(wrapper.find(CateogoryNavBar)).toHaveLength(1);
    expect(wrapper.find(ToDoList)).toHaveLength(1);
    expect(wrapper.find(Footer)).toHaveLength(1);
});

