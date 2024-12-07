import { NavLink, useLoaderData } from "react-router-dom";

const Categories = () => {

    const  allProducts = useLoaderData()
    const categories = [...new Set(allProducts.map(product => product.category))];


    return (
        <div id="category">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold">Explore Our Top Categories</h1>
                <p className="text-base font-semibold text-gray-600">Find exactly what you&#39;re looking for, faster</p>
            </div>
            <div className="flex max-sm:flex-col items-center justify-center gap-10  md:gap-20 my-10">
                {
                    categories.map((category , i) => <div key={i}>
                        <NavLink to={`/category/${category}`} className="capitalize text-2xl font-bold btn">{category}</NavLink>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Categories;