import React from 'react';
import { Link } from '@remix-run/react';

import ArrowRightIcon from '~/images/icons/right-arrow.svg';

type Props = any;

const SectionActivity = (props: Props) => {
    return (
        <section id="activity" className="section-activity">
            <div className="container">
                <div className="row">
                    <h4 className="title">Наша діяльність</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-6">
                        <div className="number">500+</div>
                        <div className="description">
                            переселенцям і
                            <br />
                            мешканцям міст,
                            <br />
                            в яких проходять бойові дії
                        </div>
                        <div className="description">
                            *одежа, ковдри, взуття, ліки, їжа, гігієна
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="number">700+</div>
                        <div className="description">
                            Військовим ЗСУ та ТРО
                        </div>
                        <div className="description">
                            * амуніція, тактичні рукавички, форма,
                            <br/>
                            тепловізор, аптечки, турнікети,
                            <br/>
                            медичні препарати, перев'язувальний матеріал, їжа
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-6">
                        <div className="number">150+</div>
                        <div className="description">
                            людям у Києві
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="number">10+</div>
                        <div className="description">
                            притулкам для тварин
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <p className="warning">
                            Зараз ми допомагаємо лише <b>Збройним Силам України.</b> та людям з ВПО в місті Київ
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="divider"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between">
                        <div className="mb-5 mb-lg-0">
                            <div className="number">
                                Допомагай разом з нами
                            </div>
                            <div className="description">
                                * Нам важлива будь-яка сума
                            </div>
                        </div>
                        <Link
                            className="donate-anchor d-flex align-items-center justify-content-between"
                            to="#requisites-tabs-container"
                        >
                            Зробити внесок
                            <img
                                src={ArrowRightIcon}
                                alt="Arrow right icon"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionActivity;
