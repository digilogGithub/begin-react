import React, {useState} from 'react';

const TodoList = React.memo(function TodoList({todo, toggleTodo}) {
    return <li style={{cursor: 'pointer', textDecoration: todo.toggle && 'line-through'}} onClick={() => toggleTodo(todo.id)}>
        {todo.text}
    </li>
});

export default  React.memo(function Todo({state, onAddTodo, onToggleTodo}) {
    const [text, setText] = useState('');

    const onChange = (e) => setText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        onAddTodo(text);
        setText('');
    }

    return <>
        <form onSubmit={onSubmit}>
            <input onChange={(e) => onChange(e)} value={text}/>
            <button type="Submit">Add</button>
        </form>
        {state.map(todo => <TodoList key={todo.id} todo={todo} toggleTodo={onToggleTodo}/>)}
    </>
});

