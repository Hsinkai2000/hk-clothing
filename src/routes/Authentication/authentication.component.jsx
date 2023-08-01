// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/signup/signup-form.component";
import SignInForm from "../../components/signin/signin-form.component";
import { AuthenticationContainer } from "./authentication.styles";

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
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
};

export default SignIn;
