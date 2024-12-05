import Categories from "./Categories/Categories";

const OurProducts = () => {
    return (
        <div id="allProducts" className="space-y-10 min-h-screen">
            <div className="max-w-2xl mx-auto text-center space-y-4">
                <h1 className="text-5xl font-bold">Equip Yourself for Success</h1>
                <p className="text-lg font-semibold text-gray-600">Browse our premium selection of sports gear, designed for performance, durability, and comfort—perfect for athletes of all levels.</p>
            </div>
            <Categories/>
        </div>
    );
};

export default OurProducts;