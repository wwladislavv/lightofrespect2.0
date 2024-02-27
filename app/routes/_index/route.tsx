import type { LinksFunction } from "@remix-run/node";

import {
    Header, headerLinks,
    Footer, footerLinks,
} from "~/components";

import styles from "~/styles/index.css";

import {
    SectionLanding, SectionHistory, SectionActivity,
    SectionAboutUs, SectionTeam, SectionGallery,
    SectionHelp, SectionPartners, SectionContacts,
    sectionGalleryLinks,
} from "./sections";


export const links: LinksFunction = () => [
    ...headerLinks(),
    ...footerLinks(),
    ...sectionGalleryLinks(),
    { rel: "stylesheet", href: styles },
];

export default function Index() {

    return (
        <main>
            <Header />

            <SectionLanding />

            <SectionHistory />

            <SectionActivity />

            <SectionAboutUs />

            <SectionTeam />

            <SectionGallery />

            <SectionHelp />

            <SectionPartners />
            
            {/* <SectionContacts
            /> */}

            <Footer />
        </main>
    );
}
