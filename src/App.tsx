import React from 'react';
import { Table } from './layouts';
import './styles/App.scss';

const App = () => {
    return (
        <div className="App">
            <div className="logo-container">
                <div className="logo">
                    <h3>LO</h3>
                    <h3>GO</h3>
                </div>
            </div>
            <div className="container">
                <Table />
            </div>
        </div>
    );
};

export default App;
