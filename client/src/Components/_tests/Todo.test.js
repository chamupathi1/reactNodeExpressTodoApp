// Todo

import React from "react";
import { mount } from "enzyme";

import Todo from "../Todo/Todo";
import TestProvider from "../../TestProvider";


/**
 * Test Todo for component availability
 */

let wrapper = null;

beforeEach(() => {
    const initialState = {};

    const todo = {
        status: 'active',
        content: 'content1',
        loading: false
    }

    wrapper = mount(
        <TestProvider initialState={initialState}>
            <Todo todo={todo} />
        </TestProvider>
    );
});

afterEach(() => {
    wrapper.unmount();
});

test("should show active status", () => {
    expect(wrapper.find(".Todo label").text()).toEqual(
        "Active"
    );
});

test("should show complete status", () => {
    const initialState = {};

    const todo = {
        status: 'completed',
        content: 'content1',
        loading: false
    }

    let wrapper = mount(
        <TestProvider initialState={initialState}>
            <Todo todo={todo} />
        </TestProvider>
    );
    expect(wrapper.find(".Todo label").text()).toEqual(
        "Completed"
    );
});


test("should not show mask if not loading", () => {
    expect(wrapper.find(".Todo .loading").exists()).toBe(
        false
    );
});

test("should show mask if  loading", () => {
    const initialState = {};

    const todo = {
        status: 'completed',
        content: 'content1',
        loading: true
    }

    let wrapper = mount(
        <TestProvider initialState={initialState}>
            <Todo todo={todo} />
        </TestProvider>
    );

    expect(wrapper.find(".Todo .loading").exists()).toBeTruthy();
});