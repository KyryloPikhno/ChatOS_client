import {NavLink} from "react-router-dom";

import css from './Header.module.css';


const Header = () => {

    return (
        <div className={css.header}>
            <div className={css.menu}>
                <NavLink to={'/prices'}>Prices</NavLink>
                <NavLink to={'/users-table'}>Users</NavLink>
            </div>
        </div>
    );
};

export {Header};
