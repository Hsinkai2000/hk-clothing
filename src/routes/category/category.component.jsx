import "./category.styles.jsx";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {console.log("this " + category)}
                {products &&
                    products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;
