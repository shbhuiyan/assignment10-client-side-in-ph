import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import NoDataFound from "./NoDataFound";

const RenderByCategory = () => {
    const [showProduct , setShowProduct] = useState([])

    const {category} = useParams()
    const allProducts = useLoaderData()

    useEffect(() => {
        const categoryByProduct = allProducts.filter(product => product.category === category)
        setShowProduct(categoryByProduct);

    },[allProducts , category])


    return (
        <>
            {
                showProduct.length < 0 ? <NoDataFound/> : <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {
                    showProduct.map(product => <ProductCard key={product._id} product={product} />)
                }
                
            </div>
            }
        </>
    );
};

export default RenderByCategory;