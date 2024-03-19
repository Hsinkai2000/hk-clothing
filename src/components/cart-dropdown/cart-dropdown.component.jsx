import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems,
} from "./cart-dropdown.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-items/cart-items.component";

import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const goToCheckout = () => {
        navigate("/checkout");
    };
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => {
                        return <CartItem key={item.id} cartItem={item} />;
                    })
                ) : (
                    <EmptyMessage>Your Cart is Empty</EmptyMessage>
                )}
            </CartItems>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.base}
                children="Checkout"
                onClick={goToCheckout}
            ></Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;
