import React from 'react';
import './SampleBrowser.css';
import SampleList from '../SampleList';
import SampleStage from '../SampleStage';
import SampleCart from '../SampleCart';

const SampleBrowser = (props) => (
    <div className="mcc-sample-browser mcc-grid-row">
        <div className="mcc-grid-one">
            <SampleList/>
        </div>
        <div className="mcc-grid-four">
            <SampleStage/>
        </div>
        <div className="mcc-grid-one">
            <SampleCart/>
        </div>
    </div>
);

export default SampleBrowser;
