import React from "react";
import styled, {css} from "styled-components";
import {MdCheck, MdDelete} from "react-icons/md";
import {useMyTodoContext} from "../../../contextAPI/exTodoContext/ExTodoContextProvider";

const CircleCheck = styled.div`
  width: 32px;
  height: 32px;
  border: #dee2e6 solid 1px;
  border-radius: 16px;
  color :#dee2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 24px;
   ${props => props.done && css`
        border: #22b8cf solid 1px;
        color :#22b8cf;
      `
}
`;

const RemoveIcon = styled.div`
  font-size: 24px;
  color : #748ffc;
  display: none;
  &:hover {
    color: red;
  }
`;

const TodoText = styled.div`
  flex: 1;
  margin-left: 5px;
  font-size: 24px;
`;

const TodoItemBlock = styled.div`
  margin: 0;
  padding: 0;
  //flex: 1;
  display: flex;
  align-items: center;
  //background: aquamarine;
  //justify-content: center;
  & + & {
    margin-top: 10px;
  }
  
  &:hover {
        ${RemoveIcon} {
          display: initial;
        }     
  }
  
  
  box-sizing: border-box;
`;


function ExTodoItem({id, text, done}) {
    const dispatch = useMyTodoContext('dispatch');

    const toggleTodo = (id) => {
        dispatch({
            type: 'TOGGLE_TODO',
            id
        })
    };

    const removeTodo = (id) => {
        dispatch({
            type: 'REMOVE_TODO',
            id
        })
    }

    return <TodoItemBlock done={done}>
        <CircleCheck onClick={() => toggleTodo(id)} done={done}> {done && <MdCheck/>} </CircleCheck>
        <TodoText>{text}</TodoText>
        <RemoveIcon onClick={() => removeTodo(id)} done={done}><MdDelete/></RemoveIcon>
    </TodoItemBlock>
}

export default ExTodoItem;
