// CateogoryNavBar

import React from 'react';
import './CateogoryNavBar.scss';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { STATUS } from '../../utils/constants';

const CateogoryNavBar = (props) => {
    let { location } = props;


    return <div className="CateogoryNavBar">
        <Link to={STATUS.ALL} id="nav-all">
            <div className={`category ${location.pathname === `/${STATUS.ALL}` && 'selected'}`}>ALL</div>
        </Link>
        <Link to={STATUS.ACTIVE} id="nav-active">
            <div className={`category ${location.pathname === `/${STATUS.ACTIVE}` && 'selected'}`}>ACTIVE</div>
        </Link>
        <Link to={STATUS.COMPLETED} id="nav-completed">
            <div className={`category ${location.pathname === `/${STATUS.COMPLETED}` && 'selected'}`}>COMPLETED</div>
        </Link>
    </div>
}


const mapStateToProps = ({ tasks }) => {
    return {
    };
};

export default connect(mapStateToProps, {
    // updateTaskStatus
})(CateogoryNavBar);