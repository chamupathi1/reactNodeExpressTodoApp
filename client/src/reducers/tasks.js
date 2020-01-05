import { STATUS } from "../utils/constants";
import { ADD_NEW_TASK, ADD_NEW_TASK_SUCCESS, GET_ALL_TASKS_SUCCESS, ADD_NEW_TASK_FAILED, UPDATE_TASK_STATUS, UPDATE_TASK_STATUS_FAILED, UPDATE_TASK_STATUS_SUCCESS, GET_ALL_TASKS, TOGGLE_SELECT_ALL_BUTTON, UPDATE_ALL_ITEMS, UPDATE_ALL_ITEMS_SUCCESS, UPDATE_ALL_ITEMS_FAILED } from '../actions/actionTypes';

let initialState = {
    currentCategory: null, //null
    taskBody: "",
    taskList: [],
    fetchingTasks: false,
    selectAll: false, //false
};

export default (state = initialState, action) => {
    let taskList = [];

    switch (action.type) {
        case GET_ALL_TASKS: {
            return {
                ...state,
                currentCategory: action.payload
            }
        }
        case GET_ALL_TASKS_SUCCESS: {
            return {
                ...state,
                fetchingTasks: false,
                taskList: [...action.payload]
            }
        }
        case ADD_NEW_TASK: {
            taskList = [...state.taskList, {
                status: null,
                loading: true,
                content: action.payload.payload,
                _id: state.taskList.length + 1,
                temp: true
            }]
            return { ...state, taskList };
        }
        case ADD_NEW_TASK_SUCCESS: {
            taskList = [...state.taskList]
            let tempIndex = taskList.findIndex(task => task.temp);

            taskList.splice(tempIndex, tempIndex + 1);

            taskList = [...taskList, {
                ...action.payload.task,
                loading: false,
            }]
            return { ...state, taskList };
        }
        case ADD_NEW_TASK_FAILED: {
            taskList = [...state.taskList]
            let tempIndex = taskList.findIndex(task => task.temp);

            taskList.splice(tempIndex, tempIndex + 1);

            return { ...state, taskList };
        }
        case UPDATE_TASK_STATUS: {
            taskList = [...state.taskList]
            let taskIndex = taskList.findIndex(task => task._id == action.payload._id);

            taskList[taskIndex] = {
                ...state.taskList[taskIndex],
                loading: true
            }

            return { ...state, taskList };
        }
        case UPDATE_TASK_STATUS_SUCCESS: {
            taskList = [...state.taskList]

            let taskIndex = taskList.findIndex(task => task._id == action.payload.task._id);

            taskList[taskIndex] = {
                ...action.payload.task,
                loading: false
            }

            return { ...state, taskList };
        }
        case UPDATE_TASK_STATUS_FAILED: {
            taskList = [...state.taskList]
            let taskIndex = taskList.findIndex(task => task._id == action.payload._id);

            taskList[taskIndex] = {
                ...state.taskList[taskIndex],
                loading: false
            }

            return { ...state, taskList };
        }
        case TOGGLE_SELECT_ALL_BUTTON: {
            return {
                ...state,
                selectAll: !state.selectAll
            }
        }
        case UPDATE_ALL_ITEMS: {
            taskList = state.taskList.map(task => {
                return {
                    ...task,
                    loading: true
                }
            })

            return { ...state, taskList };
        }
        case UPDATE_ALL_ITEMS_SUCCESS: {
            taskList = state.taskList.map(task => {
                return {
                    ...task,
                    loading: false,
                    status: action.payload.allComplete ? STATUS.COMPLETED : STATUS.ACTIVE
                }
            })

            return { ...state, taskList };
        }
        case UPDATE_ALL_ITEMS_FAILED: {
            taskList = state.taskList.map(task => {
                return {
                    ...task,
                    loading: false,
                }
            })

            return { ...state, taskList };
        }
        default:
            return state;
    }
}