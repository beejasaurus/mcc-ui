import React from 'react';
import './Sample.css';

const Sample = (props) => {
    return props.connectDragSource(
        <li className="mcc-sample-list-item">
            <span className="mcc-sample-name" onClick={props.onSelect} data-value={props.id}>{props.name}</span>
            <button className="mcc-link mcc-list-button" value={props.id} onClick={props.onAdd}>
                +
            </button>
        </li>
    );
};

export default Sample;
