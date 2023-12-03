import type { LinksFunction } from "@remix-run/node";

import styles from "~/styles/index.css";

import SectionLanding from "./section-landing";
import SectionHistory from "./section-history";
import SectionActivity from "./section-activity";
import SectionAboutUs from "./section-about-us";
import SectionTeam from "./section-team";
import SectionGallery from "./section-gallery";
import SectionHelp from "./section-help";
import SectionPartners from "./section-partners";
import SectionContacts from "./section-contacts";
import Footer from "./footer";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];

export default function Index() {
    return (
        <main>
            {/* TODO: Move header outside of SectionLanding  */}
            <SectionLanding />

            <SectionHistory />

            <SectionActivity />

            <SectionAboutUs />

            <SectionTeam />

            <SectionGallery />

            <SectionHelp />

            <SectionPartners />
            
            <SectionContacts />

            <Footer />
        </main>
    );
}
