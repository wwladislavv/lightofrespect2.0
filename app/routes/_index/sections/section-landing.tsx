import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";

import LogoTextlessBlue from "~/images/promin_textless-blue.svg";
import RightArrowIcon from "~/images/icons/right-arrow.svg";
import InstagramLogoIcon from "~/images/icons/instagram-logo-dark.svg";

export let handle = { i18n: "section-landing" };

const SectionLanding = () => {
    const { t } = useTranslation('section-landing');

    return (
        <section className="section-landing">
            <div className="container">
                <div className="section-landing__content">
                    <div className="row-light d-flex align-items-center">
                        {t('light')}
                        <img
                            src={LogoTextlessBlue}
                            alt=""
                        />
                    </div>
                    <div className="row-respect d-flex flex-wrap justify-content-end">
                        <div
                            className="description order-1 order-xxl-0"
                            dangerouslySetInnerHTML={{ __html: t('description') }}
                        />
                        <div className="value order-0 order-xxl-1">
                            {t('respect')}
                        </div>
                    </div>
                    <div className="row-control d-flex align-items-center justify-content-between">
                        <span className="interpretation">
                            <span className="star">*</span>
                            &nbsp;
                            {t('interpretation')}
                        </span>

                        <Link
                            className="donate-anchor d-flex align-items-center justify-content-between"
                            to="#requisites-tabs-container"
                        >
                            {t('requisitesAction')}
                            <img
                                src={RightArrowIcon}
                                alt="arrow right"
                            />
                        </Link>
                    </div>

                    <div className="socials d-flex flex-column align-items-end">
                        <a
                            className="socials-item"
                            href="https://www.instagram.com/light_of_respect/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={InstagramLogoIcon}
                                alt="instagram"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionLanding;
