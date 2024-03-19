import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import {
    NavigationContainer,
    NavLink,
    NavLinksContainer,
    LogoContainer,
} from "./navigation.styles.jsx";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";

import { selectIsCartOpen } from "../../store/cart/cart.selector.js"

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className="logo"></Logo>
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to="/shop">Shop</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            Sign Out
                        </NavLink>
                    ) : (
                        <NavLink to="/signin">Sign in</NavLink>
                    )}
                    <CartIcon className="cart-icon"></CartIcon>
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
