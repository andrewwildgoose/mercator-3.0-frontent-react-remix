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
import LoginFormAnim from "~/components/LoginFormAnim";

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
          <LoginFormAnim />
          <li className="group relative flex flex-col justify-end items-center h-24 w-40 transition-transform duration-300 transform hover:-translate-y-1">
            <Link to="/register" className="font-light text-2xl text-custom-text">
              REGISTER
            </Link>
            <span className="absolute bottom-0 left-0 right-0 h-1">
              <span className="absolute w-full h-0.5 top-1 bg-opacity-50 bg-merc-blue transition-opacity duration-200 group-hover:bg-opacity-100"></span>
              <span className="absolute w-full h-0.5 top-2 bg-opacity-50 bg-merc-yellow transition-opacity duration-200 group-hover:bg-opacity-100"></span>
              <span className="absolute w-full h-0.5 top-3 bg-opacity-50 bg-merc-green transition-opacity duration-200 group-hover:bg-opacity-100"></span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}