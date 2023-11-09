import { Form } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import useStyles from "../styles/css";
import {useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const className = useStyles()

    const loginWithUsernameAndPassword = async (e) => {
 

        console.log(" USername: ", email)
        alert("Click")

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // window.location.href = "/home"
        } catch {
            window.alert("Wrong Username or Password")
        }
    }
    return (
        <div className={className.back}>
            <div className={className.center}>
                <h1 className={className.title}>Login</h1>
                <div className={className.bars}>
                    <Form role="search" onSubmit={(e) => {loginWithUsernameAndPassword(e)}}>
                        <input
                            
                        
                            aria-label="Search contacts"
                            placeholder="Email Address"
                            type="search"
                            name="q"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div id="search-spinner" aria-hidden hidden={true} />
         
                    <div style={{ marginBottom: 20 }}></div>
                        <input
                         
                            aria-label="Search contacts"
                            placeholder="Password"
                            type="password"
                            name="q"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div id="search-spinner" aria-hidden hidden={true} />
                        <div style={{ marginBottom: 20 }}></div>
                        <button type="submit">Login</button>
                    </Form>
                   
                </div>
            </div>

        </div>

    );
}

export default Login