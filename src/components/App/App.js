import React from 'react';
import './App.css';
import SampleBrowser from '../SampleBrowser';
import ActionFooter from '../ActionFooter';

const App = (props) => (
    <div className="mcc">
        <header className="mcc-header">
            <h1>Header</h1>
        </header>
        <main className="mcc-body">
            <SampleBrowser/>
        </main>
        {false ? (<footer className="mcc-footer">
            <ActionFooter/>
        </footer>) : ''}
    </div>
);

export default App;