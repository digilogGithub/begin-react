import React from 'react';

function ExUserCreate({name, email, setUserInfo, createUser}) {
    return <>
        <input name="name" placeholder="name" value={name} onChange={setUserInfo}/>
        <input name="email" placeholder="email" value={email} onChange={setUserInfo}/>
        <button onClick={createUser}>Register</button>
    </>
}

export default React.memo(ExUserCreate);
