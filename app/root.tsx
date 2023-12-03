import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => [
    {
        charset: "utf-8",
    },
    {
        name: "viewport",
        content: "width=device-width,initial-scale=1",
    },
    {
        title: "Light of Respect",
    },
];

export const links: LinksFunction = () => {
    return [
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
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap-reboot.min.css",
        }
    ];
};

export default function App() {
    return (
        <html lang="uk">
            <head>
                <Meta />

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
