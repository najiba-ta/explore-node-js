import UsersList from "@/component/UsersList";
import { Suspense } from "react";

// const userPromise = fetch('').then (res => res.json());
const getUsers =  () =>{
    const res =  fetch('http://localhost:8000/users').then (res => res.json());
    return res;

}

const User2Page = () => {
    const usersPromise = getUsers();
    console.log(typeof usersPromise);
    return (
        <div>
            <h2>Users2: with suspense</h2>
            <Suspense fallback={<div>Loading...</div>}>
            <UsersList userPromise={usersPromise}></UsersList>
            </Suspense>
        </div>
    );
};

export default User2Page;