import React from 'react';
import { Link } from "@remix-run/react";
import classNames from 'classnames';

import Logo from "~/images/promin_ukr.svg";
import RightArrowIcon from "~/images/icons/right-arrow.svg";

type Props = any;

const Header = (props: Props) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(isOpen => !isOpen);
    };

    return (
        <header className="header d-flex align-items-start justify-content-between">
            <img
                className="logo"
                src={Logo}
                alt="light of respect"
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
                <Link className="navigation-link" to="#activity">Про нас</Link>
                <Link className="navigation-link" to="#requisites-tabs-container">Як допомогти?</Link>
                <Link className="navigation-link" to="#contacts">контакти</Link>
                <div className="navigation-link language-toggle d-flex align-items-center justify-content-end">
                    укр
                    <img
                        className="icon-arrow"
                        src={RightArrowIcon}
                        alt="arrow down"
                    />
                    <a
                        className="language-item-inner"
                        href="https://www.en.lightofrespect.org/"
                    >
                        ENG
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
