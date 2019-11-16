import React, {useRef, useReducer, useContext, createContext} from 'react';
import todoList from '../../data/todoList.js';

const initialMyTodoState = todoList;

const myTodoReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            return state.concat(action.todo);
        case 'TOGGLE_TODO':
            console.log(action.id)
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error('Not Support : ', action.type);
    }
}

const MyTodoContextState = createContext();
const MyTodoContextDispatch = createContext();
const MyTodoContextNextIdx = createContext();

export default function ExTodoContextProvider({children}) {
    const [state, dispatch] = useReducer(myTodoReducer, initialMyTodoState);
    const myTodoNextIdx = useRef(5);

    return <MyTodoContextState.Provider value={state}>
        <MyTodoContextDispatch.Provider value={dispatch}>
            <MyTodoContextNextIdx.Provider value={myTodoNextIdx}>
                {children}
            </MyTodoContextNextIdx.Provider>
        </MyTodoContextDispatch.Provider>
    </MyTodoContextState.Provider>
}

const MyTodoState = () => useContext(MyTodoContextState);
const MyTodoDispatch = () => useContext(MyTodoContextDispatch);
const MyTodoNextIdx = () => useContext(MyTodoContextNextIdx);

export function useMyTodoContext(type) {
    switch(type) {
        case 'state':
            return MyTodoState();
        case 'dispatch':
            return MyTodoDispatch();
        case 'nextIdx':
            return MyTodoNextIdx();
        default:
            throw new Error('Not Support : ', type);
    }
}




