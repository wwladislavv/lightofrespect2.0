import React from 'react';
import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import classNames from 'classnames';
import {useTranslation} from "react-i18next";

import { LanguageControl } from '~/components';
import i18nextOptions from "~/i18nextOptions";

import styles from "./styles.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];

const Header = () => {
    const { t } = useTranslation(i18nextOptions.defaultNS);

    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(isOpen => !isOpen);
    };

    return (
        <div className="container">
            <header className="header d-flex align-items-start justify-content-between">
                <img
                    className="logo"
                    src={t('header.logo.src')}
                    alt={t('header.logo.alt')}
                />

                <div
                    className={classNames('navigation-trigger d-lg-none', {
                        active: isMenuOpen
                    })}
                    onClick={handleMenuToggle}
                >
                    <div className="navigation-trigger-line" />
                    <div className="navigation-trigger-line" />
                    <div className="navigation-trigger-line" />
                </div>
                <nav
                    className={classNames(
                        isMenuOpen ? 'd-flex' : 'd-none',
                        'navigation d-lg-flex flex-column'
                    )} >
                    <Link className="navigation-link" to="#activity">
                        {t('header.nav.about')}
                    </Link>
                    <Link className="navigation-link" to="#requisites-tabs-container">
                        {t('header.nav.help')}
                    </Link>
                    <Link className="navigation-link" to="#contacts">
                        {t('header.nav.contacts')}
                    </Link>

                    <LanguageControl />
                </nav>
            </header>
        </div>
    );
};

export default Header;
