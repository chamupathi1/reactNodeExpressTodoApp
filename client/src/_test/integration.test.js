// import "jsdom-global/register";
import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import { MemoryRouter } from "react-router";
import { API_PREFIX } from "../utils/constants";
import TestProvider from "../TestProvider";
import App from "../App";

/**
 * Integration tests
 */

let wrapper = null;

beforeEach(() => {
    /**
     * Mocking axios outgoing requests
     */
    moxios.install();

    moxios.stubRequest(API_PREFIX + "/tasks", {
        status: 200,
        response: [{
            "_id": "1",
            "content": "fbsdfbsfg",
            "status": "active",
        },
        {
            "_id": "2",
            "content": "lkmlkm",
            "status": "completed",
        }]
    });

    moxios.stubRequest(API_PREFIX + "/tasks/add", {
        status: 200,
        response: {
            task: {
                "_id": "2",
                "content": "lkmlkm",
                "status": "active",
            }
        }
    });

    moxios.stubRequest(API_PREFIX + "/tasks/makeAllcomplete", {
        status: 200,
        response: {
            "message": "successfully updated  all tasks as completed"
        }
    });

    const initialState = {
        tasks: {
            taskList: [],
            currentCategory: null,
        }
    };

    wrapper = mount(
        <TestProvider initialState={initialState}>
            <MemoryRouter initialEntries={["?status=all"]}>
                <App></App>
            </MemoryRouter>
        </TestProvider>
    );
});

afterEach(() => {
    moxios.uninstall();
    wrapper.unmount();
});

/**
 * Test for enter press on task creater
 */
test("Add new task", done => {
    wrapper.find("form").simulate("submit");
    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find(".Todo").length).toEqual(3);

        done();
    });
});

/**
 * Test is responsible for changing to completed a task
 */
test("Toggle status change", done => {
    moxios.wait(() => {
        wrapper.update();
        wrapper.find("#todo-1").simulate("change");
        moxios.wait(() => {
            wrapper.update();
            expect(
                wrapper.find("#todo-1").prop("checked")
            ).toBeTruthy();
            done();
        });
    });
});

/**
 * Test is responsible for changing to active a task
 */
test("Toggle status change", done => {
    moxios.wait(() => {
        wrapper.update();
        wrapper.find("#todo-2").simulate("change");
        moxios.wait(() => {
            wrapper.update();
            expect(
                wrapper.find("#todo-2").prop("checked")
            ).toBeFalsy();
            done();
        });
    });
});

