import React from 'react';

const CreateUser = ({userName, email, onChange, onCreate}) => {
    return(
        <>
            <input name="userName" placeholder="name" onChange={onChange} value={userName}/>
            <input name="email" placeholder="email" onChange={onChange} value={email}/>
            <button onClick={onCreate}>Register</button>
        </>
    )
}

export default React.memo(CreateUser);
