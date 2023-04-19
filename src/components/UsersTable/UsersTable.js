import {users} from "../../data/UserData";
import css from './UsersTable.module.css';


const UsersTable = () => {

    return (
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export {UsersTable};
