import React from 'react';

const style = {
    border: '2px solid black',
    padding: '16px',
};
const ExWrapper = ({ children }) => <div style={style}>{ children }</div>

export default ExWrapper;
