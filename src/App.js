import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ExWrapper from "./components/wrapper/ExWrapper";
import ExHello from "./components/wrapper/ExHello";
import ExCounter from "./components/counter/ExCounter";
import ExInputSample from "./components/Input/ExInputSample";
import ExInputSampleMulti from "./components/Input/ExInputSampleMulti";
import ExUserTableApp from "./components/exTable/ExUserTableApp";
import ExCounterContainer from "./components/redux/exCounter/ExCounterContainer";
import ExTodoContainer from "./components/redux/exTodo/ExTodoContainer";
import ExTodoApp from "./components/exTodoList/ExTodoApp";


function App() {
    const exName = 'SIA';
    const name = 'i love you daddy because of your the best'
    const exStyle = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    }

    const style = {
        background: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem',
    }
    return (
        <div className="App">
            <div className="part-a">
                <ExWrapper>
                    <ExHello name="sia" color="red" isSpecial/>
                    <ExHello color="pink"/>
                    <div style={exStyle}>{exName}</div>
                    <div className="gray-box"></div>
                </ExWrapper>
                <ExCounter/>
                <hr/>
                <ExInputSample/>
                <hr/>
                <ExInputSampleMulti/>
                <hr/>
                <br/>
                <ExUserTableApp/>
            </div>
            <div className="part-b">

            </div>
            {/*<ExCounterContainer/>*/}
            {/*<hr/>*/}
            {/*<ExTodoContainer/>*/}
            {/*<ExTodoApp/>*/}
        </div>
    );
}

export default App;
