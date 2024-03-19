import {
    Total,
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
} from "./checkout.styles.jsx";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector.js";

const Checkout = () => {

    const cartItems = useSelector(selectCartItems);
    const  totalPrice = useSelector(selectCartTotal);

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
