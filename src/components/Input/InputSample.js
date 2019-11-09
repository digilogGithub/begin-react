import React, {useReducer} from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_INPUT' :
            return state =action.value;
        case 'INPUT_CLEAR':
            return  state = '';
        default:
            return state;
    }
}
function InputSample() {
    const [text, dispatch] = useReducer(reducer,'');

    const onChange = (e) => {
        dispatch({
            type : 'CHANGE_INPUT',
            value : e.target.value
        });
    };

    const onReset = () => {
        dispatch( {type : 'INPUT_CLEAR'});
    }

    return (
        <div>
            <br/>8. input 상태 관리하기<br/>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text} </b>
            </div>
        </div>
    );
}

export default InputSample;
