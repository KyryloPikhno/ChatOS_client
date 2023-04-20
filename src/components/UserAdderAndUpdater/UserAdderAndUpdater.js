import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {userActions} from "../../redux";

import css from './UserAdderAndUpdater.module.css';


const UserAdderAndUpdater = ({setActive, update, userId}) => {
    const {handleSubmit, register, reset, formState: {errors, isValid}} = useForm({
        defaultValues: {"name": null, "email": null, "age": null},
        // resolver: joiResolver(newTableRowValidator),
        // mode: 'all'
    });

    console.log(userId)

    const dispatch = useDispatch();

    const submit = async (user) => {
        try {
            console.log(user);
            if (update && userId) {
                console.log('update');
                dispatch(userActions.update({userId: userId, user}));
            } else {
                console.log('create');
                dispatch(userActions.create({user}));
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
                <span onClick={() => setActive(false)} className={css.close}>&times;</span>
                <form onSubmit={handleSubmit(submit)} className={css.inputs_group}>
                    <h1>{update ? 'Update' : 'Create'}</h1>
                    <input type="text" placeholder={'name'} {...register('name')}/>
                    <input type="text" placeholder={'e-mail'} {...register('email')}/>
                    <input type="number" placeholder={'age'} {...register('age', {valueAsNumber: true})}/>

                    <button>{update ? 'Update' : 'Submit'}</button>
                </form>
            </div>
        </div>
    );
};

export {UserAdderAndUpdater};
