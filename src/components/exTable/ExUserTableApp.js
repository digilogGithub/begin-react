import React, {useRef, useReducer} from "react";
import MyUserCreate from "./parts/ExUserCreate";
import MyUserTable from "./parts/ExUserTable";
import userList from "../../data/userList.js"

const SET_USER_INFO = 'SET_USER_INFO';
const CREATE_USER = 'CREATE_USER';
const REMOVE_USER = 'REMOVE_USER';
const TOGGLE_USER_ACTIVE = 'TOGGLE_USER_ACTIVE';

const initialUserState = {
    user: {
        id: '',
        name: '',
        email: '',
        active: ''
    },
    users: userList
}

const userReducer = (state, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.name]: action.value,
                }
            };
        case CREATE_USER:
            return {
                user: initialUserState.user,
                users: state.users.concat(action.user)
            };
        case REMOVE_USER:
            return {
                user: state.user,
                users: state.users.filter(user => user.id !== action.id)
            };
        case TOGGLE_USER_ACTIVE:
            return {
                user: state.user,
                users: state.users.map(user => user.id === action.id ? {...user, active: !user.active} : user)
            }
        default:
            return new Error(`${action.type} is not supported`)
    }
}

function ExUserTableApp() {
    const [state, dispatch] = useReducer(userReducer, initialUserState);
    const nextIdx = useRef(4);
    const {user, users} = state;
    const {name, email} = user;

    const setUserInfo = (e) => {
        const {name, value} = e.target;
        dispatch({
            type: SET_USER_INFO,
            name,
            value
        })
    }

    const createUser = () => {
        dispatch({
            type: CREATE_USER,
            user: {
                id: nextIdx.current++,
                name,
                email,
                active: false,
            }
        })
    }

    const removeUser = (id) => {
        dispatch({
            type: REMOVE_USER,
            id
        })
    }

    const toggleUserActive = (id) => {
        dispatch({
            type: TOGGLE_USER_ACTIVE,
            id
        })
    }

    const activeUserCount = users.filter(user => user.active).length
    return users.length ?
        <>
            <MyUserCreate name={name} email={email} setUserInfo={setUserInfo} createUser={createUser}/>
            <br/>
            <br/>
            < MyUserTable users={users} toggleUserActive={toggleUserActive} removeUser={removeUser}/>
            <br/>
            <b>Total Active User Count : {activeUserCount}</b>
        </>
        :  <>
            <MyUserCreate name={name} email={email} setUserInfo={setUserInfo} createUser={createUser}/>
            <br/>
            <br/>
            <b>There is no user</b>
        </>
}

export default React.memo(ExUserTableApp);
