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
            <Outlet />  {/* This will render the child routes like login or register */}
            <ScrollRestoration />
            <Scripts />
        </body>
    );
}
