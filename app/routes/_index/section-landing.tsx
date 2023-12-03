import React from 'react';
import { Link } from "@remix-run/react";

import LogoTextlessBlue from "~/images/promin_textless-blue.svg";
import RightArrowIcon from "~/images/icons/right-arrow.svg";
import InstagramLogoIcon from "~/images/icons/instagram-logo-dark.svg";

import Header from "./header";


type Props = any;

const SectionLanding = (props: Props) => {
    return (
        <section className="section-landing">
            <div className="container">
                <Header />

                <div className="section-landing__content">
                    <div className="row-light d-flex align-items-center">
                        Промінь
                        <img
                            src={LogoTextlessBlue}
                            alt="Лого 'Промінь Поваги' без напису"
                        />
                    </div>
                    <div className="row-respect d-flex flex-wrap justify-content-end">
                        <div className="description order-1 order-xxl-0">
                            – спільнота небайдужих,
                            <br />
                            що допомагають людям
                        </div>
                        <div className="value order-0 order-xxl-1">Поваги</div>
                    </div>
                    <div className="row-control d-flex align-items-center justify-content-between">
                        <span className="interpretation">
                            <span className="star">*</span>
                                &nbsp;
                                благодійний фонд
                        </span>

                        <Link
                            className="donate-anchor d-flex align-items-center justify-content-between"
                            to="#requisites-tabs-container"
                        >
                            Зробити внесок
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
