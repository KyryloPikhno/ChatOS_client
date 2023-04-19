import css from './ExtensionPlan.module.css';


const ExtensionPlan = ({plan}) => {
    const {period, price, interval, opportunities, popular} = plan;

    return (
        <div className={css.w_md_250px}>
            <div className={`${css.card} ${css.my_3}`}>
                <div className={css.card_body}>
                    {popular && <div className={css.ribbon}></div>}
                    <div className={css.text_center}>
                        <h5>{period}</h5>
                        <div className={css.mt_4}>
                            <span className={`${css.h3} ${css.m_0} ${css.text_primary}`}>$</span>
                            <span className={`${css.display_2} ${css.text_primary}`}>{price}</span>
                            {price.length >= 5 && <br/>}
                            <span>/{interval}</span>
                        </div>
                    </div>
                    <ul className={`${css.list_group} ${css.list_group_borderless} ${css.mt_4}`}>
                        {opportunities.length !== 0 && opportunities.map((opportunity, index) => (
                            <li key={index} className={css.list_group_item}>
                                <i className={`${css.demo_pli_yes} ${css.fs_5} ${css.me_2} ${css.text_success}`}>✓</i>
                                {opportunity}
                            </li>
                        ))}
                    </ul>
                    <div className={`${css.d_grid} ${css.mt_4}`}>
                        <button className={`${css.btn} ${css.btn_outline_primary}`}>
                            <a href="https://boostvocab.com/register">Sign up today</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export {ExtensionPlan};
