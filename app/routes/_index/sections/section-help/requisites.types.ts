export type BankRequisites = {
    tab: string;
    companyName: {
        title: string;
        value: string;
    };
    address: {
        title: string;
        value: string;
    };
    iban: {
        title: string;
        value: string;
    };
    bankName: {
        title: string;
        value: string;
    };
    receiverCode: {
        title: string;
        value: string;
    };
    transactionComment: {
        title: string;
        value: string;
    };
}

export type RequisitesType = {
    uah: BankRequisites;
    usd: BankRequisites;
    eur: BankRequisites;
    crypto: {
        tab: string;
        BUSD: {
            title: string;
            value: string;
        };
        BUSDNetwork: {
            title: string;
            value: string;
        };
        ETH: {
            title: string;
            value: string;
        };
        ETHNetwork: {
            title: string;
            value: string;
        };
        USDT: {
            title: string;
            value: string;
        };
        USDTNetwork: {
            title: string;
            value: string;
        };
        ВТС: {
            title: string;
            value: string;
        };
        ВТСNetwork: {
            title: string;
            value: string;
        };
    };
    paypal: {
        value: string;
    }
}
