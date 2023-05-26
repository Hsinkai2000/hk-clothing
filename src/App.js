import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/signin/sign-in.component";

const Shop = () => {
    return (
        <Fragment>
            <h1>Shop fragment</h1>
        </Fragment>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="signin" element={<SignIn />} />
            </Route>
        </Routes>
    );
};

export default App;
