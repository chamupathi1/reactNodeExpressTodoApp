// SelectAll

import React from 'react';
import './SelectAll.scss';
import { connect } from "react-redux";
import { STATUS } from '../../utils/constants';
import { toggleSelectAll, updateAllTasks } from '../../actions/task.actions';

const SelectAll = (props) => {
    let { location, selectAll, toggleSelectAll, updateAllTasks } = props;

    return <div className={`SelectAll ${location.pathname === `/${STATUS.ALL}` ? 'show-container' : 'hide-container'}`}>
        <div className="switch">
            <label>
                <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={toggleSelectAll}
                />
                <span className="lever"></span>
                {selectAll ? 'All Selected' : 'Select All'}
            </label>
        </div>
        <div className={`btn-wrapper ${selectAll ? 'show-all' : 'hide-all'}`}>
            <span className="waves-effect waves-light btn-small"
                id="make-all-active-btn"
                onClick={() => updateAllTasks({ allComplete: false })}
            >Make All Active</span>
            <span className="waves-effect waves-light btn-small orange"
                id="make-all-complete-btn"
                onClick={() => updateAllTasks({ allComplete: true })}

            >Make All Complete</span>
        </div>

    </div>
}


const mapStateToProps = ({ tasks }) => {
    return {
        selectAll: tasks.selectAll
    };
};

export default connect(mapStateToProps, {
    toggleSelectAll,
    updateAllTasks,
})(SelectAll);