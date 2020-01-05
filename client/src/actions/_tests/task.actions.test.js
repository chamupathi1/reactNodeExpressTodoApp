import { getAllTasks } from "../task.actions";
import { GET_ALL_TASKS } from "../actionTypes";
import axios from 'axios';
import { API_PREFIX, STATUS } from "../../utils/constants";

jest.mock('axios');


/**
 * Testing action creators
 */
describe("getAllTasks", () => {
    const dispatch = jest.fn();

    const type = "type";

    test("has the correct type", () => {
        getAllTasks(type)(dispatch);
        expect(dispatch).toBeCalledWith({
            type: GET_ALL_TASKS,
            payload: type
        });
    });


});

describe("should call to get active tasks", () => {
    const dispatch = jest.fn();

    const type = STATUS.ACTIVE;

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    test("has the correct type", () => {
        getAllTasks(type)(dispatch);
        expect(dispatch).toBeCalledWith({
            type: GET_ALL_TASKS,
            payload: type
        });

        expect(axios.get).toHaveBeenCalledWith(API_PREFIX + "/tasks" + "/active");


    });

});

describe("should call to get completed tasks", () => {
    const dispatch = jest.fn();

    const type = STATUS.COMPLETED;

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    test("has the correct type", () => {
        getAllTasks(type)(dispatch);
        expect(dispatch).toBeCalledWith({
            type: GET_ALL_TASKS,
            payload: type
        });

        expect(axios.get).toHaveBeenCalledWith(API_PREFIX + "/tasks" + "/completed");


    });

});


/***
 * TODO write test cases for
 * createNewTask
 * updateTaskStatus
 * toggleSelectAll
 * updateAllTasks
 * 
 */