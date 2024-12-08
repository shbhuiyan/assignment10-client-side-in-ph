/* eslint-disable react/prop-types */

const ReviewCard = ({singleReview}) => {

    const {photo , userName , userEmail , review} = singleReview

    return (
        <div className="card bg-base-100 image-full max-w-xl shadow-xl">
          <figure>
            <img
              src={photo}
              alt={userName} />
          </figure>
          <div className="card-body justify-center items-start ">
            <h2 className="text-2xl font-bold">Name : {userName}</h2>
            <h2 className="card-title">Email : {userEmail}</h2>
            <p className="text-lg">Review : {review}</p>
          </div>
        </div>
    );
};

export default ReviewCard;