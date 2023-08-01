import {
    CheckoutItemContainer,
    ImageContainer,
    Quantity,
    Arrow,
    Value,
    BaseSpan,
    RemoveButton,
} from "./checkout-item.style";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const CheckoutItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
        useContext(CartContext);
    const handleIncrease = () => {
        return addItemToCart(cartItem);
    };
    const handleDecrease = () => {
        return removeItemFromCart(cartItem);
    };
    const handleRemove = () => {
        return deleteItemFromCart(cartItem);
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
