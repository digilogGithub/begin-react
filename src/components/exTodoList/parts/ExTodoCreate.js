import React, {useState} from "react";
import styled, {css} from "styled-components";
import {MdAdd} from "react-icons/md"
import {useMyTodoContext} from "../../../contextAPI/exTodoContext/ExTodoContextProvider";

const CircleCheck = styled.button`
  height: 56px;
  width: 56px;
  font-size: 48px;
  background: #38d9a9;
  color: white;
  border: none;
  outline: none;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(0%, 50%);
  transition: 0.125s;
  
  ${props => props.state && css`
      background: #fa5252;
      transform: translate(0%, 50%) rotate(45deg);
      `
}
`;


const TodoInputForm = styled.form`
    background: #ced4da;
    border-radius: 0 0 16px 16px;
    flex: 1;
    display: flex;
    padding: 24px 18px;
    box-sizing: border-box;
    transform: translate(0, 50%);
    opacity: 0;
    transition: 0.25s;
    ${props => props.state && css`
        transform: translate(0, 0);
        opacity: 1;
    `}
`;

const TodoInput = styled.input`
    //height: 30px;
    width: 100%;
    border: none;
    font-size: 24px;
    margin-bottom: 48px;
`;
const TodoCreateBlock = styled.div`
  height: 120px;
  margin: 0px;
  //flex: 1;
  border-radius: 0 0 16px 16px;
  position: relative;
  display: flex;
  //align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;


function ExTodoCreate() {
    const [state, setState] = useState(false);
    const [text, setText] = useState('');
    const dispatch = useMyTodoContext('dispatch');
    const nextIdx = useMyTodoContext('nextIdx');

    const onClick = () => setState(!state);
    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE_TODO',
            todo: {
                id: nextIdx.current++,
                text: text,
                done: false
            }
        })
        setText('');
        onClick();
    }

    return <TodoCreateBlock>
        <TodoInputForm state={state} onSubmit={onSubmit}>
            <TodoInput onChange={onChange} value={text}/>
        </TodoInputForm>
        <CircleCheck state={state} onClick={onClick}><MdAdd/></CircleCheck>
    </TodoCreateBlock>
}

export default ExTodoCreate;
