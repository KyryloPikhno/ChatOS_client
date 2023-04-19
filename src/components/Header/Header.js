import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {


    return (
        <div className={css.header}>
            <div className={css.menu}>
                <NavLink to={'/extension-plans'}>Plans</NavLink>
                <NavLink to={'/users-table'}>Users</NavLink>
            </div>
        </div>
    );
};

export {Header};
