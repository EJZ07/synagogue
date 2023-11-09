import { Form } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import useStyles from "../styles/login";
import {useState } from 'react'

export const Login = () => {
    const [name, setName] = useState("");
    const className = useStyles()

    return (
        <div className={className.back}>
            <div className={className.center}>
                <h1 className={className.title}>Login</h1>
                <div className={className.bars}>
                    <Form id="search-form" role="search" >
                        <input
                            
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Email Address"
                            type="search"
                            name="q"
                        />
                        <div id="search-spinner" aria-hidden hidden={true} />
                    </Form>
                    <div style={{ marginBottom: 20 }}></div>
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Password"
                            type="search"
                            name="q"
                        />
                        <div id="search-spinner" aria-hidden hidden={true} />
                    </Form>
                    <div style={{ marginBottom: 20 }}></div>
                    <Form method="post">
                        <button type="submit">Login</button>
                    </Form>
                </div>
            </div>

        </div>

    );
}

export default Login