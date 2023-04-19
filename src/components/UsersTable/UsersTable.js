import {useDispatch, useSelector} from "react-redux";
import {User} from "../User/User";
import {useEffect} from "react";

import {userActions} from "../../redux";
import css from './UsersTable.module.css';


const UsersTable = () => {
    const {users, error, loading} = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

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
            {
                users.map((user, index) => (<User key={user._id} user={user} index={index}/>))
            }
            </tbody>
        </table>
    );
};

export {UsersTable};
