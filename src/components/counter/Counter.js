import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state  -1;
        default:
            return state;
    }
}

const initialState = {

}

function Counter() {

    const [number, dispatch] = useReducer(reducer,0);

    const onIncrease = () => {
        dispatch({type: 'INCREMENT'});
    }
    const onDecrease = () => {
        dispatch({type: 'DECREMENT'});
    }

    return (<div>
            <br/>7. userState를 통한 컴포넌트에서 바뀌는 값 관리하기<br/>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default React.memo(Counter);
