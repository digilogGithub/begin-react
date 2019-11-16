import React from 'react';

export default function ExCounter({state, onSetDiff, onIncrease, onDecrease}) {
    const {number, diff} = state;
    return <>
        <b>{number}</b>
        <br/>
        <input onChange={ (e) => onSetDiff(parseInt(e.target.value,10))} value={diff}/>
        <button onClick={onIncrease}>+{diff}</button>
        <button onClick={onDecrease}>-{diff}</button>
    </>
}
