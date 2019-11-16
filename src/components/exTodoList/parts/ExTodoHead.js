import React from "react";
import styled from "styled-components"
import {useMyTodoContext} from "../../../contextAPI/exTodoContext/ExTodoContextProvider";


const TodoHeadBlock = styled.div`
  margin: 18px 18px 6px 18px;
  box-sizing: border-box;
`;
const DayInfo = styled.h1`
  margin: 2px;
  padding: 0;
`;
const WeekDay = styled.div`
  font-size: 18px;
  font-style: oblique;
  color: #868e96;
  margin: 2px;
`;
const TasksLeft = styled.div`
  font-size: 21px;
  font-style: italic;
  color: #38d9a9;
  margin: 24px 0px 8px 0px;
  box-sizing: border-box;
`;


const date = new Date();

const dayInfo = date.toLocaleDateString(navigator.languages,{
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
const weekDay = date.toLocaleDateString(navigator.languages,{weekday:'long'})

function ExTodoHead() {

    const state = useMyTodoContext('state');
    const tasksLeftCount = state.filter(todo => !todo.done).length;
    return <TodoHeadBlock>
        <DayInfo>{dayInfo}</DayInfo>
        <WeekDay>{weekDay}</WeekDay>
        <TasksLeft>Tasks left count : {tasksLeftCount}</TasksLeft>
        <hr/>
    </TodoHeadBlock>
}

export default ExTodoHead;
