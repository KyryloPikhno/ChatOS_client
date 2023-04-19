import {ExtensionPlan} from "../ExtensionPlan/ExtensionPlan";
import css from './ExtensionPlans.module.css';


const ExtensionPlans = () => {

    return (
        <div className={css.content__boxed}>
            <div className={css.content__wrap}>
                <h2 className={`${css.h1} ${css.text_center} ${css.mt_5} ${css.mb_4}`}>
                    Google Chrome Extension Plans
                </h2>
                <div className={`${css.d_md_flex} ${css.justify_content_center}`}>
                    <ExtensionPlan/>
                    <ExtensionPlan/>
                    <ExtensionPlan/>
                    <ExtensionPlan/>
                </div>
            </div>
        </div>
    );
};

export {ExtensionPlans};
