import { createSelector } from "reselect";
import { STATUS } from "../utils/constants";

/**
 * get task list selector
 */
const taskSelector = state => {
    return state && state.taskList;
}

/**
 * get current category selector
 */
const categorySelector = state => state.currentCategory;

/**
 * Selector to filter tasks according to current category
 */
const getTasks = (tasks, currentCategory) => {
    if (!currentCategory) {
        return tasks;
    } else if (currentCategory === STATUS.ALL) {
        return tasks;
    }
    return tasks.filter(task => task.status === currentCategory);
};

/**
 * get active tasks
 */
const getActiveTasksCount = (tasks) => {
    return tasks.filter(task => task.status === STATUS.ACTIVE).length;
};

export const taskListSelector = createSelector(taskSelector, categorySelector, getTasks);

export const activeTaskCountSelector = createSelector(taskSelector, getActiveTasksCount);
