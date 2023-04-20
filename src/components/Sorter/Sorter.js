import {useSearchParams} from "react-router-dom";

import css from './Sorter.module.css';


const Sorter = () => {
    const [query, setQuery] = useSearchParams();

    const handleSelectChange = e => {
        e.preventDefault();

        let obj = {};

        if (query.get('name')) {
            obj = {...obj, name: query.get('name')}
        }

        if (e.target.value) {
            obj = {...obj, sort: e.target.value}
        }

        setQuery(obj);
    }

    return (
            <select value={query.get('sort') || 'from new to old'} className={css.select} onChange={handleSelectChange}>
                <option value="asd">from new to old</option>
                <option value="desc">from old to new</option>
            </select>
    );
};

export {Sorter};
