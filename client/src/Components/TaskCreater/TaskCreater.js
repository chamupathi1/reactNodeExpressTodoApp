import React, { Component } from 'react';
import './TaskCreater.scss';

import { connect } from 'react-redux';
import { createNewTask } from '../../actions/task.actions';

class TaskCreater extends Component {
    state = { todovalue: '' }

    handleSubmit = (e) => {
        console.log(this.state.todovalue)
        e.preventDefault();
        this.props.createNewTask({ payload: this.state.todovalue });
        this.setState({ todovalue: '' })
    }

    render() {
        return (
            <div className="TaskCreater">
                <div className="row">
                    <form onSubmit={this.handleSubmit} className="col s12">
                        <div className="input-field">
                            <input id="todo" type="text" className="validate" onChange={(e) => {
                                this.setState({
                                    todovalue: e.target.value
                                })
                            }}
                                value={this.state.todovalue} />
                            <label htmlFor="todo">Add new todo</label>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}


function mapStateToProps(state) {
    return {

    };
}

//connect this commponent with redux store
export default connect(mapStateToProps,
    {
        createNewTask
    })(TaskCreater)

