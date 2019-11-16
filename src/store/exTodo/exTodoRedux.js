const ADD_TODO = 'counter/ADD_TODO';
const TOGGLE_TODO = 'counter/TOGGLE_TODO';

const initialTodoState = [];

let idx = 0;
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: idx++,
        text,
        toggle: false
    }
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

export default function exTodoRedux(state = initialTodoState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? {...todo, toggle: !todo.toggle} : todo);
        default:
            return state;
    }
}
