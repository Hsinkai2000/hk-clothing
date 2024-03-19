import {
    CheckoutItemContainer,
    ImageContainer,
    Quantity,
    Arrow,
    Value,
    BaseSpan,
    RemoveButton,
} from "./checkout-item.style";
import { removeItemFromCart, addItemToCart, deleteItemFromCart } from "../../store/cart/cart.action.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CheckoutItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const { name, quantity, imageUrl, price } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const handleIncrease = () => {
        return dispatch(addItemToCart(cartItems,cartItem));
    };
    const handleDecrease = () => {
        return dispatch(removeItemFromCart(cartItems,cartItem));
    };
    const handleRemove = () => {
        return  dispatch(deleteItemFromCart(cartItems,cartItem));
    };

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={handleDecrease}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={handleIncrease}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={handleRemove}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
