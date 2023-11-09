import {
  Form,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import type { LinksFunction } from "@remix-run/node";
import { auth } from "../app/Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import appStylesHref from "./app.css";
import useStyles from "./styles";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  // console.log(process.env.PROJECT_REMIX_CHAIN)
  // const [notice, setNotice] = useState("");
  // try {
  //   signInWithEmailAndPassword(auth, "email@gmail.com", "21323244").then(() => {
  //     console.log("SIGNED IN")
  //   });

  // } catch {
  //   setNotice("You entered a wrong userrname or password.");
  // }
  const className = useStyles()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={className.back}>

        <div id="sidebar">
          <h1>Remix Contacts</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
            </Form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>
          <nav >
            <ul>
              <li>
                <a style={{ flex: 1 }} href={`/login`}>Login</a>
              </li>
              <li>
                <a style={{ flex: 1 }} href={`/home`}>Schedule</a>
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
