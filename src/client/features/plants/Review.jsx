import { useGetReviewsQuery } from "../../store/reviewSlice";
import { useState } from "react";
import ReviewPop from "./ReviewPop";
import ReviewNew from "./ReviewNew";
import Popup from "../components/Popup";

export default function Review(plantId) {
  const id = plantId.plantId;
  const { data: reviews, isLoading } = useGetReviewsQuery(id);
  const [buttonPopup, setButtonPopup] = useState(false);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="reviews">
      <h2>Reviews</h2>
      <button onClick={() => setButtonPopup(true)}>Create Review</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <ReviewNew plantId={id} />
      </Popup>
      {isLoading && <p>Loading Reviews...</p>}
      {reviews && (
        <ul className="review-list">
          {reviews.map((review) => (
            <ReviewPop key={review.id} review={review} />
          ))}
        </ul>
      )}
    </div>
  );
}
