import {
    Total,
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
} from "./checkout.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>Product</HeaderBlock>
                <HeaderBlock>Name</HeaderBlock>
                <HeaderBlock>Quantity</HeaderBlock>
                <HeaderBlock>Price</HeaderBlock>
                <HeaderBlock>Remove</HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((item) => {
                console.log(item.name);

                return <CheckoutItem key={item.id} cartItem={item} />;
            })}

            <Total>Total : ${totalPrice}</Total>
        </CheckoutContainer>
    );
};

export default Checkout;
