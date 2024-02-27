import { useTranslation } from 'react-i18next';

export let handle = { i18n: "section-history" };

const SectionHistory = () => {
    const { t } = useTranslation('section-history');
    return (
        <section className="section-history">
            <div className="section-history__bg d-flex flex-wrap">
                <div className="section-history__bg-overlay"></div>
                {[
                    { src: t('images.1.src'), alt: t('images.1.alt') },
                    { src: t('images.2.src'), alt: t('images.2.alt') },
                    { src: t('images.3.src'), alt: t('images.3.alt') },
                    { src: t('images.4.src'), alt: t('images.4.alt') },
                    { src: t('images.5.src'), alt: t('images.5.alt') },
                    { src: t('images.6.src'), alt: t('images.6.alt') },
                    { src: t('images.7.src'), alt: t('images.7.alt') },
                    { src: t('images.8.src'), alt: t('images.8.alt') },
                ].map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                    />
                ))}
            </div>
            <div className="section-history__content-container">
                <div className="container">
                    <div className="section-history__content-wrap">
                        <div className="section-history__content d-flex align-items-center justify-content-start justify-content-lg-between flex-wrap flex-lg-nowrap">
                            <div className="year">{t('year')} –</div>
                            <div
                                className="story"
                                dangerouslySetInnerHTML={{ __html: t('story') }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionHistory;
