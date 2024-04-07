import React, { useState } from "react";
function Users() {
    const [users, setUsers ] = useState ([
        
             {name: 'akshat', age:25},
             {name: 'kundan', age: 23}

        
    ])
    return(
        <div>
            <h2>Users</h2>
            <ul>
                {
                    Users.map((user,index) => {
                        return(<li>{user.name}.{user.age}</li>)
                    })
                }
            </ul>
        </div>
    )
}

export default Users;