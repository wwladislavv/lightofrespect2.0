import React from 'react';

import PartnerHoop4Leven from '~/images/icons/partner-hoop-4-leven.png';
import PartnerDriftLogo from '~/images/icons/drift.jpg';
import PartnerFinLogo from '~/images/icons/fin_oval.png';
import PartnerFiziLogo from '~/images/icons/fizi_logo_.svg';
import PartnerHappyElkLogo from '~/images/icons/happy-elk.png';
import PartnerHeatLogo from '~/images/icons/heat.svg';
import PartnerMadHeadsLogo from '~/images/icons/mad-heads.svg';
import PartnerMorshinskaLogo from '~/images/icons/morshinska.svg';
import PartnerNonstopLogo from '~/images/icons/nonstop.jpg';
import PartnerObskuraLogo from '~/images/icons/obskura-logo.png';
import PartnerPotuzhnoLogo from '~/images/icons/potuzhno.jpg';
import PartnerSrLogo from '~/images/icons/partner-sr_logo.png';

type Props = {
    title: string;
};

const SectionPartners = ({
    title
}: Props) => {
    return (
        <section className="section-partners">
            <div className="container">
                <h4 className="title">{title}</h4>
                <div className="partners-list d-flex align-items-center justify-content-between flex-wrap">
                    <img
                        src={PartnerHoop4Leven}
                        alt="partner-hoop-4-leven"
                    />
                    <img
                        src={PartnerDriftLogo}
                        alt="partner-drift-logo"
                    />
                    <img
                        src={PartnerFinLogo}
                        alt="partner-fin-logo"
                    />
                    <img
                        src={PartnerFiziLogo}
                        alt="partner-fizi-logo"
                    />
                    <img
                        src={PartnerHappyElkLogo}
                        alt="partner-happy-elk-logo"
                    />
                    <img
                        src={PartnerHeatLogo}
                        alt="partner-heat-logo"
                    />
                    <img
                        src={PartnerMadHeadsLogo}
                        alt="partner-mad-heads-logo"
                    />
                    <img
                        src={PartnerMorshinskaLogo}
                        alt="partner-morshinska-logo"
                    />
                    <img
                        src={PartnerNonstopLogo}
                        alt="partner-nonstop-logo"
                    />
                    <img
                        src={PartnerObskuraLogo}
                        alt="partner-obskura-logo"
                    />
                    <img
                        src={PartnerPotuzhnoLogo}
                        alt="partner-potuzhno-logo"
                    />
                    <img
                        src={PartnerSrLogo}
                        alt="partner-sr-logo"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionPartners;
