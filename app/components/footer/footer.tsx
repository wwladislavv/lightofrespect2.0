import React from 'react';
import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import {useTranslation} from "react-i18next";

import InstagramLogoDarkIcon from "~/images/icons/instagram-logo-dark.svg";

import i18nextOptions from "~/i18nextOptions";
import { LanguageControl } from "~/components";

import styles from "./styles.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];

const Footer = () => {
    const { t  } = useTranslation(i18nextOptions.defaultNS);
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top d-flex align-items-center justify-content-between">
                    <nav className="navigation d-flex flex-column">
                        <Link
                            className="navigation-link"
                            to="#requisites-tabs-container"
                        >
                            {t('footer.help')}
                        </Link>

                        <LanguageControl />
                    </nav>
                    <div className="socials d-flex flex-column flex-lg-row align-items-center">
                        <a
                            className="socials-item"
                            href="https://www.instagram.com/light_of_respect/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={InstagramLogoDarkIcon}
                                alt="instagram"
                            />
                        </a>
                        <img
                            className="logo d-none d-lg-block"
                            src={t('footer.logo')}
                            alt="light of respect"
                        />
                    </div>
                </div>
                <div className="footer-bottom d-flex align-items-center justify-content-between">
                    <span className="protected">{t('footer.rights')}</span>
                    <span className="year">2023</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
