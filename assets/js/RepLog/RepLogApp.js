import React, {Component} from "react";
import RepLogs from './RepLogs';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

export default class RepLogApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightedRowId: null,
            repLogs: [
                {id: uuid(), reps: 25, itemLabel: 'My Laptop', totalWeightLifted: 122},
                {id: uuid(), reps: 10, itemLabel: 'Big Fat Cat', totalWeightLifted: 128},
                {id: uuid(), reps: 4, itemLabel: 'Big Fat Cat', totalWeightLifted: 72},
            ]
        };
        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleNewItemSubmit = this.handleNewItemSubmit.bind(this);
    }

    handleRowClick(repLogId) {
        this.setState({highlightedRowId: repLogId});
    }

    handleNewItemSubmit(itemLabel, reps) {
        const repLogs = this.state.repLogs;
        const newRep = {
            id: uuid(),
            reps: reps,
            itemLabel: itemLabel,
            totalWeightLifted: Math.floor(Math.random() * 50)
        };
        repLogs.push(newRep);
        this.setState({repLogs: repLogs});
    }

    render() {
        return <RepLogs
            {...this.props}
            {...this.state}
            onRowClick={this.handleRowClick}
            onNewItemSubmit={this.handleNewItemSubmit}
        />
    }
}

RepLogApp.propTypes = {
    withHeart: PropTypes.bool
}

