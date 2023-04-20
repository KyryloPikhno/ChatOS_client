import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {UserAdderAndUpdater} from "../UserAdderAndUpdater/UserAdderAndUpdater";
import {userActions} from "../../redux";
import {SearchForm} from "../SearchForm/SearchForm";
import {Sorter} from "../Sorter/Sorter";
import {User} from "../User/User";
import css from './UsersTable.module.css';


const UsersTable = () => {
    const {users, error, loading} = useSelector(state => state.userReducer);

    const [active, setActive] = useState(false);

    let [query] = useSearchParams({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll({
            name: query.get('name'),
            sort: query.get('sort'),
        }));
    }, [dispatch, query]);

    return (
        <div>
            {error ?
                <h1>{error}</h1>
                :
                <div>
                    {loading ?
                        <div className={css.loaderBox}>
                            <div className={css.loader}></div>
                        </div>
                        :
                        <div>
                            <div className={css.sorters}>
                                <SearchForm/>
                                <Sorter/>
                            </div>
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
                                {users.map((user, index) => (<User key={user._id} user={user} index={index}/>))}
                                </tbody>
                            </table>
                            {active && <UserAdderAndUpdater setActive={setActive}/>}
                            {!active &&
                                <div className={css.box}>
                                    <button onClick={() => setActive(true)}>Add user</button>
                                </div>}
                        </div>}
                </div>}
        </div>
    );
};

export {UsersTable};
