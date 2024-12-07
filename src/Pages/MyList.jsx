import { useLoaderData } from "react-router-dom";

const MyList = () => {


    const allProducts = useLoaderData()



    return (
        <div>
            {
                allProducts.length
            }
        </div>
    );
};

export default MyList;