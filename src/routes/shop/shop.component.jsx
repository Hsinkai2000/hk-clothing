import { Routes, Route } from "react-router-dom";
import { ShopContainer } from "./shop.styles.jsx";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils.js";
import { setCategories } from "../../store/categories/category.action.js";
import { useDispatch } from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategories = async () => {
            const categoriesArray = await getCategoriesAndDocuments(
                "categories"
            );
            console.log(categoriesArray);
            dispatch(setCategories(categoriesArray));
        };
        getCategories();
    }, [dispatch]);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;
