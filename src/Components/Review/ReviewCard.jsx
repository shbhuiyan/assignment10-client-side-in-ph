/* eslint-disable react/prop-types */

const ReviewCard = ({singleReview}) => {

    const {photo , userName , review} = singleReview

    return (
        <div className="card bg-base-100 image-full h-48 w-96 shadow-xl">
          <figure>
            <img
              src={photo}
              alt={userName} />
          </figure>
          <div className="card-body justify-center items-start ">
            <h2 className="text-xl font-bold">Name : {userName}</h2>
            <p className="text-lg text-center">Review: {review}</p>
          </div>
        </div>
    );
};

export default ReviewCard;