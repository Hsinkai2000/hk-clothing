import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
} from "../../utils/firebase.utils";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/signup/signup-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRedirectResult(auth);
            // const userDocRef = createUserDocumentFromAuth(user);
            if (response) {
                const userDocRef = createUserDocumentFromAuth(response.user);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {console.log("hi")}
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in</button>

            <button onClick={signInWithGoogleRedirect}>Sign in Redirect</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;
