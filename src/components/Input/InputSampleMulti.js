import React, {useState} from 'react'

function InputSampleMulti() {
    const [inputs, setInputs] = useState({
        name:'',
        nickName:''
    });

    const {name, nickName} = inputs;

    const onChange = (e) => {
        const { id, value } = e.target;
        console.log(inputs);
        setInputs({
            ...inputs,
            [id] : value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickName: '',
        });
    }

    return (
        <div>
            <br/>9. 여러개의 input 상태 관리하기<br/>
            <input id="name" placeholder="이름" onChange={onChange} value={name}/>
            <input id="nickName" placeholder="닉네임" onChange={onChange} value={nickName}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickName})
            </div>
        </div>
    );
}

export default React.memo(InputSampleMulti);
