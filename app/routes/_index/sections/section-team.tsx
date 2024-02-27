import { useTranslation } from 'react-i18next';

import InstagramLogoIcon from '~/images/icons/instagram-logo-dark.svg';

export let handle = { i18n: "section-team" };

const SectionTeam = () => {
    const { t } = useTranslation('section-team');

    return (
        <>
            <section className="section-team">
                <div className="container">
                    <h4 className="title">{t('title')}</h4>
                </div>
                <div className="content-container container d-flex justify-content-start">
                    <div className="text-container d-flex flex-column align-items-end">
                        <h5 className="subject subject--width-limit">
                            {t('members.alina.subject')}
                        </h5>
                        <p
                            className="text"
                            dangerouslySetInnerHTML={{ __html: t('members.alina.text') }}
                        />
                    </div>
                </div>
                <div className="photo-container photo-container--right">
                    <img
                        src={t('members.alina.photo')}
                        className="photo"
                        alt={t('members.alina.name')}
                    />

                    <div className="description">
                        {t('members.alina.name')}, {t('members.alina.position')}
                    </div>
                    <div className="socials d-flex justify-content-center">
                        <a
                            className="socials-item"
                            href={t('members.alina.socials.instagram')}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={InstagramLogoIcon}
                                alt="instagram logo"
                            />
                        </a>
                    </div>
                </div>
            </section>
            <section className="section-team section-team__rtl">
                <div className="content-container container d-flex justify-content-end">
                    <div className="text-container d-flex flex-column align-items-end">
                        <p
                            className="text mt-5 mb-5"
                            dangerouslySetInnerHTML={{ __html: t('members.igor.text') }}
                        />
                    </div>
                </div>
                <div className="photo-container photo-container">
                    <img
                        src={t('members.igor.photo')}
                        className="photo"
                        alt={t('members.igor.name')}
                    />

                    <div className="description">
                        {t('members.igor.name')}, {t('members.igor.position')}
                    </div>
                    <div className="socials d-flex justify-content-center">
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionTeam;
