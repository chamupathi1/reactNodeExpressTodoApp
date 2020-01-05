// ToDoList

import React, { useEffect } from 'react';
import './ToDoList.scss';
import Todo from '../Todo/Todo';
import { connect } from "react-redux";
import taskSelector, { taskListSelector } from '../../selectors/taskSelector';
import { getAllTasks } from '../../actions/task.actions';


const ToDoList = (props) => {
    let { getAllTasks, location } = props;

    useEffect(() => {
        getAllTasks(location.pathname.split('/')[1])
    }, [location])
    // will only run in first rendering since the empty array

    return <div className="ToDoList ">
        {
            props.taskList.map(task => <Todo todo={task} key={task._id} />)
        }

    </div>
}

const mapStateToProps = ({ tasks }) => {
    return {
        taskList: taskListSelector(tasks),
        // fetchingTasks: tasks.fetchingTasks
    };
};

export default connect(mapStateToProps, {
    getAllTasks
})(ToDoList);
