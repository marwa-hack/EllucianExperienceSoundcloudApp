import React from 'react';
import ReactDOM from 'react-dom';
import { EDSApplication, Typography } from '../node_modules/@ellucian/react-design-system/core';
import Card from './Card.js';

const App = () => (
    <div>
        <EDSApplication>
            <Typography>
              Hello! Here are all my cards.
              <Card />
              
            </Typography>
        </EDSApplication>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));