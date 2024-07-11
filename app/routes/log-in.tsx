import { MetaFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import LoginForm from "~/components/LoginForm";
import LoginFormAnim from "~/components/LoginFormAnim";

export const meta: MetaFunction = () => {
    return [
        { title: "Log In" },
        { name: "description", content: "Log in to your account" },
    ];
};

export default function Login() {
    return (
        <div>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                {/* <LoginForm /> */}
                <LoginFormAnim />
                <ScrollRestoration />
                <Scripts />
            </body>
        </div>
    );
}
