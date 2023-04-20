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
            <select value={query.get('sort') || 'Ascending name'} className={css.select} onChange={handleSelectChange}>
                <option value="asd">Ascending name</option>
                <option value="desc">Descending name</option>
            </select>
    );
};

export {Sorter};
