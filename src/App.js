import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/Authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

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
