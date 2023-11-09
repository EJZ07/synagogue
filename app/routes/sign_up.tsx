import { Form } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import useStyles from "../styles/login";

export const SignUp = () => {
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
        <div className={className.back}>
            <div className={className.center}>
                <h1 className={className.title}>Register</h1>
                <div>
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
                    <div style={{marginBottom: 20}}></div>
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
                    <div style={{marginBottom: 20}}></div>
                    <Form method="post">
                        <button type="submit">Make Account</button>
                    </Form>
                </div>
            </div>

        </div>

    );
}

export default SignUp