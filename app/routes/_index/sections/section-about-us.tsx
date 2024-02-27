import { useTranslation } from 'react-i18next';

import AboutUsImg from '../../../../public/assets/photos/IMG_2683 1.png';

export let handle = { i18n: "section-about-us" };

const SectionAboutUs = () => {
    const { t } = useTranslation('section-about-us');

    return (
        <section className="section-about-us">
            <div className="container">
                <div className="row">
                    <h4 className="title">{t('title')}</h4>
                </div>
            </div>
            <div className="photo-container">
                <img
                    src={AboutUsImg}
                    className="photo"
                    alt=""
                />
            </div>
            <div className="content-container container d-flex justify-content-end">
                <div className="text-container">
                    <img
                        src={t('logo')}
                        className="logo"
                        alt=""
                    />
                    <h5
                        className="subject"
                        dangerouslySetInnerHTML={{ __html: t('subject') }}
                    />
                    <p className="text">
                        {t('text')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SectionAboutUs;
