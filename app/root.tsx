import type {
    MetaFunction, LinksFunction, LoaderFunctionArgs,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
    Links, LiveReload, Meta,
    Outlet, Scripts, ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";
import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";

import i18next from "~/i18n.server";
import i18nextOptions from "~/i18nextOptions";

export async function loader({ request }: LoaderFunctionArgs) {
    const locale = await i18next.getLocale(request);
    const t = await i18next.getFixedT(request, 'index')
    const title = t('title');
    return json({ locale, title });
}

export let handle = {
    i18n: i18nextOptions.defaultNS,
};

export const meta: MetaFunction = () => [
    {
        charset: "utf-8",
    },
    {
        name: "viewport",
        content: "width=device-width,initial-scale=1",
    },
];

export const links: LinksFunction = () => {
    return [
        {
            rel: "icon",
            href: '/assets/24.png',
            type: "image/png",
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap",
        },
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap-grid.min.css",
        },
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap-utilities.min.css",
        },
        {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap-reboot.min.css",
        }
    ];
};

export default function App() {
    const { locale, title } = useLoaderData<typeof loader>();

    const { i18n } = useTranslation();

    useChangeLanguage(locale);
    
    return (
        <html lang={locale} dir={i18n.dir()}>
            <head>
                <Meta />
                <title>{title}</title>

                <Links />
            </head
            >
            <body>
                <Outlet />

                <ScrollRestoration />

                <Scripts />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />

                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}
