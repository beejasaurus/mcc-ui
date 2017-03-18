import React from 'react';
import './SampleStage.css';

const SampleStage = (props) => (
    <section className="mcc-sample-stage">
        {props.selected !== false ? (
            <div className="mcc-sample-info">
                <header className="mcc-sample-header">
                    <h2>{props.samples[props.selected].name}</h2>
                    <a href="#" className="mcc-sample-dismiss">&times;</a>
                </header>
                <main className="mcc-sample-body">
                    <span>Something about it</span>
                </main>
            </div>
        ) : <div className="mcc-sample-info mcc-no-sample"></div>}

    </section>
);

export default SampleStage;