import { useTranslation } from 'react-i18next';

import Description from "./description";
import RequisitesTabs from "./requisites-tabs";

export let handle = { i18n: "section-help" };

const SectionHelp = () => {
    const { t } = useTranslation('section-help');

    return (
        <section className="section-help">
            <div className="container">
                <div className="row">
                    <Description
                        title={t('title')}
                        description={t('description')}
                        numbers={{
                            requestsPerDay: {
                                value: t('numbers.requestsPerDay.value'),
                                spec: t('numbers.requestsPerDay.specification')
                            },
                            gotHelped: {
                                value: t('numbers.gotHelped.value'),
                                spec: t('numbers.gotHelped.specification')
                            },
                            categoriesOfNeeds: {
                                value: t('numbers.categoriesOfNeeds.value'),
                                spec: t('numbers.categoriesOfNeeds.specification')
                            },
                            checkDaily: {
                                value: t('numbers.checkDaily.value'),
                                spec: t('numbers.checkDaily.specification')
                            }
                        }}
                    />
                    <RequisitesTabs
                        requisites={{
                            uah: {
                                tab: t('requisites.uah.tab'),
                                companyName: {
                                    title: t('requisites.uah.companyName.title'),
                                    value: t('requisites.uah.companyName.value')
                                },
                                address: {
                                    title: t('requisites.uah.address.title'),
                                    value: t('requisites.uah.address.value')
                                },
                                iban: {
                                    title: t('requisites.uah.iban.title'),
                                    value: t('requisites.uah.iban.value')
                                },
                                bankName: {
                                    title: t('requisites.uah.bankName.title'),
                                    value: t('requisites.uah.bankName.value')
                                },
                                receiverCode: {
                                    title: t('requisites.uah.receiverCode.title'),
                                    value: t('requisites.uah.receiverCode.value')
                                },
                                transactionComment: {
                                    title: t('requisites.uah.transactionComment.title'),
                                    value: t('requisites.uah.transactionComment.value')
                                }
                            },
                            usd: {
                                tab: t('requisites.usd.tab'),
                                companyName: {
                                    title: t('requisites.usd.companyName.title'),
                                    value: t('requisites.usd.companyName.value')
                                },
                                address: {
                                    title: t('requisites.usd.address.title'),
                                    value: t('requisites.usd.address.value')
                                },
                                iban: {
                                    title: t('requisites.usd.iban.title'),
                                    value: t('requisites.usd.iban.value')
                                },
                                bankName: {
                                    title: t('requisites.usd.bankName.title'),
                                    value: t('requisites.usd.bankName.value')
                                },
                                receiverCode: {
                                    title: t('requisites.usd.receiverCode.title'),
                                    value: t('requisites.usd.receiverCode.value')
                                },
                                transactionComment: {
                                    title: t('requisites.usd.transactionComment.title'),
                                    value: t('requisites.usd.transactionComment.value')
                                }
                            },
                            eur: {
                                tab: t('requisites.eur.tab'),
                                companyName: {
                                    title: t('requisites.eur.companyName.title'),
                                    value: t('requisites.eur.companyName.value')
                                },
                                address: {
                                    title: t('requisites.eur.address.title'),
                                    value: t('requisites.eur.address.value')
                                },
                                iban: {
                                    title: t('requisites.eur.iban.title'),
                                    value: t('requisites.eur.iban.value')
                                },
                                bankName: {
                                    title: t('requisites.eur.bankName.title'),
                                    value: t('requisites.eur.bankName.value')
                                },
                                receiverCode: {
                                    title: t('requisites.eur.receiverCode.title'),
                                    value: t('requisites.eur.receiverCode.value')
                                },
                                transactionComment: {
                                    title: t('requisites.eur.transactionComment.title'),
                                    value: t('requisites.eur.transactionComment.value')
                                }
                            },
                            crypto: {
                                tab: t('requisites.crypto.tab'),
                                BUSD: {
                                    title: t('requisites.crypto.BUSD.title'),
                                    value: t('requisites.crypto.BUSD.value')
                                },
                                BUSDNetwork: {
                                    title: t('requisites.crypto.BUSDNetwork.title'),
                                    value: t('requisites.crypto.BUSDNetwork.value')
                                },
                                ETH: {
                                    title: t('requisites.crypto.ETH.title'),
                                    value: t('requisites.crypto.ETH.value')
                                },
                                ETHNetwork: {
                                    title: t('requisites.crypto.ETHNetwork.title'),
                                    value: t('requisites.crypto.ETHNetwork.value')
                                },
                                USDT: {
                                    title: t('requisites.crypto.USDT.title'),
                                    value: t('requisites.crypto.USDT.value')
                                },
                                USDTNetwork: {
                                    title: t('requisites.crypto.USDTNetwork.title'),
                                    value: t('requisites.crypto.USDTNetwork.value')
                                },
                                ВТС: {
                                    title: t('requisites.crypto.BTC.title'),
                                    value: t('requisites.crypto.BTC.value')
                                },
                                ВТСNetwork: {
                                    title: t('requisites.crypto.BTCNetwork.title'),
                                    value: t('requisites.crypto.BTCNetwork.value')
                                }
                            },
                            paypal: {
                                value: t('requisites.paypal.value'),
                            }
                        }} 
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionHelp;
