import {joiResolver} from "@hookform/resolvers/joi/dist/joi";
import {useForm} from "react-hook-form";
import {useSearchParams} from "react-router-dom";

import {nameValidator} from "../../validators";
import css from './SearchForm.module.css';


const SearchForm = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {"name": null},
        resolver: joiResolver(nameValidator),
        mode: 'onChange'
    });

    const [query, setQuery] = useSearchParams();

    const submit = async ({name}) => {
        try {
            let findObj = {};

            if (name) {
                findObj = {...findObj, name}
            }

            if (query.get('sort')) {
                findObj = {...findObj, sort:query.get('sort')}
            }

            setQuery(findObj);

        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'search by name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <button className={!isValid ? css.noValidButton : css.validButton} disabled={!isValid}>Search</button>
        </form>
    );
};

export {SearchForm};
