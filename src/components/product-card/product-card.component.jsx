import {
    ProductCardContainer,
    Name,
    Footer,
    Price,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { addItemToCart} from "../../store/cart/cart.action"
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { id, name, imageUrl, price } = product;
    const cartItems = useSelector(selectCartItems);
    const addProductToCart = () => dispatch(addItemToCart(cartItems,product));

    return (
        <ProductCardContainer key={id}>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                children="Add to card"
                onClick={addProductToCart}
            ></Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
