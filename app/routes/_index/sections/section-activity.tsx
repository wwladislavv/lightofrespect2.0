import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

import ArrowRightIcon from '~/images/icons/right-arrow.svg';

export let handle = { i18n: "section-activity" };

const SectionActivity = () => {
    const { t } = useTranslation('section-activity');
    return (
        <section id="activity" className="section-activity">
            <div className="container">
                <div className="row">
                    <h4 className="title">{t('title')}</h4>
                </div>
                <div className="row mb-5">
                    {[
                        { value: t('items.1.value'), description: {
                            value: t('items.1.description.value'),
                            definition: t('items.1.description.definition'),
                        } }, 
                        { value: t('items.2.value'), description: {
                            value: t('items.2.description.value'),
                            definition: t('items.2.description.definition'),
                        } },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="col-lg-6"
                        >
                            <div className="number">{item.value}</div>
                            <div
                                className="description"
                                dangerouslySetInnerHTML={{ __html: item.description.value }}
                            />
                            <div
                                className="description"
                                dangerouslySetInnerHTML={{ __html: item.description.definition }}
                            />
                        </div>
                    ))}
                </div>
                <div className="row mb-5">
                    {[
                        { value: t('items.3.value'), description: { 
                            value: t('items.3.description.value'),
                            definition: t('items.3.description.definition'),
                        }},
                        { value: t('items.4.value'), description: { 
                            value: t('items.4.description.value'),
                            definition: t('items.4.description.definition'),
                        }},
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="col-lg-6"
                        >
                            <div className="number">{item.value}</div>
                            <div className="description">{item.description.value}</div>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-12">
                        <p
                            className="warning"
                            dangerouslySetInnerHTML={{ __html: t('warning') }}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="divider" />
                    </div>
                </div>

                <div className="row">
                    <div className="d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-between">
                        <div className="mb-5 mb-lg-0">
                            <div className="number">
                                {t('helpWithUs.title')}
                            </div>
                            <div className="description">
                                {t('helpWithUs.description')}
                            </div>
                        </div>
                        <Link
                            className="donate-anchor d-flex align-items-center justify-content-between"
                            to="#requisites-tabs-container"
                        >
                            {t('helpWithUs.requisitesAction')}
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
