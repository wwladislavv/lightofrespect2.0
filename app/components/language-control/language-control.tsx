'use-client';

import { useTranslation } from "react-i18next";

import RightArrowIcon from "~/images/icons/right-arrow.svg";


// type Props = {
// };

const LanguageControl = () => {
    const { i18n } = useTranslation();
    const { language: locale } = i18n;
    const activeLanguage = locale === 'uk' ? 'УКР' : 'ENG';

    return (
        <div className="navigation-link language-toggle d-flex align-items-center justify-content-end">
            {activeLanguage}
            <img
                className="icon-arrow"
                src={RightArrowIcon}
                alt="arrow down"
            />
            <a
                className="language-item-inner"
                href="https://www.en.lightofrespect.org/"
                onClick={(e) => {
                    e.preventDefault();
                    i18n.changeLanguage(locale === 'uk' ? 'en' : 'uk');
                }}
            >
                {locale === 'uk' ? 'ENG' : 'УКР'}
            </a>
        </div>
    );
};

export default LanguageControl;
