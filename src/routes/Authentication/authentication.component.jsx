// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/signup/signup-form.component";
import SignInForm from "../../components/signin/signin-form.component";
import "./authentication.styles.scss";

const SignIn = () => {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await getRedirectResult(auth);
    //         // const userDocRef = createUserDocumentFromAuth(user);
    //         if (response) {
    //             const userDocRef = createUserDocumentFromAuth(response.user);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default SignIn;
