import React from 'react';

// function Hello(props) {
// function Hello({name, color}) {
//     // return <div style={{color: props.color}}>Hello! {props.name}</div>
//     return <div style={{color}}>Hello! {name}</div>
// }

const Hello = ({name, color, isSpecial}) =>
    // return <div style={{color: props.color}}>Hello! {props.name}</div>
    <div style={{color}}>{isSpecial && <b>*</b>} Hello! {name}</div>;

Hello.defaultProps ={
    name: '이름없음'
}

export default Hello;
