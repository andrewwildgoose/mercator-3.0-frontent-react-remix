import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <body>
            {children}
            <Outlet />
            <ScrollRestoration />
            <Scripts />
        </body>
    );
}
