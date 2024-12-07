/* eslint-disable react/prop-types */

const ProductCard = ({ product }) => {



    const {photo , itemName , category , price , rating , stock} = product;

    
    return (
        <div className="p-4 border rounded-xl">
                <div className="card bg-base-100 shadow-xl border">
                  <figure className="h-96">
                    <img
                      src={photo}
                      alt={itemName} />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-xl font-bold capitalize">{itemName}</h2>
                    <div className="grid grid-cols-2 gap-4 py-4 border-y-2 border-dashed my-2">
                        <p className="font-medium"><span className="text-lg font-bold">category : </span>{category}</p>
                        <p className="font-medium"><span className="text-lg font-bold">rating : </span>{rating}</p>
                        <p className="font-medium"><span className="text-lg font-bold">Available : </span>{stock} P</p>
                        <p className="font-medium"><span className="text-lg font-bold">Price : $</span>{price}</p>
                    </div>
                    <div className="card-actions justify-end">
                      <button className="btn btn-info">View Details</button>
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default ProductCard;