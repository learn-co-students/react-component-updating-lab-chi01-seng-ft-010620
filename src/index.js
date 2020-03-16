import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './App.css';


ReactDOM.render(<App />, document.getElementById('root'));

                    //     index
                    //       |
                    //      app(states:updateInterval, timerIDs
                    //      /   \ //callbacks: )
                    //     /     \
// timer(updateIntervalSetting    \ 
// updateInterval,handleAddTimer)   //control(removeTimer,updateInterval,updateIntervalSettings,handleAddTimer)