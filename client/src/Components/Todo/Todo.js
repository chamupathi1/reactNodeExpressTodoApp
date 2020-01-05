// Todo

import React from 'react';
import './Todo.scss';
import { STATUS } from '../../utils/constants';
import { connect } from "react-redux";
import { updateTaskStatus } from '../../actions/task.actions';


const Todo = (props) => {
    let { todo, updateTaskStatus } = props;

    return <div className="Todo">

        {
            todo.loading && <div className="loading valign-wrapper">
                <div className="preloader-wrapper small active">
                    <div className="spinner-layer spinner-green-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div><div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        }

        <div className="todo-content">
            <p className="content">{
                todo && todo.content
            }</p>
        </div>

        <div className="todo-toggle">
            <div className="switch">
                <label>
                    <input
                        id={`todo-${todo._id}`}
                        type="checkbox"
                        checked={todo.status === STATUS.ACTIVE}
                        onChange={() => updateTaskStatus(todo)}
                    />
                    <span className="lever"></span>
                    {todo.status === STATUS.ACTIVE ? 'Active' : 'Completed'}
                </label>
            </div>
        </div>
    </div>
}


const mapStateToProps = ({ tasks }) => {
    return {
    };
};

export default connect(mapStateToProps, {
    updateTaskStatus
})(Todo);