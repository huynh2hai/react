import React from 'react';
import RepLogList from "./RepLogList";
import RepLogCreator from "./RepLogCreator";
import PropTypes from 'prop-types';

function calculateTotalWeightLifted(repLogs) {
    let total = 0;

    for (let repLog of repLogs) {
        total += repLog.totalWeightLifted;
    }

    return total;
}

export default function RepLogs(props) {
    const { withHeart, highlightedRowId, onRowClick, repLogs, onNewItemSubmit } = props;

    let heart = '';
    if (withHeart) {
        heart = <span>LOVE</span>;
    }

    return (
        <div className="col-md-7">
            <h2>
                Lift History {heart}
            </h2>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th>What</th>
                    <th>How many times?</th>
                    <th>Weight</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <RepLogList
                    highlightedRowId={highlightedRowId}
                    onRowClick={onRowClick}
                    repLogs={repLogs}
                />
                <tfoot>
                <tr>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>{calculateTotalWeightLifted(repLogs )}</th>
                    <th>&nbsp;</th>
                </tr>
                </tfoot>
            </table>

            <RepLogCreator
                onNewItemSubmit={onNewItemSubmit}
            />

        </div>
    );
}

RepLogs.propTypes = {
    withHeart: PropTypes.bool,
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired,
    onNewItemSubmit: PropTypes.func.isRequired,
    repLogs: PropTypes.array.isRequired,
};
