import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';

interface User {
    userId: String;
    firstName: String;
    middleName: String;
    lastName: String;
    username: String;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('http://localhost:8080/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        
        fetchUsers();
    }, []);

    return (
        <>
            <h1 className="mb-5">Users</h1>
            <div className="m-auto w-70 align-items-center d-flex flex-wrap gap-3 m-3">
                {
                    users.map(user => (
                        <div key={user.userId}>
                            <User id={user.userId} firstName={user.firstName} middleName={user.middleName} lastName={user.lastName} username={user.username} />
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default UserList;