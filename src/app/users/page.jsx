

const UsersPage = async() => {
    const res = await fetch ('http://localhost:8000/users');
    const users = await res.json();

    console.log(users);
    return (
        <div>
            <h2>Users:{users.length} </h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    users.map(user => <div key={user.id} className="border border-pink-800">
                       <h2>
                        {user.name}
                       </h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;