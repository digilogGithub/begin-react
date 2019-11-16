import React from 'react';

// function ExHello(props) {
// function ExHello({name, color}) {
//     // return <div style={{color: props.color}}>ExHello! {props.name}</div>
//     return <div style={{color}}>ExHello! {name}</div>
// }

const ExHello = ({name, color, isSpecial}) =>
    // return <div style={{color: props.color}}>ExHello! {props.name}</div>
    <div style={{color}}>{isSpecial && <b>*</b>} Hello! {name}</div>;

ExHello.defaultProps ={
    name: '이름없음'
}

export default ExHello;
