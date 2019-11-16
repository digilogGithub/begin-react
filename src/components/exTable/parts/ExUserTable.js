import React from 'react';

const TableColumn = React.memo(({users}) => {
    return <thead>
    <tr >
        {Object.keys(users[0]).filter(key => key !== 'active').map(key => (<td key={key}>{key.toUpperCase()}</td>))}
        <td>EDIT</td>
    </tr>
    </thead>
});

const TableContents = React.memo(({users, removeUser, toggleUserActive}) => {
    return <tbody>
    {
        users.map(user => (<tr key={user.id} style={{cursor: 'pointer', background: user.active ? 'lightgray' : 'transparent'}}>
            {Object.entries(user).map(([k,v]) => k !== 'active' && (<td key={v} onClick={() => toggleUserActive(user.id)}>{v}</td>))}
            <td><button style={{cursor: 'pointer'}} onClick={()=>removeUser(user.id)}>Remove</button></td>
        </tr>))
    }
    </tbody>
});

function ExUserTable({users, removeUser, toggleUserActive}) {
    return <table style={{border:'black solid 1px'}}>
        <TableColumn users={users}/>
        <TableContents users={users} removeUser={removeUser} toggleUserActive={toggleUserActive}/>
    </table>
}

export default React.memo(ExUserTable);
