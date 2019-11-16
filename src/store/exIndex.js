import {combineReducers} from 'redux';
import counterRedux from "./exCounter/exCounterRedux";
import exTodoRedux from "./exTodo/exTodoRedux";

const rootRedux = combineReducers({
    counterRedux,
    todoRedux: exTodoRedux
});

export default rootRedux;
