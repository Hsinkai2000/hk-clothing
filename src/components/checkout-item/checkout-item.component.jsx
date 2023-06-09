import "./checkout-item.style.scss";
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
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={handleDecrease}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={handleIncrease}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={handleRemove}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
