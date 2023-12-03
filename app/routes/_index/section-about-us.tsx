import React from 'react';

import AboutUsImg from '~/images/photos/IMG_2683 1.png';
import Logo from '~/images/promin_ukr.svg';

type Props = any;

const SectionAboutUs = (props: Props) => {
    return (
        <section className="section-about-us">
            <div className="container">
                <div className="row">
                    <h4 className="title">Про нас</h4>
                </div>
            </div>
            <div className="photo-container">
                <img
                    src={AboutUsImg}
                    className="photo"
                    alt="Фото благодійного фонду «Промінь Поваги»"
                />
            </div>
            <div className="content-container container d-flex justify-content-end">
                <div className="text-container">
                    <img
                        src={Logo}
                        className="logo"
                        alt="Логотип благодійного фонду «Промінь Поваги»"
                    />
                    <h5 className="subject">
                        “ПРОМІНЬ ПОВАГИ”
                        <br />
                        Благодійни фонд
                    </h5>
                    <p className="text">
                        Неприбуткова благодійна організація, яка реалізує прості та зрозумілі проекти — допомагає пережити жахливі воєнні часи літнім людям, інвалідам, дитячим реабілітаційним центрам, тваринкам, малозабезпеченим сім’ям, переселенцям та жителям міст на Сході та Півдні країни, де йдуть бойові дії. Нашу допомогу насамперед отримають найбільш вразливі та водночас беззахисні верстви населення. Ми безкоштовно надаємо їм продукти харчування, ліки, одяг, засоби гігієни. Працюємо направлено, тобто надсилаємо або завозимо особисто необхідні речі за адресою.  Ми точно знаємо, що усі українці хочуть допомагати своїй країні та наближати перемогу. Ми також впевнені, що безліч людей в усьому світі готові підтримати Україну. А ми - знаємо, як це зробити. Наша мета - рятувати людські життя, але ми не можемо її досягнути без вашої допомоги.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SectionAboutUs;
