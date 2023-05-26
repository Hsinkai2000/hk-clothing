import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user);
    };
    return (
        <div>
            {console.log("hi")}
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in</button>
        </div>
    );
};

export default SignIn;
