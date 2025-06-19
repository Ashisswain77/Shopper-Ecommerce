import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx';
const Product = () => {
    const { id } = useParams();
    const { all_product } = useContext(ShopContext);

    // Find the product by id (convert id to string or number as needed)
    const product = all_product.find((item) => String(item.id) === id);

    return (
        <div>
            <Breadcrum product={product} />
			<ProductDisplay product={product} />
			<DescriptionBox />
			<RelatedProducts />
        </div>
    );
};

export default Product;