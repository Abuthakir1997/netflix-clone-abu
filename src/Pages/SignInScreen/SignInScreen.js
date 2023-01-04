import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./SignInscreen.css";
const SignInScreen = () => {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((authUser) => {
            console.log("*******", authUser);
        }).catch((err) => {
            alert(err.message);
        });
    };


    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((authUser) => {
            console.log("*******", authUser);
        }).catch((err) => {
            alert(err.message);
        });
    };

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input placeholder="Email" type="email" onChange={e => SetEmail(e.target.value)} value={email} />
                <input placeholder="Password" type="password" onChange={e => SetPassword(e.target.value)} value={password} />
                <button type="submit" onClick={(e) => signIn(e)}>
                    Sign In
                </button>

                <h4>
                    <span className="signupScreen__gray">New to Netflix? </span>
                    <span className="signupScreen__link" onClick={(e) => register(e)}>
                        Sign Up now
                    </span>
                </h4>
            </form>
        </div>
    )
}

export default SignInScreen;
