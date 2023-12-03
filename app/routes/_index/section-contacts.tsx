import React from 'react';

type Props = any;

const SectionContacts = (props: Props) => {
    return (
        <section id="contacts" className="section-contacts">
            <div className="container">
                <h4 className="title">Контакти</h4>
                <div className="d-flex justify-content-between">
                    <a
                        className="email"
                        href="mailto:lightofrespect@gmail.com"
                    >
                        lightofrespect@gmail.com
                    </a>
                    <a
                        className="phone"
                        href="tel:+380736116066"
                    >
                        +380736116066
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SectionContacts;
