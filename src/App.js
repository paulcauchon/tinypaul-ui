import React from 'react';
import './App.css';
import tinypaul from './tinypaul.png';

function App() {
    return (
        <div className="App">
            <div className="landing-container">
                <img src={tinypaul} alt="all we can ever imagine is nothing more than a beautiful pinwheel rising up in an empty desert for absolutely no reason" className="pinwheel-image" />
                <h1>tinypaul.io</h1>
            </div>
        </div>
    );
}

export default App;