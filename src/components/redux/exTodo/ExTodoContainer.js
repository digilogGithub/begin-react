import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Todo from "./ExTodo";
import {addTodo, toggleTodo} from "../../../store/exTodo/exTodoRedux";



export default function ExTodoContainer() {
    const state = useSelector(state => state.todoRedux);
    const dispatch = useDispatch();

    const onAddTodo = (text) => dispatch(addTodo(text));
    const onToggleTodo = (id) => dispatch(toggleTodo(id));

    return <Todo state={state} onAddTodo={onAddTodo} onToggleTodo={onToggleTodo}/>
}
