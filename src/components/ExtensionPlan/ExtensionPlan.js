import css from './ExtensionPlan.module.css';


const ExtensionPlan = () => {

    return (
        <div className={css.w_md_250px}>
        <div className={`${css.card} ${css.my_3}`}>
            <div className={css.card_body}>

                <div className={css.text_center}>
                    <h5>Free</h5>
                    <div className={css.mt_4}>
                        <span className={`${css.h3} ${css.m_0} ${css.text_primary}`}>$</span>
                        <span className={`${css.display_2} ${css.text_primary}`}>5</span>
                        <span>/mo</span>
                    </div>
                </div>

                <ul className={`${css.list_group} ${css.list_group_borderless} ${css.mt_4}`}>
                    <li className={css.list_group_item}>
                        <i className={`${css.demo_pli_yes} ${css.fs_5} ${css.me_2} ${css.text_success}`}></i>
                        Word Definitions
                    </li>
                    <li className={css.list_group_item}>
                        <i className={`${css.demo_pli_yes} ${css.fs_5} ${css.me_2} ${css.text_success}`}></i>
                        Up to 10 Lists
                    </li>
                </ul>

                <div className={`${css.d_grid} ${css.mt_4}`}>
                    <button className={`${css.btn} ${css.btn_outline_primary}`}><a
                        href="https://boostvocab.com/register">Sign
                        up today</a></button>
                </div>

            </div>
        </div>
    </div>
    );
};

export {ExtensionPlan};
