import React from 'react';
import LogoTextlessYellow from "~/images/promin_textless-yellow.svg";

type Props = {
    title: string;
    description: string;
    numbers: {
        requestsPerDay: {
            value: string;
            spec: string;
        };
        gotHelped: {
            value: string;
            spec: string;
        };
        categoriesOfNeeds: {
            value: string;
            spec: string;
        };
        checkDaily: {
            value: string;
            spec: string;
        };
    };
};

const Description = ({
    title, description, numbers,
}: Props) => {
    const {
        requestsPerDay,
        gotHelped,
        categoriesOfNeeds,
        checkDaily
    } = numbers;

    return (
        <div className="col-lg-6">
            <h4 className="title">{title}</h4>
            <p
                className="description"
                dangerouslySetInnerHTML={{__html: description}}
            />
            <div className="numbers d-flex flex-wrap">
                <div className="item">
                    <div className="number">{requestsPerDay.value}</div>
                    <div className="specification">{requestsPerDay.spec}</div>
                </div>
                <div className="item">
                    <div className="number">{gotHelped.value}</div>
                    <div className="specification">{gotHelped.spec}</div>
                </div>
                <div className="item">
                    <div className="number">{categoriesOfNeeds.value}</div>
                    <div className="specification">{categoriesOfNeeds.spec}</div>
                </div>
                <div className="item">
                    <div className="number">{checkDaily.value}</div>
                    <div className="specification">{checkDaily.spec}</div>
                </div>
            </div>
            <img
                className="logo"
                src={LogoTextlessYellow}
                alt=""
            />
        </div>
    );
};

export default Description;
