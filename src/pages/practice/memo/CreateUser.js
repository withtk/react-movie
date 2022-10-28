import React from "react";

const CreateUser = ({username, email, onChange,onCreate}) => {
    return (
        <div>
            <h2>Create user</h2>
             <form>
                <input type="text" value={username} onChange={onChange} onCreate={onCreate} placeholder="set user name " />
                <input type="text" value={email} placeholder="set email" />
            </form>
        </div>
    )
}
export default CreateUser;