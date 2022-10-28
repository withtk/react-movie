import React from "react";

const User = ({ user }) => {
    return (
        <span style={{ backgroundColor: '#7a7', padding: 4, margin: 4 }}>{user.name} / {user.age}</span>
    )
}

const UserList = ({ users }) => {
    return (
        <div>
            {
                users ?
                    users.map(user => <User user={user} />)
                    : <h3>no data</h3>
            }
        </div>
    )
}

export default UserList;

