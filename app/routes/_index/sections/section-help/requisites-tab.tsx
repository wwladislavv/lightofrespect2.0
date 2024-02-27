import React from 'react';
import classNames from "classnames";

import ArrowRightIcon from "~/images/icons/right-arrow.svg";

type Props = {
    label: string | React.ReactNode;
    value: string;
    onChange: (value: string) => void;
    active: boolean;
    className?: string;
    justify?: string;
    withArrow?: boolean;
};

const RequisitesTab = ({
    label, value, onChange,
    active, className = '', justify = 'between',
    withArrow = true,
}: Props) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();

        onChange(value);
    };

    return (
        <div
            className={classNames(
                "requisites-tabs__item d-flex align-items-center",
                `justify-content-${justify}`,
                {
                    active,
                    [className]: !!className.length,
                }
            )}
            onClick={onClick}
        >
            {label}
            {withArrow && (
                <img
                    src={ArrowRightIcon}
                    alt=""
                />
            )}
        </div>
    );
};

export default RequisitesTab;
