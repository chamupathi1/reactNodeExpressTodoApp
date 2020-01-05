import React from 'react';
import './Footer.scss';
import { activeTaskCountSelector } from '../../selectors/taskSelector';
import { connect } from "react-redux";

const Footer = (props) => {
    let { activeTaskCount } = props;

    return <div className="Footer">Active Task Count : {activeTaskCount}</div>
}

const mapStateToProps = ({ tasks }) => {
    return {
        activeTaskCount: activeTaskCountSelector(tasks),
    };
};

export default connect(mapStateToProps, {})(Footer);
