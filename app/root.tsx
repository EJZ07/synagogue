import {
  Form,
  NavLink,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import type { LinksFunction } from "@remix-run/node";
import { auth } from "../app/Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import appStylesHref from "./app.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body >

        <div id="sidebar">
          <h1>Remix Contacts</h1>
    
          <nav >
            <ul>
              <li>
                <NavLink to="/sign">Login</NavLink>
              </li>
              <li>
                <NavLink to="/home">Schedule</NavLink>
              </li>
            </ul>


          </nav>
        </div>

        <Outlet />




        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
