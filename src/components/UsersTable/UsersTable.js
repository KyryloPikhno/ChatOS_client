import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {userActions} from "../../redux";
import {UserAdderAndUpdater} from "../UserAdderAndUpdater/UserAdderAndUpdater";
import {User} from "../User/User";
import css from './UsersTable.module.css';


const UsersTable = () => {
    const {users, error, loading} = useSelector(state => state.userReducer);

    const [active, setActive] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, [dispatch]);

    return (
        <div>
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
            {
                active && <UserAdderAndUpdater setActive={setActive}/>
            }
            {
                !active && <div className={css.box}>
                    <button onClick={() => setActive(true)}>Add user</button>
                </div>
            }
        </div>
    );
};

export {UsersTable};
