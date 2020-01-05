import { ADD_NEW_TASK, ADD_NEW_TASK_SUCCESS, ADD_NEW_TASK_FAILED, GET_ALL_TASKS, GET_ALL_TASKS_SUCCESS, GET_ALL_TASKS_FAILED, UPDATE_TASK_STATUS, UPDATE_TASK_STATUS_SUCCESS, UPDATE_TASK_STATUS_FAILED, UPDATE_CATEGORY, TOGGLE_SELECT_ALL_BUTTON, UPDATE_ALL_ITEMS, UPDATE_ALL_ITEMS_SUCCESS, UPDATE_ALL_ITEMS_FAILED } from './actionTypes';
import { API_PREFIX, STATUS } from '../utils/constants';
import axios from 'axios';

/**
 * create new Task Action
 * 
 * @param {*} payload 
 */
export const getAllTasks = payload => async dispatch => {
    try {
        dispatch({ type: GET_ALL_TASKS, payload });

        let url = API_PREFIX + "/tasks";

        switch (payload) {
            case STATUS.ACTIVE: {
                url = url + '/active';
                break;
            }
            case STATUS.COMPLETED: {
                url = url + '/completed';
                break;
            }
            default: {

            }
        }

        const res = await axios.get(url);

        dispatch({ type: GET_ALL_TASKS_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: GET_ALL_TASKS_FAILED, payload: err });
    }
};


/**
 * create new Task Action
 * 
 * @param {*} payload 
 */
export const createNewTask = payload => async dispatch => {
    try {
        dispatch({ type: ADD_NEW_TASK, payload });
        const res = await axios.post(API_PREFIX + "/tasks/add", {
            content: payload.payload
        });
        dispatch({ type: ADD_NEW_TASK_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: ADD_NEW_TASK_FAILED, payload: err });
    }
};

/**
 * update Task Action
 * 
 * @param {*} payload 
 */
export const updateTaskStatus = payload => async dispatch => {
    try {
        dispatch({ type: UPDATE_TASK_STATUS, payload });

        const url = API_PREFIX + '/tasks' + (payload.status && payload.status == STATUS.COMPLETED ? '/active' : '/complete');

        const res = await axios.post(url, {
            id: payload._id
        });

        dispatch({ type: UPDATE_TASK_STATUS_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: UPDATE_TASK_STATUS_FAILED, payload: { ...err, ...payload } });
    }
};

export const toggleSelectAll = payload => ({
    type: TOGGLE_SELECT_ALL_BUTTON,
    payload
})

/**
 * update Task Action
 * 
 * @param {*} payload 
 */
export const updateAllTasks = payload => async dispatch => {
    try {
        dispatch({ type: UPDATE_ALL_ITEMS, payload });

        const url = API_PREFIX + '/tasks' + (payload.allComplete ? '/makeAllcomplete' : '/makeAllActive');

        const res = await axios.post(url, {
            id: payload._id
        });

        dispatch({ type: UPDATE_ALL_ITEMS_SUCCESS, payload: payload });
    } catch (err) {
        dispatch({ type: UPDATE_ALL_ITEMS_FAILED, payload: { ...err, ...payload } });
    }
};
