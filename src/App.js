import React, {useState, useRef, useMemo, useCallback} from 'react';
// import logo from './logo.svg';
import './App.css';

import userList from './data/sampleData';

import Hello from './components/wrapper/Hello'
import Wrapper from './components/wrapper/Wrapper'
import Counter from './components/counter/Counter'
import InputSample from './components/Input/InputSample'
import InputSampleMulti from './components/Input/InputSampleMulti'
import UserList from './components/table/UserList'
import CreateUser from './components/table/CreateUser'
// import UserListTable from './components/myTable/UserListTable'




function App() {
    const name = 'SIA'
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    }

    const nextId = useRef(4);
    const [users, setUsers] = useState(userList);
    const [user, setUser] = useState({
        userName: '',
        email: ''
    });

    const {userName, email} = user;


    const onChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const onCreate = () => {
        const user = {
            id:nextId.current,
            userName: userName,
            email: email,
            active: false
        };
        setUsers(
            [...users, user]
        );

        setUser({
            userName: '',
            email: ''
        });
        nextId.current++;
    };

    const onRemove = (id) => {
        setUsers(
            users.filter(user => user.id !== id)
        )
    };

    const onToggle = (id) => {
        setUsers(
            users.map(user => user.id === id ? {...user,  active : !user.active } : user)
        );
    }

    const countActiveUsers = useMemo(() => {
        console.log('active');
        return users.filter(user => user.active).length}
    ,[users]);

    // const countActiveUsers = () => {
    //         console.log('active');
    //         return users.filter(user => user.active).length} ;
    return (
        <div className="App">
            <div className="part-a">
                <Wrapper>
                    <Hello name="sia" color="red" isSpecial/>
                    <Hello color="pink"/>
                    <div style={style}>{name}</div>
                    <div className="gray-box"></div>
                </Wrapper>
                <Counter/>
                <hr/>
                <InputSample/>
                <hr/>
                <InputSampleMulti/>
                <hr/>
                <br/>
                <CreateUser userName={userName} email={email} onChange={onChange} onCreate={onCreate} />
                <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
                <br/>
                <b>Total Active User Count : {countActiveUsers}</b>
            </div>
            <div className="part-b">
              
            </div>
        </div>
    );
}

export default App;
