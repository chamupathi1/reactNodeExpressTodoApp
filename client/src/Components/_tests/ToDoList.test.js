// ToDoList

import React from "react";
import { mount, shallow } from "enzyme";

import ToDoList from "../ToDoList/ToDoList";
import Todo from "../Todo/Todo";
import TestProvider from "../../TestProvider";


/**
 * Test ToDoList for component availability
 */

let wrapper = null;

beforeEach(() => {
    const initialState = {
        tasks: {
            taskList: [
                {
                    status: 'completed',
                    content: 'content1',
                    loading: true
                },
                {
                    status: 'completed',
                    content: 'content1',
                    loading: true
                },
                {
                    status: 'active',
                    content: 'content1',
                    loading: true
                },
            ]
        }
    };

    const location = { pathname: '/all' }
    wrapper = mount(
        <TestProvider initialState={initialState}>
            <ToDoList location={location} />
        </TestProvider>
    );
});

afterEach(() => {
    wrapper.unmount();
});


test("should render 3 todos in view all todos ", () => {
    const initialState = {
        tasks: {
            currentCategory: null,
            taskList: [
                {
                    status: 'completed',
                    content: 'content1',
                    loading: true
                },
                {
                    status: 'completed',
                    content: 'content1',
                    loading: true
                },
                {
                    status: 'active',
                    content: 'content1',
                    loading: true
                },
            ]
        }
    };

    const location = { pathname: '/all' }
    let wrapper = mount(
        <TestProvider initialState={initialState}>
            <ToDoList location={location} />
        </TestProvider>
    );

    expect(wrapper.find(Todo).length).toEqual(3);
});

test("should render 1 todos in view active todos ", () => {
    const initialState = {
        tasks: {
            currentCategory: 'active',
            taskList: [
                {
                    status: 'completed',
                    content: 'content1',
                    loading: true
                },
                {
                    status: 'completed',
                    content: 'content1',
                    loading: true
                },
                {
                    status: 'active',
                    content: 'content1',
                    loading: true
                },
            ]
        }
    };

    const location = { pathname: '/active' }
    let wrapper = mount(
        <TestProvider initialState={initialState}>
            <ToDoList location={location} />
        </TestProvider>
    );

    expect(wrapper.find(Todo).length).toEqual(1);
});

test("should render 2 todos in view complete todos ", () => {
    const initialState = {
        tasks: {
            currentCategory: 'completed',
            taskList: [
                {
                    status: 'completed',
                    content: 'content1',
                    loading: true
                },
                {
                    status: 'completed',
                    content: 'content1',
                    loading: true
                },
                {
                    status: 'active',
                    content: 'content1',
                    loading: true
                },
            ]
        }
    };

    const location = { pathname: '/completed' }
    let wrapper = mount(
        <TestProvider initialState={initialState}>
            <ToDoList location={location} />
        </TestProvider>
    );

    expect(wrapper.find(Todo).length).toEqual(2);
});
