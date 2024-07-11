import type { MetaFunction } from "@remix-run/node";

import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Logo from "~/components/Logo";
import LoginForm from "~/components/LoginForm";
import RegisterForm from "~/components/RegisterForm";

export const meta: MetaFunction = () => {
  return [
    { title: "mercator" },
    { name: "description", content: "Welcome to mercator" },
  ];
};

export default function Index() {


  return (
    <div className="font-light font-sans p-4 h-screen flex gap-20 flex-col justify-center items-center">
      <Logo />
      <nav className="flex gap-2">
        <ul className="flex gap-16 flex flex-col justify-center items-center">
          <LoginForm />
          <RegisterForm />
        </ul>
      </nav>
    </div>
  );
}