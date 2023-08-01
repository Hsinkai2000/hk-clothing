import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import {
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import { SignInContainer, ButtonsContainer } from "./signin-form.styles";

const defaultValues = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [fields, setFields] = useState(defaultValues);
    const { email, password } = fields;

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
        } catch (error) {
            switch (error.code) {
                case "auth/wrong-password":
                    alert("Incorrect password");
                    break;
                case "auth/user-not-found":
                    alert("No user with this email address was found");
                    break;
                default:
                    console.log(error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    return (
        <SignInContainer>
            <h2>Already have an account?</h2>
            <span>Sign in to your account</span>
            <form onSubmit={submitHandler}>
                <FormInput
                    label="Email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                />
                <FormInput
                    label="Password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                />
                <ButtonsContainer>
                    <Button
                        buttonType={BUTTON_TYPE_CLASSES.base}
                        type="submit"
                        children="sign in"
                    />
                    <Button
                        type="button"
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        children="Google Sign In"
                        onClick={signInWithGoogle}
                    />
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

export default SignInForm;
