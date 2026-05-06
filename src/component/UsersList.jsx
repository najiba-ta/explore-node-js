import React, { use } from 'react';

const UsersList = ({userPromise}) => {
    const users = use(userPromise);
    return (
        <div>
            <h2>Users inside users list: {users.length}</h2>
        </div>
    );
};

export default UsersList;