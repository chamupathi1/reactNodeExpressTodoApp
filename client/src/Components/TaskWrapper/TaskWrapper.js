

// TaskWrapper

import React, { useEffect } from 'react';
import './TaskWrapper.scss';
import { connect } from "react-redux";
import { taskListSelector } from '../../selectors/taskSelector';
import { getAllTasks } from '../../actions/task.actions';
import TaskCreater from '../TaskCreater/TaskCreater';
import CateogoryNavBar from '../CateogoryNavBar/CateogoryNavBar';
import ToDoList from '../ToDoList/ToDoList';
import Footer from '../Footer/Footer';
import SelectAll from '../SelectAll/SelectAll';


const TaskWrapper = (props) => {

    //location

    useEffect(() => {
        console.log('Task Wrapper Updated')
    }, [props.location])

    return <div className="TaskWrapper ">
        <h1 className="header">To Do App</h1>
        <SelectAll location={props.location} />
        <TaskCreater />
        <CateogoryNavBar location={props.location} />
        <ToDoList location={props.location} />
        <Footer />

    </div>
}

const mapStateToProps = ({ tasks }) => {
    return {
        taskList: taskListSelector(tasks),
    };
};

export default connect(mapStateToProps, {
    getAllTasks
})(TaskWrapper);
