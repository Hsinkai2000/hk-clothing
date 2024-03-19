import { Route, Routes } from "react-router-dom";
import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from "./utils/firebase.utils";

import { Fragment, useEffect } from "react";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/Authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import { setCurrentUser } from "./store/user/user.action";
import Checkout from "./routes/checkout/checkout.component";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unsubscribe;
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop/*" element={<Shop />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default App;
