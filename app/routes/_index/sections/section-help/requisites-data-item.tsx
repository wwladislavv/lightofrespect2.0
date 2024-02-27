import React from 'react';

import CopyIcon from "~/images/icons/copy.svg";

const copyToClipboard = async (data: string) => {
    return await navigator.clipboard.writeText(data);
};

type Props = {
    title: string;
    value: string;
};

const RequisitesDataItem = ({
    title, value,
}: Props) => {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        try {
            await copyToClipboard(value);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 1500);
        } catch(error) {
            console.error(error);
        }
    };

    const copyTitle = copied ? 'Copied!' : 'Copy';

    return (
        <>
            {!!title.length && (
                <div className="requisites-content__title">
                    {title}
                </div>
            )}
            <div className="requisites-content__value">
                {value}
                <button
                    className="copy-trigger mx-2"
                    onClick={handleCopy}
                >
                    <img
                        src={CopyIcon}
                        alt="Copy"
                    />
                    <span className="copy-trigger__title">
                        {copyTitle}
                    </span>
                </button>
            </div>
        </>
    );
};

export default RequisitesDataItem;
