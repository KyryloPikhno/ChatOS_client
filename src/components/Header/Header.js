import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {


    return (
        <div className={css.header}>
            <div className={css.menu}>
                <NavLink to={'/extensionPlans'}>Plans</NavLink>
                <NavLink to={'/ex'}>Prices</NavLink>
            </div>
        </div>
    );
};

export {Header};
