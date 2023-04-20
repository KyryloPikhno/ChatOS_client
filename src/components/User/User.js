import {useDispatch} from "react-redux";
import {userActions} from "../../redux";
import {useState} from "react";

import css from './User.module.css';
import {UserAdderAndUpdater} from "../UserAdderAndUpdater/UserAdderAndUpdater";


const User = ({user, index}) => {
    const {name, email, age, _id} = user;

    const [activeButton, setActiveButton] = useState(false);

    const [active, setActive] = useState(false);

    const dispatch = useDispatch();

    const deleter = (id) => {
        try {
            dispatch(userActions.deleteById({userId: id}))
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <tr onMouseOver={() => setActiveButton(true)} onMouseOut={() => setActiveButton(false)}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{age}
                {activeButton && <button className={css.update} onClick={() => setActive(true)}>Update</button>}
                {activeButton && <button className={css.delete} onClick={() => deleter(_id)}>Delete</button>}
                {active && <UserAdderAndUpdater setActive={setActive} update={true} user={{...user}}/>}
            </td>
        </tr>
    );
};

export {User};
