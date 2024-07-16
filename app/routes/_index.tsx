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
import Auth from "~/components/Auth";

export const meta: MetaFunction = () => {
  return [
    { title: "merkator" },
    { name: "description", content: "Welcome to merkator" },
  ];
};

export default function Index() {


  return (
    <div className="font-light font-sans p-4 h-full flex gap-20 flex-col justify-top items-center mt-16">
      <Logo />
      <Auth />
    </div>
  );
}