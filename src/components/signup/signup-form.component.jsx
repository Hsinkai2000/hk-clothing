import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./signup-form.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code == "auth/email-already-in-use") {
                alert("Email already in use");
            }
            console.log("user creation error" + error);
        }
    };

    return (
        <div className="signup-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    required
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    required
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    required
                    type="text"
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <FormInput
                    label="Confirm Password"
                    type="text"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit" buttonType="default" children="Sign Up" />
            </form>
        </div>
    );
};

export default SignUpForm;
