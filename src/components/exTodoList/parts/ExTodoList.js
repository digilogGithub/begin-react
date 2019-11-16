import React from "react";
import styled from "styled-components";
import ExTodoItem from "./ExTodoItem";
import {useMyTodoContext} from "../../../contextAPI/exTodoContext/ExTodoContextProvider";

const TodoListBlock = styled.div`
    flex: 1;
    margin: 0px 18px 0px 18px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
`;
function ExTodoList() {
    const state = useMyTodoContext('state');
    return <TodoListBlock>
        {state.map(todo => <ExTodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done}/>)}
    </TodoListBlock>
}

export default ExTodoList;
