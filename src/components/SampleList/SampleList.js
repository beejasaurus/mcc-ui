import React from 'react';
import './SampleList.css';
import Sample from '../Sample';

const SampleList = (props) => {
    const samples = props.samples.filter(sample => props.cart.indexOf(sample.id) === -1);
    return (
        <section className="mcc-sample-list">
            <nav className="mcc-sample-list-container">
                {samples.length ? (
                    <ul>
                        {samples.map(sample => (
                            <Sample key={sample.id} {...sample}/>
                        ))}
                    </ul>
                ) : 'No Samples'}
            </nav>
        </section>
    );
}

export default SampleList;