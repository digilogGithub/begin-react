import React, {useMemo} from 'react';

const User = React.memo(({user, onRemove, onToggle}) => {
    return (
        <>
           <tr style={{ cursor: 'pointer', backgroundColor : user.active ? 'lightgray' : 'transparent'}}
               onClick={() => onToggle(user.id)}>
               <td >{user.id}</td>
               <td>{user.userName}</td>
               <td>{user.email}</td>
               <td>
                   <button onClick={()=>onRemove(user.id)}>Reset</button>
               </td>
           </tr>
        </>
    )
});

const UserList = ({users, onRemove, onToggle}) => {
    return (
        <table style={{border: '1px solid black', borderCollapse:'collapse'}}>
            <thead sytle={{backgroundColor:'lightgray'}}>
                <tr >
                    <td>ID</td>
                    <td>NAME</td>
                    <td>EMAIL</td>
                    <td>EDIT</td>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>))}
            </tbody>
        </table>
    )
}

export default React.memo(UserList);
