import React from 'react';

import HistoryImg1 from '~/images/history/1.png';
import HistoryImg2 from '~/images/history/2.png';
import HistoryImg3 from '~/images/history/3.png';
import HistoryImg4 from '~/images/history/4.png';
import HistoryImg5 from '~/images/history/5.png';
import HistoryImg6 from '~/images/history/6.png';
import HistoryImg7 from '~/images/history/7.png';
import HistoryImg8 from '~/images/history/8.png';

type Props = any;

const SectionHistory = (props: Props) => {
    return (
        <section className="section-history">
            <div className="section-history__bg d-flex flex-wrap">
                <div className="section-history__bg-overlay"></div>
                <img src={HistoryImg1} alt="" />
                <img src={HistoryImg2} alt="" />
                <img src={HistoryImg3} alt="" />
                <img src={HistoryImg4} alt="" />
                <img src={HistoryImg5} alt="" />
                <img src={HistoryImg6} alt="" />
                <img src={HistoryImg7} alt="" />
                <img src={HistoryImg8} alt="" />
            </div>
            <div className="section-history__content-container">
                <div className="container">
                    <div className="section-history__content-wrap">
                        <div className="section-history__content d-flex align-items-center justify-content-start justify-content-lg-between flex-wrap flex-lg-nowrap">
                            <div className="year">2014 –</div>
                            <div className="story">
                      У результаті повномасштабного вторгнення Росії на територію УкраЇни 24 лютого загинули тисячі людей і були зруйновані десятки міст. Російські військові знищують все на своєму шляху: ґвалтують жінок, чоловіків і дітей, розграбовують їх майно та просто вбивають цивільне населення. Понад 2 500 000 людей покинули свої домівки в пошуках спокою. Вони втратили роботу, дах над головою, родичів чи цілі родини.
                                <br/>
                                <br/>
                      Цей проєкт був створений волонтерами для гуманітраної допомоги, необхідних багатьом людям щодня. Ми збираємо десятки заявок щодня: закуповуємо продукти, засоби індивідуальної гігієни, медикаменти, харчування для домашніх улюбленців.
                                <br />
                      Наша місія – полегшити життя потребуючим, тій категорії людей, які найбільше страждають від цієї страшної війни.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionHistory;
