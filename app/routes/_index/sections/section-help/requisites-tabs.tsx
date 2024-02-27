import React from 'react';
import PaypalLogoLight from "~/images/icons/paypal-logo-light.svg";

import type { RequisitesType, BankRequisites, } from "./requisites.types";
import RequisitesTab from "./requisites-tab";
import RequisitesDataItem from "./requisites-data-item";
import classNames from "classnames";

type Props = {
    requisites: RequisitesType,
};

const RequisitesTabs = ({
    requisites,
}: Props) => {
    const [activeTab, setActiveTab] = React.useState('uah');
    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };
    
    const bankItems: { [key: string]: BankRequisites } = {
        uah: requisites.uah,
        usd: requisites.usd,
        eur: requisites.eur,
    };

    return (
        <div className="col-lg-6">
            <div
                id="requisites-tabs-container"
                className="requisites-tabs-container d-flex flex-wrap"
            >
                <RequisitesTab
                    label={requisites.uah.tab}
                    value='uah'
                    onChange={handleTabChange}
                    active={activeTab === 'uah'}
                />
                <RequisitesTab
                    label={requisites.usd.tab}
                    value='usd'
                    onChange={handleTabChange}
                    active={activeTab === 'usd'}
                />
                <RequisitesTab
                    label={requisites.eur.tab}
                    value='eur'
                    onChange={handleTabChange}
                    active={activeTab === 'eur'}
                />
                <RequisitesTab
                    label={requisites.crypto.tab}
                    value='crypto'
                    onChange={handleTabChange}
                    active={activeTab === 'crypto'}
                />
                <RequisitesTab
                    className="w-100 info"
                    justify="center"
                    label={<img src={PaypalLogoLight} alt="Paypal"/>}
                    value='paypal'
                    onChange={handleTabChange}
                    active={activeTab === 'paypal'}
                    withArrow={false}
                />
            </div>
            <div className="requisites-content">
                {Object.keys(bankItems).map((bankItem, index, arr) => (
                    <div
                        key={bankItem}
                        className={classNames('requisites-content__data', {
                            active: activeTab === bankItem,
                        })}
                    >
                        <RequisitesDataItem
                            title={`${bankItems[bankItem].companyName.title}:`}
                            value={bankItems[bankItem].companyName.value}
                        />

                        <RequisitesDataItem
                            title={`${bankItems[bankItem].address.title}:`}
                            value={bankItems[bankItem].address.value}
                        />

                        <RequisitesDataItem
                            title={`${bankItems[bankItem].iban.title}:`}
                            value={bankItems[bankItem].iban.value}
                            
                        />

                        <RequisitesDataItem
                            title={`${bankItems[bankItem].bankName.title}:`}
                            value={bankItems[bankItem].bankName.value}
                        />

                        <RequisitesDataItem
                            title={`${bankItems[bankItem].receiverCode.title}:`}
                            value={bankItems[bankItem].receiverCode.value}
                        />

                        <RequisitesDataItem
                            title={`${bankItems[bankItem].transactionComment.title}:`}
                            value={bankItems[bankItem].transactionComment.value}
                        />
                    </div>
                ))}

                <div
                    className={classNames('requisites-content__data', {
                        active: activeTab === 'crypto',
                    })}
                >
                    <RequisitesDataItem
                        title={`${requisites.crypto.BUSD.title}:`}
                        value={requisites.crypto.BUSD.value}
                        
                    />
                    <RequisitesDataItem
                        title={`${requisites.crypto.BUSDNetwork.title}:`}
                        value={requisites.crypto.BUSDNetwork.value}
                    />

                    <br/>

                    <RequisitesDataItem
                        title={`${requisites.crypto.ETH.title}:`}
                        value={requisites.crypto.ETH.value}
                        
                    />
                    <RequisitesDataItem
                        title={`${requisites.crypto.ETHNetwork.title}:`}
                        value={requisites.crypto.ETHNetwork.value}
                    />

                    <br/>

                    <RequisitesDataItem
                        title={`${requisites.crypto.USDT.title}:`}
                        value={requisites.crypto.USDT.value}
                        
                    />
                    <RequisitesDataItem
                        title={`${requisites.crypto.USDTNetwork.title}:`}
                        value={requisites.crypto.USDTNetwork.value}
                    />

                    <br/>

                    <RequisitesDataItem
                        title={`${requisites.crypto.ВТС.title}:`}
                        value={requisites.crypto.ВТС.value}
                        
                    />
                    <RequisitesDataItem
                        title={`${requisites.crypto.ВТСNetwork.title}:`}
                        value={requisites.crypto.ВТСNetwork.value}
                    />
                </div>
                <div
                    className={classNames('requisites-content__data', {
                        active: activeTab === 'paypal',
                    })}
                >
                    <RequisitesDataItem
                        title=""
                        value={requisites.paypal.value}
                        
                    />
                </div>
            </div>
        </div>
    );
};

export default RequisitesTabs;
