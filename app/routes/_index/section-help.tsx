import React from 'react';

import LogoTextlessYellow  from '~/images/promin_textless-yellow.svg';
import PaypalLogoLight from '~/images/icons/paypal-logo-light.svg';
import ArrowRightIcon from '~/images/icons/right-arrow.svg';
import CopyIcon from '~/images/icons/copy.svg';

const copyToClipboard = (data: string) => {
    return navigator.clipboard.writeText(data);
};

type Props = any;

const SectionHelp = (props: Props) => {
    // var activeClassName = 'active';
    //
    // var requisitesTabsItems = document.querySelectorAll('.requisites-tabs__item');
    // var requisitesContentDataItems = document.querySelectorAll('.requisites-content__data');
    //
    // var requisitesTabsItemsClickHandler = (event) => {
    //     var nextActiveRequisitesContentDataItem = document.querySelector(`[data-requisites='${event.currentTarget.id}']`);
    //     var nextActiveRequisitesTabsItem = document.getElementById(event.currentTarget.id);
    //
    //     requisitesTabsItems.forEach((item) => {
    //         item.classList.remove(activeClassName);
    //     });
    //     requisitesContentDataItems.forEach((item) => {
    //         item.classList.remove(activeClassName);
    //     });
    //
    //     nextActiveRequisitesTabsItem.classList.add(activeClassName);
    //     nextActiveRequisitesContentDataItem.classList.toggle(activeClassName);
    // };
    //
    // requisitesTabsItems.forEach(
    //     (requisitesTabsItem) => {
    //         requisitesTabsItem.addEventListener(
    //             'click',
    //             requisitesTabsItemsClickHandler
    //         );
    //     }
    // );
    // const [activeTab, setActiveTab] = React.useState<string>('uah');
    // const handleTabClick = (tabName: string) => {
    //     setActiveTab(tabName);
    // }
    return (
        <section className="section-help">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h4 className="title">Чому ми потребуємо вашої допомоги?</h4>
                        <p className="description">
                            Променю Поваги дуже важко, є термінові запити, які не можна відкладати – фонду потрібне авто, щоб ефективніше та швидше доставляти гуманітарну допомогу мешканцям в місті Київ та на гарячих напрямках.
                            <br />
                            <br />
                            Тільки нещодавно ми надавали допомогу: літнім людям та інвалідам, дитячому реабілітаційному центру в Києві. Наразі надаємо гуманітарну допомогу тваринкам, Зброєним Силам України, переселенцям та людям, які залишились мешкати в зоні бойових дій. Наші ресурси поступово закінчуються і ми дуже потребуємо гуманітарної та фінансової підтримки.
                        </p>
                        <div className="numbers d-flex flex-wrap">
                            <div className="item">
                                <div className="number">10+</div>
                                <div className="specification">Запитів щодня</div>
                            </div>
                            <div className="item">
                                <div className="number">1000+</div>
                                <div className="specification">Отримали допомогу </div>
                            </div>
                            <div className="item">
                                <div className="number">26+</div>
                                <div className="specification">Категорій потреб</div>
                            </div>
                            <div className="item">
                                <div className="number">5000+</div>
                                <div className="specification">Середня сума чеку щодня</div>
                            </div>
                        </div>
                        <img
                            className="logo"
                            src={LogoTextlessYellow}
                            alt="Логотип"
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="requisites-tabs-container d-flex flex-wrap">
                            <div
                                id="uah"
                                className="requisites-tabs__item active d-flex align-items-center justify-content-between"
                            >
                                Рахунок в Гривнях
                                <img
                                    src={ArrowRightIcon}
                                    alt=""
                                />
                            </div>
                            <div
                                id="usd"
                                className="requisites-tabs__item d-flex align-items-center justify-content-between"
                            >
                                Рахунок в Долар
                                <img
                                    src={ArrowRightIcon}
                                    alt=""
                                />
                            </div>
                            <div
                                id="eur"
                                className="requisites-tabs__item d-flex align-items-center justify-content-between"
                            >
                                Рахунок в євро
                                <img
                                    src={ArrowRightIcon}
                                    alt=""
                                />
                            </div>
                            <div
                                id="crypto"
                                className="requisites-tabs__item d-flex align-items-center justify-content-between"
                            >
                                Крипто рахунок
                                <img
                                    src={ArrowRightIcon}
                                    alt=""
                                />
                            </div>
                            <div
                                id="paypal"
                                className="requisites-tabs__item info d-flex align-items-center justify-content-center w-100"
                            >
                                <img
                                    src={PaypalLogoLight}
                                    alt="Paypal"
                                />
                            </div>
                        </div>
                        <div className="requisites-content">
                            <div
                                className="requisites-content__data active"
                                data-requisites="uah"
                            >
                                <div className="requisites-content__title">
                                    Назва компанії:
                                </div>
                                <div className="requisites-content__value">
                                    БО 'БФ 'ПРОМІНЬ ПОВАГИ'
                                </div>

                                <div className="requisites-content__title">
                                    Адреса офісу:
                                </div>
                                <div className="requisites-content__value">
                                    Київ, вул. Суздальська, 13, поверх 2
                                </div>

                                <div className="requisites-content__title">
                                    IBAN Рахунок (Гривня):
                                </div>
                                <div className="requisites-content__value">
                                    UA07 305299 00000 26009016708022
                                    <a
                                        href="#"
                                        className="copy-trigger"
                                        onClick={() => copyToClipboard('UA07 305299 00000 26009016708022')}
                                    >
                                        <img
                                            src={CopyIcon}
                                            alt="Copy"
                                        />
                                    </a>
                                </div>

                                <div className="requisites-content__title">
                                    Назва банку:
                                </div>
                                <div className="requisites-content__value">
                                    "Приватбанк", вул. Грушевського, 1Д, Київ, 01001, Україна
                                </div>

                                <div className="requisites-content__title">
                                    Код отримувача:
                                </div>
                                <div className="requisites-content__value">
                                    44845258
                                </div>

                                <div className="requisites-content__title">
                                    Коментар до транзакції:
                                </div>
                                <div className="requisites-content__value">
                                    Благодійний внесок НА ГУМАНІТАРНУ ДОПОМОГУ
                                </div>
                            </div>
                            <div
                                className="requisites-content__data"
                                data-requisites="usd"
                            >
                                <div className="requisites-content__title">
                                    Company Name:
                                </div>
                                <div className="requisites-content__value">
                                    CF LIGHT OF RESPECT
                                </div>

                                <div className="requisites-content__title">
                                    Company Address:
                                </div>
                                <div className="requisites-content__value">
                                    13/2 Suzdalska STR. , KYIV,01001, UKRAINE
                                </div>

                                <div className="requisites-content__title">
                                    IBAN Code (US Dollar):
                                </div>
                                <div className="requisites-content__value">
                                    UA54 305299 00000 26001006708494
                                    <a
                                        href="#"
                                        className="copy-trigger"
                                        onClick={() => copyToClipboard('UA54 305299 00000 26001006708494')}
                                    >
                                        <img
                                            src={CopyIcon}
                                            alt="Copy"
                                        />
                                    </a>
                                </div>

                                <div className="requisites-content__title">
                                    Name of the bank:
                                </div>
                                <div className="requisites-content__value">
                                    JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
                                </div>

                                <div className="requisites-content__title">
                                    Bank SWIFT Code:
                                </div>
                                <div className="requisites-content__value">
                                    PBANUA2XXXX
                                </div>

                                <div className="requisites-content__title">
                                    Purpose of payment:
                                </div>
                                <div className="requisites-content__value">
                                    Charitable donation FOR HUMANITARIAN AID
                                </div>
                            </div>
                            <div
                                className="requisites-content__data"
                                data-requisites="eur"
                            >
                                <div className="requisites-content__title">
                                    Company Name:
                                </div>
                                <div className="requisites-content__value">
                                    CF LIGHT OF RESPECT
                                </div>

                                <div className="requisites-content__title">
                                    Company Address:
                                </div>
                                <div className="requisites-content__value">
                                    13/2 Suzdalska STR. , KYIV,01001, UKRAINE
                                </div>

                                <div className="requisites-content__title">
                                    IBAN Code (US Dollar):
                                </div>
                                <div className="requisites-content__value">
                                    UA87 305299 00000 26002026709751
                                    <a
                                        href="#"
                                        className="copy-trigger"
                                        onClick={() => copyToClipboard('UA87 305299 00000 26002026709751')}
                                    >
                                        <img
                                            src={CopyIcon}
                                            alt="Copy"
                                        />
                                    </a>
                                </div>

                                <div className="requisites-content__title">
                                    Name of the bank:
                                </div>
                                <div className="requisites-content__value">
                                    JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
                                </div>

                                <div className="requisites-content__title">
                                    Bank SWIFT Code:
                                </div>
                                <div className="requisites-content__value">
                                    PBANUA2X
                                </div>

                                <div className="requisites-content__title">
                                    Purpose of payment:
                                </div>
                                <div className="requisites-content__value">
                                    Charitable donation FOR HUMANITARIAN AID
                                </div>
                            </div>
                            <div
                                className="requisites-content__data"
                                data-requisites="eur"
                            >
                                <div className="requisites-content__title">
                                    Company Name:
                                </div>
                                <div className="requisites-content__value">
                                    CF LIGHT OF RESPECT
                                </div>

                                <div className="requisites-content__title">
                                    Company Address:
                                </div>
                                <div className="requisites-content__value">
                                    13/2 Suzdalska STR. , KYIV,01001, UKRAINE
                                </div>

                                <div className="requisites-content__title">
                                    IBAN Code (US Dollar):
                                </div>
                                <div className="requisites-content__value">
                                    UA87 305299 00000 26002026709751
                                    <a
                                        href="#"
                                        className="copy-trigger"
                                        onClick={() => copyToClipboard('UA87 305299 00000 26002026709751')}
                                    >
                                        <img
                                            src={CopyIcon}
                                            alt="Copy"
                                        />
                                    </a>
                                </div>

                                <div className="requisites-content__title">
                                    Name of the bank:
                                </div>
                                <div className="requisites-content__value">
                                    JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE
                                </div>

                                <div className="requisites-content__title">
                                    Bank SWIFT Code:
                                </div>
                                <div className="requisites-content__value">
                                    PBANUA2X
                                </div>

                                <div className="requisites-content__title">
                                    Purpose of payment:
                                </div>
                                <div className="requisites-content__value">
                                    Charitable donation FOR HUMANITARIAN AID
                                </div>
                            </div>
                            <div
                                className="requisites-content__data"
                                data-requisites="crypto"
                            >
                                <div className="requisites-content__title">
                                    BUSD Адреса для поповнення:
                                </div>
                                <div className="requisites-content__value">
                                    Oxaf6b75e85e54928986855ad53808 fa2c823c3fe
                                    <a
                                        href="#"
                                        className="copy-trigger"
                                        onClick={() => copyToClipboard('Oxaf6b75e85e54928986855ad53808 fa2c823c3fe')}
                                    >
                                        <img
                                            src={CopyIcon}
                                            alt="Copy"
                                        />
                                    </a>
                                </div>
                                <div className="requisites-content__title">
                                    Мережа
                                </div>
                                <div className="requisites-content__value">
                                    BNB Smart Chain (BEP20)
                                </div>

                                <br/>

                                <div className="requisites-content__title">
                                    ЕТН Адреса для поповнення:
                                </div>
                                <div className="requisites-content__value">
                                    Oxaf6b75e85e54928986855ad53808
                                    fa2c823c3fe
                                    <a
                                        href="#"
                                        className="copy-trigger"
                                        onClick={() => copyToClipboard('Oxaf6b75e85e54928986855ad53808 fa2c823c3fe')}
                                    >
                                        <img
                                            src={CopyIcon}
                                            alt="Copy"
                                        />
                                    </a>
                                </div>
                                <div className="requisites-content__title">
                                    Мережа
                                </div>
                                <div className="requisites-content__value">
                                    Ethereum (ERC20)
                                </div>

                                <br/>

                                <div className="requisites-content__title">
                                    USDT Адреса для поповнення:
                                </div>
                                <div className="requisites-content__value">
                                    TJyPKRH8fxtUdrf1K1NFZm9vd3z9V yHrOh
                                    <a
                                        href="#"
                                        className="copy-trigger"
                                        onClick={() => copyToClipboard('TJyPKRH8fxtUdrf1K1NFZm9vd3z9V yHrOh')}
                                    >
                                        <img
                                            src={CopyIcon}
                                            alt="Copy"
                                        />
                                    </a>
                                </div>
                                <div className="requisites-content__title">
                                    Мережа
                                </div>
                                <div className="requisites-content__value">
                                    Tron (TRC20)
                                </div>

                                <br/>

                                <div className="requisites-content__title">
                                    ВТС Адреса для поповнення:
                                </div>
                                <div className="requisites-content__value">
                                    Oxaf6b75e85e54928986855ad53808
                                    fa2c823c3fe
                                    <a
                                        href="#"
                                        className="copy-trigger"
                                        onClick={() => copyToClipboard('Oxaf6b75e85e54928986855ad53808 fa2c823c3fe')}
                                    >
                                        <img
                                            src={CopyIcon}
                                            alt="Copy"
                                        />
                                    </a>
                                </div>
                                <div className="requisites-content__title">
                                    Мережа
                                </div>
                                <div className="requisites-content__value">
                                    BNB Smart Chain (BEP20)
                                </div>
                            </div>
                            <div
                                className="requisites-content__data"
                                data-requisites="paypal"
                            >
                                <div className="requisites-content__value">
                                    mitinaalina1990@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionHelp;
