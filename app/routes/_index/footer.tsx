import React from 'react';
import {Link} from "@remix-run/react";

import ArrowRightIcon from '~/images/icons/right-arrow.svg';
import InstagramLogoDarkIcon from '~/images/icons/instagram-logo-dark.svg';
import Logo from '~/images/promin_ukr.svg';

type Props = any;

const Footer = (props: Props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top d-flex align-items-center justify-content-between">
                    <nav className="navigation d-flex flex-column">
                        <Link
                            className="navigation-link"
                            to="#requisites-tabs-container"
                        >
                            Як допомогти?
                        </Link>
                        <div className="navigation-link language-toggle d-flex align-items-center justify-content-end">
                            укр
                            <img 
                                className="icon-arrow" 
                                src={ArrowRightIcon}
                                alt="arrow"
                            />
                            <a
                                className="language-item-inner"
                                href="https://www.en.lightofrespect.org/"
                            >
                                ENG
                            </a>
                        </div>
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
                            src={Logo}
                            alt="light of respect"
                        />
                    </div>
                </div>
                <div className="footer-bottom d-flex align-items-center justify-content-between">
                    <span className="protected">Усі права захищені</span>
                    <span className="year">2023</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
