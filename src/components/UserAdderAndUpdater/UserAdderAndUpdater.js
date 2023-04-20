import {joiResolver} from "@hookform/resolvers/joi/dist/joi";
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";
import {useForm} from "react-hook-form";

import {userValidator} from "../../validators";
import css from './UserAdderAndUpdater.module.css';
import {useEffect} from "react";


const UserAdderAndUpdater = ({setActive, update, user}) => {
    const {handleSubmit, register, reset, setValue, formState: {errors, isValid}} = useForm({
        defaultValues: {"name": null, "email": null, "age": null},
        resolver: joiResolver(userValidator),
        mode: 'onChange'
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (update && user?._id) {
            setValue("name", user?.name);
            setValue("email", user?.email);
            setValue("age", user?.age);
        }
    }, [update, user]);

    const submit = (newUser) => {
        try {
            if (update && user?._id) {
                console.log('update');
                dispatch(userActions.update({userId: user?._id, user: newUser}));
            } else {
                console.log('create');
                dispatch(userActions.create({user: newUser}));
            }
        } catch (e) {
            console.error('Error', e);
        }
        reset();

        setActive(false);
    };

    return (
        <div className={css.modal}>
            <div className={css.modal_content}>
                <div onClick={() => setActive(false)} className={css.close}>&times;</div>
                <form onSubmit={handleSubmit(submit)} className={css.inputs_group}>
                    <h1>{update ? 'Update' : 'Create'}</h1>
                    <input type="text" autoFocus placeholder={'name'} {...register('name')}/>
                    {errors.name && <span>{errors.name.message}</span>}

                    <input type="text" placeholder={'e-mail'} {...register('email')}/>
                    {errors.email && <span>{errors.email.message}</span>}

                    <input type="number" placeholder={'age'} {...register('age', {valueAsNumber: true})}/>
                    {errors.age && <span>{errors.age.message}</span>}

                    <button className={isValid? css.button : css.disabledButton} disabled={!isValid}>{update ? 'Update' : 'Submit'}</button>
                </form>
            </div>
        </div>
    );
};

export {UserAdderAndUpdater};
